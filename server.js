const express = require("express");
const app = express();

// Use the correct port from Render
const PORT = process.env.PORT || 3000;

// ✅ Make sure this route exists
app.get("/", (req, res) => {
    res.json({ message: "JC Song Tracker API is live!" });
});

// Start the server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
