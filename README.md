# React + Vite

# 📝 User Feedback System

A full-stack application where users can submit feedback, and admins can view, filter, and manage feedback submissions.

## 🚀 Features

- Submit feedback with Name, Email, Category, and Message
- View all feedback in a dashboard
- Filter by category (Suggestion, Bug, Feature)
- Sort by latest or by user name
- Form validation and success/failure notifications

---

## 📦 Tech Stack

- *Frontend*: React, Axios, TailwindCSS
- *Backend*: Node.js, Express.js
- *Database*: MongoDB (via Mongoose)
- *Dev Tools*: Nodemon, dotenv, CORS

---

## 📁 Project Structure

user-feedback-system/
│
├── server/
│ ├── models/
│ │ └── feedback.js
│ ├── routes/
│ │ └── feedback_route.js
│ ├── .env
│ ├── app.js
│ └── package.json
│
├── client/
│ ├── src/
│ │ ├── components/
│ │ │ ├── FeedbackForm.jsx
|     |__ pages/
|     |
│ │ │ └── FeedbackPage.jsx
│ │ └── App.jsx
│ ├── vite.config.js
│ ├── tailwind.config.js
│ ├── index.html
│ └── package.json


---

## ⚙ Setup Instructions

### 🔧 Backend

cd backend
npm install

### Create a .env file inside /backend

MONGO_URI=your_mongodb_connection_string

### To start server

npm run dev

### 🔧 Frontend

cd frontend
npm install
npm run dev

> Runs on http://localhost:5173


### For Database

## 🧭 Using MongoDB Compass Locally

1. *Install MongoDB & Compass*
   - MongoDB: https://www.mongodb.com/try/download/community
   - Compass: https://www.mongodb.com/try/download/compass

2. *Start Local MongoDB*
   - MongoDB usually runs on mongodb://localhost:27017/userFeedbackDB by default.

3. *Create Database in Compass*
   - Open Compass → Connect to mongodb://localhost:27017/userFeedbackDB
   - Click "Create Database"
     - Name: userFeedbackDB
     - Collection: feedbacks

4. **Add .env in Backend**


## Developed by Aryan Gupta
