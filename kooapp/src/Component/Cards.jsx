import Card from 'react-bootstrap/Card';
import "./Cards.css"
import { BsFillCheckCircleFill } from "react-icons/bs";
function Cards({item}) {
  console.log(item);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <br />
        <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
          <div>
          <img src={item.avatar} alt="" style={{width:"50px",height:"50px",borderRadius:"50%",objectFit: "cover"}}/>
          </div>
          <div>
          <Card.Title style={{fontSize: "larger",fontWeight:"bold"}}>{item.people} <BsFillCheckCircleFill style={{color: "gold",marginBottom: "-5px"}}/></Card.Title>
          <Card.Subtitle className="mb-2 text-muted" style={{textAlign: "initial",margin:"0"}}>{item.username}</Card.Subtitle>
          </div>
          </div>
          <br/>
        <Card.Text style={{textAlign: "initial",margin:"0"}}>{item.description}</Card.Text>
        <br />
        <p style={{textAlign: "initial",color:"blue",margin:"0"}}>#{item.Tag1} #{item.Tag2}</p>
       <br />
        {/* <Card.Link href="#"></Card.Link> */}
        <img src={item.image} alt="" style={{width:"730px",objectFit:"cover"}} />
        <input type="text" placeholder='Write Your Comment' />
      </Card.Body>
    </Card>

  );
}

export default Cards;