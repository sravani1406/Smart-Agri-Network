🌾 Smart Agri Network
Smart Agri Network is a web-based platform designed to connect farmers, community gardens, and consumers. It allows farmers to register their farms and products, and enables customers to discover fresh, local produce using an interactive map and search functionality.

🚀 Features
• ✅ User login and registration system
• 👨‍🌾 Farmer Dashboard to add and manage farms
• 🛒 Customer Dashboard to browse and search nearby farms
• 🌍 Google Maps Integration to visualize farm locations
• 📱 Responsive UI with modern design
• 🔥 Flash Sales with expiry tracking

📁 Project Structure
📆 Smart Agri Network
│
├── index.html              # Login Page
├── register.html           # Registration Page
├── farmer1.html            # Farmer Dashboard (Add Farm + Flash Sale)
├── customer1.html          # Customer Dashboard (Browse Farms + Flash Sale View)
├── registration.gs       # Logic for adding farms (Google Apps Script)
├── farms.gs     # Logic for displaying farms (Google Apps Script)
└── README.md               # Project documentation

🌐 Pages Overview
🔐 index.html
• User login form with role selection (Farmer or Customer)
• Background image of a sunrise on farmland
• Redirects based on role
📝 register.html
• User registration form for name, email, password
• Google Apps Script integration for storing users
👨‍🌾 farmer1.html
• Interface for farmers to:
o Add new farms
o Input name, location, latitude/longitude, and products
o Optional flash sale inputs: product, price, expiry
• Shows a list of registered farms with names and products
• Google Maps used to pin locations
🛙 customer1.html
• Search farms by city or product
• View list of farms with details (farmer, city, produce)
• Interactive map showing farm locations
• Flash sales from farmers are displayed with expiry
• Clean and light UI with a welcome message

🛠 Technologies Used
• HTML5 & CSS3 – Page structure and styling
• JavaScript – Form logic and client-side scripts
• Google Apps Script – Backend for storing and retrieving farm/user data
• Google Sheets – Acts as the database
• Google Maps API – Maps and farm markers

📌 Setup Instructions
1. Clone or download this repo
2. Link your Google Apps Script backend:
o Create a new project in Google Apps Script
o Paste the code from farmer-script.js and customer-script.js
o Update your spreadsheet headers:
o FARMNAME | FARMERNAME | CITYNAME | LATITUDE | LONGITUDE | PRODUCTSAVAILABLE | FLASHSALEPRODUCT | FLASHSALEPRICE | FLASHSALEEXPIRY
o Deploy the script as a web app (with doGet and doPost)
3. Update the HTML fetch URLs accordingly
4. Open index.html to start


💡 Flash Sales Feature Summary
• Farmers can set a flash sale when adding a farm
• Customers can view flash sales with real-time expiry
• Integrated into both farmer1.html and customer1.html
• Automatically hides expired sales

💪 Future Enhancements
• Authentication using Firebase/Auth0
• Farm image upload support
• Filtering and sorting of search results
• Countdown timer for flash sale
• Mobile app integration

👨‍💼 Developed By
A passionate developer working to bridge agriculture and tech 🌱 Feel free to connect for collaboration!

License: Open-source, free to use and modify for educational/agricultural purposes.
