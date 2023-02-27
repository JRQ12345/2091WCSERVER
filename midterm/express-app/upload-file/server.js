const express = require( 'express') ;
var app = express();
app.use(express.static ( 'public')) ;

const path = require( 'path') ;
const mime = require( 'mime-types');
const multer = require( 'multer');

const fileStorage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/'); // specify the destination directory for the uploaded files
},
filename: function (req, file, cb) {
cb(null, file.originalname); // use the original name of the file
},
});

const upload = multer({ storage: fileStorage });
//file upload route
app.post('/uploads', upload.single('myFile'), (req, res) => {
console. log (req.file) ;

req.file.mimetype = mime.lookup(req.file.originalname) ;

res.sendFile(path.join(__dirname, 'file-uploaded.html'));
});
//route to upload
app.get('/file-upload', (req, res) => {
res.sendFile( __dirname +'/' +'file-upload.html');
});

app.listen(3000, function(){
    console.log('Server running at http://localhost:3000');
});