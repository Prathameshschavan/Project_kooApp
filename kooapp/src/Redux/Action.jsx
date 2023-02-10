
const action =(dispatch)=>{
    fetch("http://localhost:3004/Feeds")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        dispatch({
            type:"Get",
            payload:data
        })
    })

}



export default action;