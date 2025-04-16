function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const action = data.action;
    const sheet = SpreadsheetApp.openById("your_sheet_id").getSheetByName("sheet_name");

    if (action === "register") {
      const { name, email, password, role } = data;
      
      // Check if email already exists
      const values = sheet.getDataRange().getValues();
      const emailExists = values.some(row => row[1] === email); // Assuming email is in the 2nd column

      if (emailExists) {
        return createResponse(false, "Email already registered.");
      }

      // Append user data to the sheet
      sheet.appendRow([name, email, password, role]);

      return createResponse(true, "Registration successful!");
    }

    return createResponse(false, "Invalid action.");
  } catch (error) {
    Logger.log(error.toString());
    return createResponse(false, "Server error.");
  }
}

// Function to handle CORS response
function createResponse(success, message) {
  const output = ContentService.createTextOutput(JSON.stringify({ success, message }))
    .setMimeType(ContentService.MimeType.JSON);
  
  return output.setHeaders({
    "Access-Control-Allow-Origin": "*", // Allows requests from any origin
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });
}

// Handle preflight requests for CORS
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
}
