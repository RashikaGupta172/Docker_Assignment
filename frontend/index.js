const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like HTML, CSS, JS) from public folder
app.use(express.static(path.join(__dirname, "public")));

// Route to handle form submission
app.post("/submit", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const response = await fetch("http://backend:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    res.send(`<h2>${data.message}</h2>`);
  } catch (error) {
    res.send("Error connecting to backend: " + error.message);
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
