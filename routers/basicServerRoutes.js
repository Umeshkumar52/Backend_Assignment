import expres from 'express'
import { Router } from 'express'
import { about, contact, home } from '../controllers/basicServerController.js'
const router=expres.Router()
router.get('/',home)
router.get('/about',about)
router.get('/contact',contact)
export default router