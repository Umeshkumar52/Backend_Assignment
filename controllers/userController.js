import userSchema from '../models/userModel.js'
const register=async(req,res)=>{
    const {Email,password,FullName}=req.body; 
   
    if(!FullName,!Email || !password){
        return res.status(400).json({
            success:false,
            message:"Every field is mandetory"
        })
    }
    try{
    const ExistUser= await userSchema.findOne({Email})
        if(ExistUser){
            return res.status(400).json({
                success:false,
                message:`User allready exist `
              })
        }
        const user= await userSchema.create({
            FullName,
            Email,
            password,
            avatar:{
                publice_id:"124e5d4525fdffd",
                secure_URL:"Deme_Url"
            },
           
        })               
            await user.save() 
            res.status(200).json({
                success:true,
                message:`Signing Successfull`,
                user
              })
        } catch (error) {
            return res.status(400).json({
                success:false,
                message:"Filed to signUp"
              })
            }
     }

// Login
const login=async(req,res)=>{
    try {
      const {Email,password} =req.body
        const user = await userSchema
             .findOne({Email})
             .select('+password');
          
            if(user==null || await user.validator(password,user.password) ==false){
              return res.status(400).json({
                    success:false,
                     message:"Invalide credentials"
                  })
            }
             return res.status(200).json({
            success:true,
            message:"Login Successfully",
            user
        })
    } catch (error) {
       return res.status(400).json({
            success:false,
            message:"Failed to login, please try again."
        })
    }
}
export {register,login}