const express = require("express");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Hi I am Devesh, Welcome to my first Node.js Baxkend server!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});