var sheet = SpreadsheetApp.openById("1Q086ux6dMnIeej3wVwYksSLXRw8Mo0FAR2qMJ9FyXqU").getSheetByName("Farmers");

function doGet() {
  var data = sheet.getDataRange().getValues();
  var farmers = [];

  for (var i = 1; i < data.length; i++) {
    farmers.push({
      FARMNAME: data[i][0],
      FARMERNAME: data[i][1],
      CITYNAME: data[i][2],
      LATITUDE: parseFloat(data[i][3]),
      LONGITUDE: parseFloat(data[i][4]),
      PRODUCTSAVAILABLE: data[i][5] ? data[i][5].split(",").map(p => p.trim()) : [],
      FLASHSALEPRODUCT: data[i][6] || "",
      FLASHSALEPRICE: data[i][7] || "",
      FLASHSALEEXPIRY: data[i][8] || ""
    });
  }

  return ContentService.createTextOutput(JSON.stringify(farmers))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var farmerData = JSON.parse(e.postData.contents);

    sheet.appendRow([
      farmerData.FARMNAME,
      farmerData.FARMERNAME,
      farmerData.CITYNAME,
      farmerData.LATITUDE,
      farmerData.LONGITUDE,
      farmerData.PRODUCTSAVAILABLE.join(", "),
      farmerData.FLASHSALEPRODUCT || "",
      farmerData.FLASHSALEPRICE || "",
      farmerData.FLASHSALEEXPIRY || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Farmer added" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
