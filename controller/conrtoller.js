const userModel = require("../models/userModel"); 
const bcrypt = require("bcryptjs");

exports.userCreate = async (req,res)=>{
    console.log("rsp.body ",req.body);

    try {

        const {name , email,dob, bio ,age,gender,password} = req.body;

        if(!name|| !email ||!dob ||!bio||!age||! req.file||!gender || !password){

            return res.status(201).json({
                status:201,
                error : "please enter a required filds"

        });
        }

        const user = new userModel();


        user.name = name;
        user.email = email;
        user.dob = dob;
        user.bio = bio;   
        user.age = age;
        user.password = bcrypt.hashSync(password,10);
        user.profileimage = req.file.path;
        user.gender = gender;
        user.uniqueId = "demo uniqueId";
        user.username = name;


        await user.save();
        console.log(" response data := ",user);
        
        // await user.save();
        return res.status(200).json({
            staus:true,
            massage:user
        });


    } catch (error) {
        return res.status(500).json({
            status:500,
            error : error
        });
    }

}


exports.login = async (req,res)=>{

    console.log(" req.body ",req.body);

    try {
        const {name,password} = req.body;


        if(!name || !password){
            return res.status(401).json({
                staus:false,
                massage:"please enter a user name and password"
            });
        }

        const user = await userModel.findOne({
            name:name
        });

        if(!user){
            return res.status(401).json({
                staus:false,
                massage:"please enter a veilid user name"
            });
        }

        if(bcrypt.compareSync(password,user.password)){
            return res.status(200).json({
                status:true,
                data:user
            });
        }else{
            return res.status(200).json({
                status:true,
                massage:"your password is wrong"
            });
        }


    } catch (error) {
        return res.status(500).json({
            status:false,
            error:error
        });
    }
}
