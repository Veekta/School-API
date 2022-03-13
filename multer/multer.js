//cannot set headers after they are sent ttto client 
//env is environmental variable when u want to hide some stuff
//multer allows node to understand form data and files
const multer = require('multer')
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'uploads')
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname)
    }
});

const fileFilter = (req, file, cb)=>{
    const ext = path.extname(file.originalname);
    if(ext !== '.jpg' || ext !== '.jpeg' || ext !== '.png'){
        cb(null, new Error('File format not supported'), false);
    }else{
        cb(null, true)
    }
}

const imageUploader = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        filesize: 1024 * 1024 * 20
    }
}).single("schoolImage");

module.exports = imageUploader;