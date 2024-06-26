import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, "public/upload");
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString()+'-'+file.originalname);
    },
});
 
const fileFilter = (req, file, cb) =>{
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg')
        {
        cb(null, true);

    }else(
        {'error': 'Unsupported'},
        false
    );
};

 const upload = multer({
    storage,
    limits: {fileSize:1024*1024},
    fileFilter,
});

const uploadMiddleware = upload.array('image');
