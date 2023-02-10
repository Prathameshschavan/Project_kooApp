import Card from 'react-bootstrap/Card';
import "./Cards.css"
import { BsFillCheckCircleFill } from "react-icons/bs";
import {useSelector,useDispatch} from "react-redux";
import { useEffect, useState } from 'react';
import action from '../Redux/Action';


function Cards({item}) {
  console.log(item);

  let dispatch = useDispatch();

  const data =useSelector((store)=>{
    return ( store.product)
  })


//   const dispatch =useDispatch()
  
//     useEffect(()=>{
//         action(dispatch)
//     },[])


async function handleClick(){
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
  action(dispatch);
  
}



  
//   const handleLikeClick =async (id) => {
//     const updatedPosts = data.map(post => {
//       if (post.id === id) {
//         return { ...post, Likes: post.Likes + 1 };
//       }
//       return post;
//     });

//     console.log(updatedPosts);
//     // setPosts(updatyyyyedPosts);

//     try{
//       let updata = await fetch(`http://localhost:3004/Feeds/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ Likes: updatedPosts.find(post => post.id === id).Likes })
//       })
  
//        updata= await updata.json();
//        console.log(updata);
//       //  setcount(count+1);
//       item.setcount(id);
       
//     }

//     catch(error){
//       console.error(error);
//     }
      
      
    
  
// };
 



 

  return (
    <Card >
      <Card.Body>
        <div style={{display:"flex",background:"white",gap:"10px",alignItems:"center", marginBottom:"8px"}}>
          <div>
          <img src={item.avatar} alt="" style={{width:"50px",height:"50px",borderRadius:"50%",objectFit: "cover"}}/>
          </div>
          <div style={{marginTop:"1%"}}>
              <Card.Title style={{fontSize: "15px",fontWeight:"bold"}}>{item.people} <BsFillCheckCircleFill style={{color: "gold",marginBottom: "-5px"}}/></Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{textAlign: "initial",fontSize: "10px", marginTop:"-8%"}}>{item.username}</Card.Subtitle>
          </div>
          </div>
         
             <Card.Text style={{textAlign: "initial", fontSize: "16px" }}>{item.description}</Card.Text>
        
        <p style={{textAlign: "initial",color:"blue",  fontSize: "16px",margin:"-3% 0 2% 0"}}>#{item.Tag1} #{item.Tag2}</p>
      
        {/* <Card.Link href="#"></Card.Link> */}
        <img src={item.image} alt="" style={{width:"107%", margin:"0 0 3% -3.5%"}} />
        <input  style={{width:"100%", borderRadius:"10px", padding:"1% 1% 1% 7%", outline:"none", border:"none",boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 1px", marginBottom:"2%" }} type="text" placeholder= 'Write Your Comment' /><i style={{position:'absolute', marginLeft:"-91%", marginTop:"3.3%", fontSize:"20px"}} id="style.fa-solid" class="fa-solid fa-user fa-lg"></i>
        
        
        <div id='likeComment'>
          <div onClick={()=>{handleClick()}} ><i class="fa-regular fa-thumbs-up"></i>{item.Likes}</div>
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

