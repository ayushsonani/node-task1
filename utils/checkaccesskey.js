const { KEY } = require("./config");

module.exports = ()=>{
    return (req,res,callback)=>{
        const key = req.body.key || req.headers.key || req.query.key;


        if(!key){
            return res.status(401).json({
                status:false,
                massage:"please enter a key"
            });
        }else{
            if(key == KEY){
                callback();
            }
            else{
                res.status(201).json({

                    status:false,
                    massage:"enter a courrent KEY"
                });
            }
        }


    }
}