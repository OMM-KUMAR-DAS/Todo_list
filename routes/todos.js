const express=require("express")
const router = express.Router()


//import controller

const{createtodos}=require('../controllers/createtodos')

const{getTodos}=require('../controllers/getTodos')

const{getTodosid}=require('../controllers/getTodosid')

const{updateid}=require('../controllers/updatte')

const{deleteidd}=require('../controllers/deleteid')
//define api routes 

router.post('/postods',createtodos)
router.get("/getall/",getTodos)
router.get("/getid/:id",getTodosid)
router.put("/updatetodo/:id",updateid)
router.delete("/deletetetodo/:id",deleteidd)


module.exports=router


