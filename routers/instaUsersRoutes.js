import { Router } from "express";
import  express  from "express";
import { register,login } from "../controllers/instaUsersController.js";
const router=express.Router()
router.post('/register',register)
router.post('/login',login)
export default router