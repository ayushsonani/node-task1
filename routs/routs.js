const express = require("express");
const route = express.Router();

const  controller = require("../controller/conrtoller");

const multer = require("multer");
const storage  = require("../multer");
const checkaccesskey = require("../utils/checkaccesskey");
const upload = multer({storage});

route.post("/usercreate",checkaccesskey(),upload.single('profileimage'),controller.userCreate);
route.post("/login",checkaccesskey(),controller.login);
module.exports = route;