const express = require('express');
const router = express.Router();
const {userUpload ,downloadImage} = require('../controllers/controllersroute');
const upload = require('../multer/multerfile.js')


// router.get('/',show);


router.post('/user',upload.single('file'), userUpload);
router.get('/FileSharing/:fileId',downloadImage)

module.exports  = router;