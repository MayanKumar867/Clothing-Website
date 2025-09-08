import User from "../model/userModel.js"

// isAuth -> userController -> userRoutes -> index.js  it takes the current user using token and userId
export const getCurrentUser = async (req,res) => {
    try {
        let user = await User.findById(req.userId).select("-password") //req.userId isAuth middlewere se aa raha hai aur isAuth middlewere ko hum routes mai lagayega jusse ki userId mill jay
        if(!user){
           return res.status(404).json({message:"user is not found"}) 
        }
        return res.status(200).json(user)
    } catch (error) {
         console.log(error)
    return res.status(500).json({message:`getCurrentUser error ${error}`})
    }
}

export const getAdmin = async (req, res)=> {
    try {
        let adminEmail = req.adminEmail;
        if (!adminEmail) {
            return res.status(404).json({message:"Admin is not found"}) 
        }
        return res.status(201).json({
            email:adminEmail,
            role:"admin"
        })
    } catch (error) {
        console.log(error)
    return res.status(500).json({message:`getAdmin error ${error}`})
    }
}
