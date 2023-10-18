const express = require("express");
const app = express();
const path = require("path");

// Serve static files (your frontend) from a directory named 'public'
app.use(express.static(path.join(__dirname, "public")));

// Define your API routes or any other backend logic here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
