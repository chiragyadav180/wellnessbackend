# Wellness Sessions Backend

This is the backend for the **Wellness Sessions** platform — built for the Arvyax Full Stack Internship Assignment. It handles user authentication and session management (drafts + published).

---

## 🚀 Features

- User Registration and Login (with JWT token auth)
- Create/Edit/Delete Sessions
- Save as Draft or Publish
- Protected API routes with middleware
- MongoDB for persistent storage

---

## 🔧 Tech Stack

- **Node.js** with **Express**
- **MongoDB** (via Mongoose)
- **JWT** for authentication
- **dotenv** for environment management

---

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/chiragyadav180/wellnessbackend.git
   cd wellnessbackend

2.Install dependencies
npm install

3.Create .env file
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key

4.Run the server
npm start
