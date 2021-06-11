const authController=require('../controllers/auth')
const router=require('express').Router()

router.post('/login',authController.sign)
router.post('/logup',authController.register)

module.exports=router;