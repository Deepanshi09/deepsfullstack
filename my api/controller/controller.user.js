var User = require('../models/user')
//signup
exports.Signup = (req,res)=>{

    try{

        User.create({
            "name":req.body.name,
            "age":req.body.age,
            "email":req.body.email,
           "password":req.body.password,
           "mobileNo":req.body.mobileNo,
           "location":req.body.location
        },(err,result)=>{
            if(err)
            {
                res.send({"message":"Database or Syntax Error"})
            }
            else
            {
                res.send({"code":200,"httpcode":200,"message":"Success","Data":result})
            }
        })


    }
catch(err){
    res.status(500).json({"message":"databaseserver"});
}
}

exports.Login =(req,res)=>{

    try{

        var checkuser = new Promise((resolve,reject)=>{

            User.find({"email":req.body.email},(err,result)=>{
                if(err)
                {
                    reject({"httpcode":500,"code":500,"message":"Db Error"})
                }
                else{
                    !result.length ? reject({"code":210,"httpcode":200,"message":"not found"}): resolve(result[0])
                }
            })
        })
        Promise.all([checkuser]).then((results)=>{

            if(results[0].password===req.body.password)
            {
                res.send({"code":200,"httpcode":200,"message":"success login","data":results})
            }else{
                res.send({"code":410,"message":"Invalid email or password"})
            }



        }).catch((err)=>[
            res.status(500).json({"message":"databaseserver"})
        ])
    }
    catch(err){
        res.status(500).json({"message":"databaseserver"})
    }

}