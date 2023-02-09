
import { useEffect} from "react"
import{useSelector, useDispatch} from "react-redux"
import action from "../Redux/Action"
import store from "../Redux/Store"
import Cards from "./Cards"
import Nav from "./Nav"
// import Profilecard from "./Profilecard"

const Feed =()=>{
     const data =useSelector((store)=>{
        return ( store.product)
     })
    const dispatch =useDispatch()
    useEffect(()=>{
        action(dispatch)
    },[])
     console.log(data)


    return(
        <>
        <Nav/>
        <div>
        <div> 
            {data.map((ele,i)=>{
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