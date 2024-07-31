const multer = require("multer");

module.exports = multer.diskStorage({
filename: function(req,file,callback){
    const filename = Date.now() + Math.random() + file.originalname;

    callback(null, filename);
},
destination:function(req,file,callback){
    callback(null, "storage");
},
});