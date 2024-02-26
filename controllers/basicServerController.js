const home=async(req,res)=>{
  return res.status(200).json({
    success:true,
    message:"I am homepage"
  })
}
const about=async(req,res)=>{
    return res.status(200).json({
      success:true,
      message:"I am about page"
    })
  }
  const contact=async(req,res)=>{
    return res.status(200).json({
      success:true,
      email:"support@pwskills.com"
    })
  }
  export {home,contact,about}