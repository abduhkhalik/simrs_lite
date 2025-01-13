const db = require("../config/db");

// Mendapatkan semua pengguna
const getAllUsers = (callback) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    callback(err, results);
  });
};

// Menambahkan pengguna baru
const addUser = (data, callback) => {
  const sql = `
    INSERT INTO users (id, nama_lengkap, username, password, petugas)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.query(sql, data, (err, result) => {
    callback(err, result);
  });
};

// Memperbarui pengguna berdasarkan ID
const updateUser = (data, callback) => {
  const sql = `
    UPDATE users
    SET 
      nama_lengkap = ?,
      username = ?,
      password = ?,
      petugas = ?
    WHERE id = ?
  `;
  db.query(sql, data, (err, result) => {
    callback(err, result);
  });
};

// Menghapus pengguna berdasarkan ID
const deleteUser = (id, callback) => {
  const sql = `DELETE FROM users WHERE id = ?`;
  db.query(sql, [id], (err, result) => {
    callback(err, result);
  });
};

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
};
