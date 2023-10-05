

import { useState} from "react";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Po(props)
{
     return(
    
         <div className="sa">
            <h2 className="klm" > { props.item.title}</h2>
            <p className="klm1"> { props.item.disc}</p>
          
            <button className="bt2" onClick= {()=>{props.onSelect(props.item._id)}} >Delete</button> 
             <br></br>
             <hr></hr>
        </div>
       
     )
}


export default function Pro()
{
   const[tit,setit]=useState('')      
   const[discrip,setdid]=useState('')
   const[stuff,setstu]=useState([])

  
    
   function clicksearch(event)
   {
        setit(event.target.value)
   }
   
   function clicks(event)
   {
        setdid(event.target.value)
   }

   const deleteme=(id)=>
   {
        fetch(`http://localhost:5000/api/v1/deletetetodo/${id}`,{
            method:'DELETE'
        })
        .then(respons=>respons.json())
        .then(record=>{setstu((stuff)=>{return stuff.filter((ele,index)=>{return ele.response._id!==record.data._id})})})
        console.log(stuff)

        toast.error("item deleted", {
            position: toast.POSITION.TOP_CENTER
          });
   }

   const clickme=(event)=>{
      
       event.preventDefault()
        fetch("http://localhost:5000/api/v1/postods",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
               title:tit,
               disc:discrip
            })
        })
        .then(respons=>respons.json())
        .then(data=>setstu([...stuff,data]));
        setit('')
        setdid('')
        
        toast.success("item added!", {
            position: toast.POSITION.TOP_CENTER
          });
        
   }
     const sample=stuff.map((item, index) => {
         return <Po key = {index} item={ item.response } onSelect={deleteme}/>
    })
    return(
        <>
        <form className="con" onSubmit={clickme}>

            <h2 className="head">Todo App</h2>
            <div className="task1">

            <input


                type="text"
                placeholder="enter the title"
                value={tit}
                className="inp1"
                required
                onChange={clicksearch}

             />
             
            </div>
            

            <div className="task1">
             
             <input
                type="text"
                placeholder="enter the discription"
                value={discrip}
                className="inp1"
                required
                onChange={clicks}
             />

            </div> 

            <button  className="bt1">Add</button>

            <br></br>
            <br></br>
            <br></br>
        
        </form>
        <div className="sam">

               {sample}

        </div>
        </>
      
    )
}
