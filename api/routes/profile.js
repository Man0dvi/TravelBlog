const express = require('express');
const router = express.Router();

//Require controller modules 
const profileControllers = require('../controllers/profileControllers');

// router.get('/', profileControllers.index);
router.post('/', profileControllers.insert);
// router.put('/update/:id', profileControllers.update);
// router.delete('/delete/:id', profileControllers.delete);


module.exports = router;