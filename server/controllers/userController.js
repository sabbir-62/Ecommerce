// import user model
const User = require('../models/userModel');


const createUser = async(req, res) => {
const {email} = req.body

    const findUser = await User.findOne({email});

    if(!findUser){
        const newUser = User.create(req.body);
        return res.json({
            success: true,
            message: "User data save successful",
            user: newUser
        })
    }
    else{
        return res.json({
            success: false,
            message: "User already exist"
        })
    }
}


module.exports = createUser;