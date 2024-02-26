import express from 'express'
import { Router } from 'express'
import { counter, counterDec, counterInc } from '../controllers/counterController.js'
const router=express.Router()
router.get('/',counter)
router.put('/inc',counterInc)
router.put('/dec',counterDec)
export default router