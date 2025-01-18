const express = require("express");
const bcrypt = require("bcrypt");
const connection = require("../config/db");

const router = express.Router();

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Query ke database untuk mencari pengguna
  connection.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, results) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Internal server error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid username or password" });
      }

      const user = results[0];

      // Periksa password
      try {
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          return res.status(401).json({ message: "Invalid username or password" });
        }

        // Kirim data pengguna
        res.json({
          message: "Login successful",
          user: { id: user.id, username: user.username, email: user.email },
        });
      } catch (err) {
        console.error("Password verification error:", err);
        res.status(500).json({ message: "Internal server error" });
      }
    }
  );
});

module.exports = router;
