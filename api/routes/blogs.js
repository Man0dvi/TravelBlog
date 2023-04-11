const express = require('express');
const router = express.Router();

//Require controller modules 
const blogsControllers = require('../controllers/blogsControllers');

router.get('/', blogsControllers.index);
router.post('/', blogsControllers.insert);
// router.put('/update/:id', blogsControllers.update);
// router.delete('/delete/:id', blogsControllers.delete);


module.exports = router;