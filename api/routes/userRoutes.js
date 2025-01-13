const express = require('express');
const userController = require('../controllers/userControllers');

const router = express.Router();

router.post('/add-user', userController.addUser); 
router.put('/edit-user', userController.updateUser); 
router.get('/get-users', userController.getAllUsers);
router.delete('/delete-user/:id', userController.deleteUser);

module.exports = router;
