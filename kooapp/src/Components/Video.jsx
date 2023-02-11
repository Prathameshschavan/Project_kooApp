import React from "react";
import Card from "react-bootstrap/Card";
import { BsFillCheckCircleFill } from "react-icons/bs";
function Video() {
  return (
    <>
      <Card>
        <Card.Body>
          <div
            style={{
              display: "flex",
              background: "white",
              gap: "10px",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ marginTop: "1%" }}>
              <Card.Title style={{ fontSize: "15px", fontWeight: "bold" }}>
                Nature{" "}
                <BsFillCheckCircleFill
                  style={{ color: "gold", marginBottom: "-5px" }}
                />
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  textAlign: "initial",
                  fontSize: "10px",
                  marginTop: "-8%",
                }}
              >
                @Nature
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text style={{ textAlign: "initial", fontSize: "16px" }}>
          Baga Beach, North Goa. Baga Beach | #1 of 15 Best Beaches in Goa. 
          </Card.Text>
          <p
            style={{
              textAlign: "initial",
              color: "blue",
              fontSize: "16px",
              margin: "-3% 0 2% 0",
            }}
          >
            #Goa #Beach
          </p>
          <video
            width="100%"
            height="300px"
            src="https://cdn.coverr.co/videos/coverr-a-tropical-beach-681/1080p.mp4"
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          >
            {" "}
            something
          </video>
          <input
            style={{
              width: "100%",
              borderRadius: "10px",
              padding: "1% 1% 1% 7%",
              outline: "none",
              border: "none",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 1px",
              marginBottom: "2%",
            }}
            type="text"
            placeholder="Write Your Comment"
          />
          <i
            style={{
              position: "absolute",
              marginLeft: "-91%",
              marginTop: "3.3%",
              fontSize: "20px",
            }}
            id="style.fa-solid"
            class="fa-solid fa-user fa-lg"
          ></i>

          <div id="likeComment">
            <div>
              <i class="fa-regular fa-thumbs-up"></i>30Likes
            </div>
            <div>
              <i class="fa-regular fa-comment"></i>4Comments 
            </div>
            <div>
              <i class="fa-solid fa-retweet"></i>4k
            </div>
            <div>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div>
              <i class="fa-solid fa-share"></i>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* 2 */}
      <Card>
        <Card.Body>
          <div
            style={{
              display: "flex",
              background: "white",
              gap: "10px",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZpdG5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ marginTop: "1%" }}>
              <Card.Title style={{ fontSize: "15px", fontWeight: "bold" }}>
              Planet Fitness{" "}
                <BsFillCheckCircleFill
                  style={{ color: "gold", marginBottom: "-5px" }}
                />
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  textAlign: "initial",
                  fontSize: "10px",
                  marginTop: "-8%",
                }}
              >
                @Planet Fitness
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text style={{ textAlign: "initial", fontSize: "16px" }}>
          “If you want something you've never had, you must be willing to do something you've never done.” 
          </Card.Text>
          <p
            style={{
              textAlign: "initial",
              color: "blue",
              fontSize: "16px",
              margin: "-3% 0 2% 0",
            }}
          >
            #Fitness #Gym #BodyBuilder
          </p>
          <video
            width="100%"
            height="300px"
            src="https://cdn.coverr.co/videos/coverr-exercising-with-battle-rope-7398/1080p.mp4"
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          >
            {" "}
            something
          </video>
          <input
            style={{
              width: "100%",
              borderRadius: "10px",
              padding: "1% 1% 1% 7%",
              outline: "none",
              border: "none",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 1px",
              marginBottom: "2%",
            }}
            type="text"
            placeholder="Write Your Comment"
          />
          <i
            style={{
              position: "absolute",
              marginLeft: "-91%",
              marginTop: "3.3%",
              fontSize: "20px",
            }}
            id="style.fa-solid"
            class="fa-solid fa-user fa-lg"
          ></i>

          <div id="likeComment">
            <div>
              <i class="fa-regular fa-thumbs-up"></i>145kLikes
            </div>
            <div>
              <i class="fa-regular fa-comment"></i>150Comments 
            </div>
            <div>
              <i class="fa-solid fa-retweet"></i>400k
            </div>
            <div>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div>
              <i class="fa-solid fa-share"></i>
            </div>
          </div>
        </Card.Body>
      </Card>

  {/* 3 */}
  <Card>
        <Card.Body>
          <div
            style={{
              display: "flex",
              background: "white",
              gap: "10px",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ marginTop: "1%" }}>
              <Card.Title style={{ fontSize: "15px", fontWeight: "bold" }}>
              Love{" "}
                <BsFillCheckCircleFill
                  style={{ color: "gold", marginBottom: "-5px" }}
                />
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  textAlign: "initial",
                  fontSize: "10px",
                  marginTop: "-8%",
                }}
              >
                @Love
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text style={{ textAlign: "initial", fontSize: "16px" }}>
          What is a romantic quote?
