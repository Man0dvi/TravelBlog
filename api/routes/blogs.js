const express = require('express');
const router = express.Router();
const path = require('path');
//Require controller modules 
const blogsControllers = require('../controllers/blogsControllers');

const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './views/assets/imgs')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
    }
  })
const upload = multer({ storage: storage });
router.get('/', blogsControllers.index);
router.post('/', upload.single('blogTitleImg'), blogsControllers.insert);
// router.put('/update/:id', blogsControllers.update);
// router.delete('/delete/:id', blogsControllers.delete);


module.exports = router;