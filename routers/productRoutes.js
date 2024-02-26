import express from "express";
import { Router } from "express";
import { menProduct, product, welcome, womenProduct } from "../controllers/producrController.js";
const router=express.Router()
router.get('/',welcome)
router.post('/createProduct',product)
router.get('/men',menProduct)
router.get('/women',womenProduct)
export default router