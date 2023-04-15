const express = require('express');
const router = express.Router();
//Require controller modules 
const blogsControllers = require('../controllers/blogsControllers');

const multer  = require('multer')
const upload = multer({ dest: './uploads/' })
router.get('/', blogsControllers.index);
router.post('/', upload.single('blogTitleImg'), blogsControllers.insert);
// router.put('/update/:id', blogsControllers.update);
// router.delete('/delete/:id', blogsControllers.delete);


module.exports = router;