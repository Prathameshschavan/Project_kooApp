import Card from 'react-bootstrap/Card';
import "./Cards.css"
import { BsFillCheckCircleFill } from "react-icons/bs";
import {useSelector,useDispatch} from "react-redux";
import { useEffect, useState } from 'react';
import action from '../Redux/Action';
function Cards({item}) {
  // console.log(item);
  let dispatch = useDispatch();
  const data =useSelector((store)=>{
    return ( store.product)
  })

  let loginStatus = localStorage.getItem("papa");


async function handleClick(){

  

  let colorr= document.getElementById(item.id);
  console.log(colorr.style.color);
  
  if(loginStatus){
  if(colorr.style.color=="red"){
  console.log("yes");
    let obj={
      ...item, Likes: item.Likes-1,
    }
    console.log(obj);

    let data = await fetch(`http://localhost:3004/Feeds/${item.id}`,
    {
      method:"PATCH",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(obj)
    })
  
    data= await data.json();
    // console.log(data);
    action(dispatch);
    colorr.style.color="black";
  }
  else if(colorr.style.color=="black" || colorr.style.color==""  ){
    console.log("no");
    let obj={
      ...item, Likes: item.Likes+1,
    }
  
    console.log(obj);
    let data = await fetch(`http://localhost:3004/Feeds/${item.id}`,
    {
      method:"PATCH",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(obj)
    })
  
    data= await data.json();
    console.log(data);
    colorr.style.color="red";
    action(dispatch);

  }
}
else{
  alert("First Login to Like");
}


  
}


const [removeIcon, setRemoveIcon] = useState(window.matchMedia("(min-width: 768px)").matches);
            useEffect(() => {
            const handler = e => setRemoveIcon(e.matches);
            window.matchMedia("(min-width: 768px)").addListener(handler);
            return () => {
            window.matchMedia("(min-width: 768px)").removeListener(handler);
            };
            }, []);

  return (
    <Card >
      <Card.Body>
        <div style={{display:"flex",background:"white",gap:"10px",alignItems:"center", marginBottom:"8px"}}>
          <div>
          <img src={item.avatar} alt="" style={{width:"50px",height:"50px",borderRadius:"50%",objectFit: "cover"}}/>
          </div>
          <div style={{marginTop:"1%"}}>
              <Card.Title style={{fontSize: "15px",fontWeight:"bold"}}>{item.people} <BsFillCheckCircleFill style={{color: "gold",marginBottom: "2px"}}/></Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{textAlign: "initial",fontSize: "10px", marginTop:"-8%"}}>{item.username}</Card.Subtitle>
          </div>
          </div>
         
             <Card.Text style={{textAlign: "initial", fontSize: "16px" }}>{item.description}</Card.Text>
        
        <p style={{textAlign: "initial",color:"blue",  fontSize: "16px",margin:"-3% 0 2% 0"}}>{item.Tag1} {item.Tag2}</p>
      
        {/* <Card.Link href="#"></Card.Link> */}
        <img src={item.image} alt="" style={{width:"107%", margin:"0 0 3% -3.5%"}} />
        <input  style={{width:"100%", borderRadius:"10px", padding:"1% 1% 1% 7%", outline:"none", border:"none",boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 1px", marginBottom:"2%" }} type="text" placeholder= 'Write Your Comment' />
        {removeIcon &&<i style={{position:'absolute', marginLeft:"-91%", marginTop:"3.3%", fontSize:"20px"}} id="style.fa-solid" class="fa-solid fa-user fa-lg"></i>}
        
        
        <div id='likeComment'>
          <div  onClick={()=>{handleClick()}} ><i id={item.id}  class="fa-solid fa-thumbs-up"></i>{item.Likes}</div>
          <div><i class="fa-regular fa-comment"></i>{item.Comments}</div>
          <div><i class="fa-solid fa-retweet"></i>{}</div>
          <div><i class="fa-brands fa-whatsapp"></i></div>
          <div><i class="fa-solid fa-share"></i></div>
        </div>
      </Card.Body>
    </Card>

  );
}

export default Cards;

