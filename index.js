const express=require("express")
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())

require('dotenv').config()
const port=process.env.port



//connecting to the database


mongoose.connect("mongodb+srv://ommdas310:J6w3mHGfVSl8zr1p@cluster0.orf3t12.mongodb.net/OMM?retryWrites=true&w=majority")
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


  //import routes for todo api

  const todoroutes=require("./routes/todos")
  
  //mount the todo routes
 app.use("/api/v1",todoroutes)


app.listen(port,()=>{
    console.log(`server started at ${port} succesfully`)
})
