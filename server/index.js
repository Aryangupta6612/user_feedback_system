const feedbackRoutes = require("./routes/feedbackRoutes")
const express = require('express')
const app = express()
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials:true,
}));
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/feedback", feedbackRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
