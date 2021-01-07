module.exports=router=>
{
    var UserController = require("../controller/controller.user");
    router.post('/signup',UserController.Signup)
    router.post('/login',UserController.Login)

    return router
}