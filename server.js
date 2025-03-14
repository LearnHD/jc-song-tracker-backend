const express = require("express");
const app = express();

// Use the correct port from Render
const PORT = process.env.PORT || 3000;

// Basic route to confirm API is live
app.get("/", (req, res) => {
    res.json({ message: "JC Song Tracker API is live!" });
});

// Start the server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
