
import { useEffect} from "react"
import{useSelector, useDispatch} from "react-redux"
import action from "../Redux/Action"
import store from "../Redux/Store"
import Nev from "./nav,"
import Profilecard from "./profilecard"

const Feed =()=>{
     const data =useSelector((store)=>{
        return ( store.product)
     })
    const dispatch =useDispatch()
    useEffect(()=>{
        action(dispatch)

    },[])
    // console.log(data)


    return(
        <>
        <Nev/>
        <div>
            {data.length>0}? {data.map((ele,i)=>{
                 return( <Profilecard key={i+1} item ={ele}/>)

            })}:<div>gdfg</div>
        </div>
        </>
    )
}
 export default Feed; 