"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
          </Card.Text>
          <p
            style={{
              textAlign: "initial",
              color: "blue",
              fontSize: "16px",
              margin: "-3% 0 2% 0",
            }}
          >
            #Love #Friendship #LoveLife #LoveForever
          </p>
          <video
            width="100%"
            height="300px"
            src="https://cdn.coverr.co/videos/coverr-friends-laughing-and-looking-at-the-camera-4194/1080p.mp4"
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          >
            {" "}
            something
          </video>
          <input
            style={{
              width: "100%",
              borderRadius: "10px",
              padding: "1% 1% 1% 7%",
              outline: "none",
              border: "none",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 1px",
              marginBottom: "2%",
            }}
            type="text"
            placeholder="Write Your Comment"
          />
          <i
            style={{
              position: "absolute",
              marginLeft: "-91%",
              marginTop: "3.3%",
              fontSize: "20px",
            }}
            id="style.fa-solid"
            class="fa-solid fa-user fa-lg"
          ></i>

          <div id="likeComment">
            <div>
              <i class="fa-regular fa-thumbs-up"></i>14kLikes
            </div>
            <div>
              <i class="fa-regular fa-comment"></i>10Comments 
            </div>
            <div>
              <i class="fa-solid fa-retweet"></i>40k
            </div>
            <div>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div>
              <i class="fa-solid fa-share"></i>
            </div>
          </div>
        </Card.Body>
      </Card>

        {/* 4 */}
  <Card>
        <Card.Body>
          <div
            style={{
              display: "flex",
              background: "white",
              gap: "10px",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvdmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div style={{ marginTop: "1%" }}>
              <Card.Title style={{ fontSize: "15px", fontWeight: "bold" }}>
              Love{" "}
                <BsFillCheckCircleFill
                  style={{ color: "gold", marginBottom: "-5px" }}
                />
              </Card.Title>
              <Card.Subtitle
                className="mb-2 text-muted"
                style={{
                  textAlign: "initial",
                  fontSize: "10px",
                  marginTop: "-8%",
                }}
              >
                @Love
              </Card.Subtitle>
            </div>
          </div>
          <Card.Text style={{ textAlign: "initial", fontSize: "16px" }}>
          What is a romantic quote?
"Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
          </Card.Text>
          <p
            style={{
              textAlign: "initial",
              color: "blue",
              fontSize: "16px",
              margin: "-3% 0 2% 0",
            }}
          >
            #Love #Friendship #LoveLife #LoveForever
          </p>
          <video
            width="100%"
            height="300px"
            src="https://cdn.coverr.co/videos/coverr-taking-pictures-on-a-boat-7292/1080p.mp4"
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop
          >
            {" "}
            something
          </video>
          <input
            style={{
              width: "100%",
              borderRadius: "10px",
              padding: "1% 1% 1% 7%",
              outline: "none",
              border: "none",
              boxShadow: "rgba(0, 0, 0, 0.25) 0px 0px 0px 1px",
              marginBottom: "2%",
            }}
            type="text"
            placeholder="Write Your Comment"
          />
          <i
            style={{
              position: "absolute",
              marginLeft: "-91%",
              marginTop: "3.3%",
              fontSize: "20px",
            }}
            id="style.fa-solid"
            class="fa-solid fa-user fa-lg"
          ></i>

          <div id="likeComment">
            <div>
              <i class="fa-regular fa-thumbs-up"></i>14kLikes
            </div>
            <div>
              <i class="fa-regular fa-comment"></i>10Comments 
            </div>
            <div>
              <i class="fa-solid fa-retweet"></i>40k
            </div>
            <div>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div>
              <i class="fa-solid fa-share"></i>
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* <div style={{width:"100%"}}>

<video
  width="100%"  height="300px"
 src="https://cdn.coverr.co/videos/coverr-taking-pictures-on-a-boat-7292/1080p.mp4"
 controls
 muted
 autoPlay={"autoplay"}
 preLoad="auto"
 loop
> something</video>

<br/><br/>
<video
  width="100%"  height="300px"
 src="https://cdn.coverr.co/videos/coverr-various-shots-of-happy-gay-ad-lesbian-couples-at-the-beach-3276/1080p.mp4"
 controls
 muted
 autoPlay={"autoplay"}
 preLoad="auto"
 loop
> something</video>


<br/><br/>
<video
  width="100%"  height="300px"
 src="https://cdn.coverr.co/videos/coverr-friends-getting-inside-a-car-6839/1080p.mp4"
 controls
 muted
 autoPlay={"autoplay"}
 preLoad="auto"
 loop
> something</video>
<br/><br/>

<video
  width="100%"  height="300px"
 src="https://cdn.coverr.co/videos/coverr-three-friends-walking-5128/1080p.mp4"
 controls
 muted
 autoPlay={"autoplay"}
 preLoad="auto"
 loop
> something</video>

<br/><br/>

<video
  width="100%"  height="300px"
 src="https://cdn.coverr.co/videos/coverr-a-woman-walks-on-the-edge-of-a-hill-with-a-weapon-397/1080p.mp4"
 controls
 muted
 autoPlay={"autoplay"}
 preLoad="auto"
 loop
> something</video>



<br/><br/>

<video
  width="100%"  height="300px"
 src="https://cdn.coverr.co/videos/coverr-a-woman-comes-to-the-edge-of-the-hill-6715/1080p.mp4"
 controls
 muted
 autoPlay={"autoplay"}
 preLoad="auto"
 loop
> something</video>



<br/><br/>

<video
  width="100%"  height="300px"
 src="https://cdn.coverr.co/videos/coverr-a-family-of-swans-swims-in-the-water-1832/1080p.mp4"
 controls
 muted
 autoPlay={"autoplay"}
 preLoad="auto"
 loop
> something</video> 
</div>  */}
    </>
  );
}

export default Video;
