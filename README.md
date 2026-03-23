# Wanderlust 🌍✈️

Wanderlust is a full-stack web application inspired by Airbnb. It allows users to explore, create, and review various accommodation listings around the world.

## 🚀 Features

- **User Authentication:** Secure sign-up, login, and logout functionalities using Passport.js.
- **Listings Management:** Authenticated users can create, edit, and delete their own accommodation listings.
- **Interactive Reviews:** Users can leave ratings and reviews on different listings.
- **Image Uploads:** Seamless image uploading and cloud storage integration using Cloudinary and Multer.
- **Responsive UI:** Dynamic and responsive frontend built with EJS templates and styled for all devices.
- **Data Security:** Session management with Connect-Mongo and environment variables.
- **Error Handling:** Robust error handling and user feedback via Flash messages.

## 🛠️ Tech Stack

**Frontend:**
- HTML, CSS, JavaScript
- [EJS](https://ejs.co/) (Embedded JavaScript templating) & EJS-Mate
- Bootstrap (Assumed for styling)

**Backend:**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- RESTful API Architecture

**Database & Storage:**
- [MongoDB](https://www.mongodb.com/) (Database)
- [Mongoose](https://mongoosejs.com/) (ODM)
- [Cloudinary](https://cloudinary.com/) (Image hosting)

**Authentication & Security:**
- [Passport.js](https://www.passportjs.org/) (Local Strategy)
- express-session, connect-mongo
- Joi (Data Validation)

## 💻 Running Locally

Follow these steps to set up the project locally on your machine.

### Prerequisites
- Node.js installed
- MongoDB installed and running locally, or a MongoDB Atlas URI
- Cloudinary account for API keys

### 1. Clone the repository
```bash
git clone <your-repo-link>
cd wanderlust
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up Environment Variables
Create a `.env` file in the root directory and add the following variables:
```env
# Server Port (Optional, defaults to 3000)
PORT=3000

# MongoDB Connection String (Local or Atlas)
ATLASDB_URL=mongodb://127.0.0.1:27017/wanderlust

# Session Secret
SECRET=your_super_secret_session_string

# Cloudinary Credentials for Image Uploads
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### 4. Initialize Database (Optional)
If you have seeding data available in the `init/` directory, you can run it to populate the database with sample listings:
```bash
node init/index.js
```

### 5. Start the Application
```bash
node app.js
```
The application will be running at `http://localhost:3000/`.

## 📂 Project Structure

```
├── controllers/      # Route controllers for Listings, Reviews, and Users
├── init/             # Database initialization and sample data
├── models/           # Mongoose schemas (Listing, Review, User)
├── public/           # Static assets (CSS, JS, Images)
├── routes/           # Express routes (listing.js, review.js, user.js)
├── utils/            # Utility functions and custom error classes
├── views/            # EJS templates (layouts, listings, includes)
├── .env              # Environment variables
├── app.js            # Main application entry point
└── cloudConfig.js    # Cloudinary configuration
```

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
