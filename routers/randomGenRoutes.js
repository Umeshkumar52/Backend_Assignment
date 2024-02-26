import express from "express";
import { Router } from "express";
import { random } from "../controllers/randomController.js";
const router=express.Router()
router.get('/random',random)
export default router