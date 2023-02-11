
import { useState } from "react"
import { useEffect} from "react"
import{useSelector, useDispatch} from "react-redux"
import action from "../Redux/Action"
import store from "../Redux/Store"
import Cards from "./Cards"
import { Route } from "react-router-dom";
import { Link } from "react-router-dom"
import { myAction } from "../Redux/Action"
const Feed =()=>{
    // const [count, setcount] = useState(0); 

    

 

  
         const data =useSelector((store)=>{
            return store.product;
         })

         console.log(data);
    
        
        const dispatch =useDispatch()
        useEffect(()=>{
            action(dispatch)
        },[])


        const openWriter=()=>{
            myAction(dispatch,true);
        }
        // let fetchfc = async()=>{
        //  let data = await fetch("http://localhost:3004/Feeds");
        //  data= await data.json();
        //  console.log(data);
        // }

        // fetchfc();x

    //  let data=[]
;

    return(
        <>
        <div style={{border: "2px solid #f8f7f3", backgroundColor:"#f8f7f3" ,width:"100%", margin:"0 0 0 0%"}}>
        <input onClick={()=>{openWriter()}} readOnly  style={{width:"94%", borderRadius:"10px", padding:"1% 1% 1% 7%", outline:"none", border:"none",cursor:"pointer",boxShadow: "rgba(0, 0, 0, 0.10) 0px 0px 0px 1px", margin:"2% 0 2% -89% " }} type="text" placeholder= "What's on your mind?" />
        <i style={{position:"absolute", cursor:"pointer", margin:"1.4% 20% 20% -2%"}} class="fa-solid fa-circle-plus"></i>
        <i style={{position:'', marginLeft:"-92%", marginTop:"%", fontSize:"20px"}} id="style.fa-solid" class="fa-solid fa-user fa-lg"></i>

        <div style={{ }} > 
            {data.reverse().map((ele,i)=>{
             return( <Cards key={i+1} item ={ele}/>)
            })}
               </div>
               {/* //Profilecard */}
           {/* {data.length>0}? {data.map((ele,i)=>{
                 return( <Profilecard key={i+1} item ={ele}/>)
            })}: */}
        </div>
        </>
    )
}
 export default Feed; 

