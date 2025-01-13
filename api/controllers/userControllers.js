const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const UserModel = require("../models/userModel");

// Mendapatkan semua pengguna
const getAllUsers = (req, res) => {
  UserModel.getAllUsers((err, results) => {
    if (err) {
      console.error("Gagal mengambil data pengguna:", err.message);
      return res.status(500).send("Gagal mengambil data pengguna");
    }
    res.json(results);
  });
};

// Menambahkan pengguna baru
const addUser = async (req, res) => {
  const { nama_lengkap, username, password, petugas } = req.body;
  const id = uuidv4();

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = [id, nama_lengkap, username, hashedPassword, petugas];

    UserModel.addUser(data, (err, result) => {
      if (err) {
        console.error("Gagal menambahkan pengguna:", err.message);
        return res.status(500).send("Gagal menambahkan pengguna");
      }
      res.send("Pengguna berhasil ditambahkan");
    });
  } catch (err) {
    console.error("Gagal hashing password:", err.message);
    res.status(500).send("Gagal menambahkan pengguna");
  }
};

// Memperbarui pengguna berdasarkan ID
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { nama_lengkap, username, password, petugas } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const data = [nama_lengkap, username, hashedPassword, petugas, id];

    UserModel.updateUser(data, (err, result) => {
      if (err) {
        console.error("Gagal mengupdate pengguna:", err.message);
        return res.status(500).send("Gagal mengupdate pengguna");
      }

      if (result.affectedRows === 0) {
        return res.status(404).send(`Pengguna dengan ID ${id} tidak ditemukan`);
      }

      res.send(`Pengguna dengan ID ${id} berhasil diperbarui`);
    });
  } catch (err) {
    console.error("Gagal hashing password:", err.message);
    res.status(500).send("Gagal mengupdate pengguna");
  }
};

// Menghapus pengguna berdasarkan ID
const deleteUser = (req, res) => {
  const { id } = req.params;

  UserModel.deleteUser(id, (err, result) => {
    if (err) {
      console.error("Gagal menghapus pengguna:", err.message);
      return res.status(500).send("Gagal menghapus pengguna");
    }
    res.send(`Pengguna dengan ID ${id} berhasil dihapus`);
  });
};

module.exports = {
  getAllUsers,
  addUser,
  updateUser,
  deleteUser,
};
