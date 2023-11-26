const express=require('express');
const user=require('../models/user');
const { registerCheck,validator,loginCheck } = require('../middlewares/validator');
const bcrypt=require('bcrypt');
const router =express.Router();
const jwt =require('jsonwebtoken')
const upload =require ('../utils/multer')
const isAuth=require('../middlewares/Autho')
const isAdmin=require('../middlewares/Admin')
//register
router.post("/register",upload("users").single("file"),registerCheck(), validator, async (req, res) => {
    const { email, password, role } = req.body
    try {
        const url =` ${req.protocol}://${req.get("host")}/${req.file.path}`
        const newuser = new user(req.body);
        newuser.img=url
        if (role=="Admin") {
            return res.status(401).send({ msg: "not auth !!" })
        }
        const exist= await user.findOne({email})
        if(exist){
           return res.status(400).send({msg:"already exist"})
        }

        
        const hashedPassword = await bcrypt.hash(password, 10)
        newuser.password = hashedPassword
     const saveduser = await newuser.save();
        res.send( saveduser );  
    } catch (error) {
      
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
})
//login
router.post('/login', loginCheck(), validator, async (req, res) => {
    const { email, password } = req.body
    try { 
        
        const existUser = await user.findOne({ email })
        if (!existUser) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        const isMatched = await bcrypt.compare(password, existUser.password)
  
        if (!isMatched) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        existUser.password = undefined
        const payload = { _id: existUser._id }
        const token = jwt.sign(payload, process.env.secretKey)
        res.send({ user: existUser, token })
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: error.message })
  }})
  //get current user // profile data mte3o 
  router.get("/current",isAuth(), (req, res) => {

 
    res.send({User:req.user} );
   
  })
  //get
  router.get('/', async (req, res) => {
    try {
      const users= await user.find();
      res.send(users);
    } catch (error) {
     console.log(error);
    }
  });
  router.put('/:id',upload("users").single("file"),isAuth(), async (req, res) => {
    const  {name}=req.body
    try {
        const existName = await user.findOne({ name })
        if (existName &&existName._id==!req.params.id) {
         return res.status(400).send({ msg:"name exist,please change user name"})}
     
     const result = await user.updateOne({ _id: req.params.id }, { ...req.body })
     const UserUpdated = await  user.findOne({ _id: req.params.id })

      if(req.file)
          { const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
          UserUpdated.logo =url
           await UserUpdated.save()
             }
          console.log((result.modifiedCount) || (req.file));
      if ((result.modifiedCount) || (req.file)) {

         return res.send({ msg: "update suuccess", user: UserUpdated });
       }
     return res.status(400).send({ msg: " aleardy update " })
 }
     catch (error) {
    console.log(error);
    
     }
   });

module.exports = router;