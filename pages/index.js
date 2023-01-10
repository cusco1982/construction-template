import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Jumbotron from '../components/Jumbotron'
import Image from 'next/image'

import demolition from "../photos/demolition.jpg";
import chemTank from "../photos/chemTank.JPG";


export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home | WJ Best Insulation - Edison, NJ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>




      <Jumbotron />





      <div>
        <Col style={{ backgroundColor: "red", margin: "auto", display: "flex", width: "55vw" }}>
          <Col style={{ backgroundColor: "pink", display: "flex", paddingTop: "", paddingBottom: "", height: "105px" }}>
            <Col style={{ backgroundColor: "blue", display: "flex", marginTop: "auto" }}>
              <div style={{ margin: "auto", padding: "8px", backgroundColor: "#FF4D10", borderRadius: "25px" }}>
                <svg style={{ backgroundColor: "", color: "white" }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" /></svg>
              </div>
              <Col style={{ backgroundColor: "white", margin: "", paddingLeft: "5px" }}>
                <h6 style={{ backgroundColor: "orange", margin: "0", paddingBottom: "8px" }}>Quick Contact</h6>
                <p style={{ padding: "", margin: "0", backgroundColor: "green", fontSize: ".85em", paddingBottom: "5px" }}>Email: cusco2891@gmail.com</p>
                <p style={{ padding: "", margin: "0", backgroundColor: "yellow", fontSize: ".85em" }}>Phone: 732 910 1016</p>
              </Col>
            </Col>
            <Col style={{ backgroundColor: "blue", display: "flex", marginTop: "auto" }}>
              <div style={{ margin: "auto", padding: "8px", backgroundColor: "#FF4D10", borderRadius: "25px" }}>
                <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
              </div>
              <Col style={{ backgroundColor: "white", margin: "", paddingLeft: "5px" }}>
                <h6 style={{ backgroundColor: "orange", margin: "0", paddingBottom: "8px" }}>Quick Contact</h6>
                <p style={{ padding: "", margin: "0", backgroundColor: "green", fontSize: ".85em", paddingBottom: "5px" }}>Email: cusco2891@gmail.com</p>
                <p style={{ padding: "", margin: "0", backgroundColor: "yellow", fontSize: ".85em" }}>Phone: 732 910 1016</p>
              </Col>
            </Col>
          </Col>
          <Col style={{ backgroundColor: "black", zIndex: "10" }}>
            <div style={{ backgroundColor: "#FF4D10", height: "210px", color: "white", padding: "35px", paddingLeft: "40px", margin: "", transform: "translate(0,-50%)", borderRadius: "10px" }}>
              <h6 style={{ margin: "0", paddingBottom: "5px", fontWeight: "700", fontSize: "1.15em" }}>A leading Developer Of A Grade</h6>
              <h6 style={{ margin: "0", fontWeight: "700", fontSize: "1.15em" }}>Commerical & Residential projects</h6>
              <p style={{ margin: "0", paddingTop: "20px", paddingBottom: "20px", fontSize: ".8em" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit <br /> Laboriosam, nihil!</p>
              <a style={{ color: "white", textDecoration: "none", fontSize: ".8em", fontWeight: "500" }} href="/">
                <div style={{ display: "flex", backgroundColor: "" }}>
                  <p style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "15px", backgroundColor: "" }}>Learn More</p>
                  <div style={{ backgroundColor: "whitesmoke", padding: "2px", borderRadius: "15px" }}>
                    <svg style={{ backgroundColor: "", color: "#ff6408" }} xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" /></svg>
                  </div>
                </div>
              </a>
            </div>
          </Col>
        </Col>
      </div>



      <div style={{ paddingBottom: "52.5px", backgroundColor: "" }}>
        <Col style={{ backgroundColor: "pink", textAlign: "center" }}>
          <h6 style={{ color: "#FF4D10", margin: "0" }}>The Best A Grade Commerical & Residential Services</h6>
          <h3 style={{ margin: "0" }}>High Quality Construction Solution</h3>
          <h3 style={{ margin: "0", fontSize: "1.7em" }}>For Residentials & Industries</h3>
        </Col>
      </div>



      <div>
        <Col style={{ width: "55vw", backgroundColor: "", display: "flex", margin: "auto" }}>
          <Col style={{ backgroundColor: "#FF4D10", padding: "30px", paddingRight: "0px", height: "", borderRadius: "12px", paddingBottom: "50px" }}>
            <div style={{ backgroundColor: "", color: "white", paddingBottom: "", backgroundColor: "" }}>
              <div style={{ height: "", backgroundColor: "", borderBottom: "2px solid white" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-bricks" viewBox="0 0 16 16"><path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z" /></svg>
                <div style={{ paddingTop: "45px", paddingBottom: "45px", backgroundColor: "" }}>
                  <h6 style={{ margin: "0" }}>Architecture</h6>
                  <h6 style={{ margin: "0" }}>& Building</h6>
                </div>
              </div>
              <div style={{ height: "", paddingRight: "30px", backgroundColor: "" }}>
                <p style={{ margin: "0", fontSize: ".85em", paddingTop: "30px", paddingBottom: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda vel quia itaque facere, quaerat quisquam harum cupiditate! Quia, ullam quia itaque facere, quaerat quisquam.</p>
                <a style={{ textDecoration: "none", color: "white" }} href="">
                  <div style={{ backgroundColor: "", display: "flex" }}>
                    <h6 style={{ backgroundColor: "", marginTop: "auto", marginBottom: "auto", paddingRight: "5px" }}>Read More</h6>
                    <div style={{ backgroundColor: "white", borderRadius: "12px", padding: "2px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="#FF4D10" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></div>
                  </div>
                </a>
              </div>
            </div>
          </Col>
          <Col style={{ backgroundColor: "", padding: "30px", paddingRight: "0px", height: "", borderRadius: "12px" }}>
            <div style={{ backgroundColor: "", color: "black" }}>
              <div style={{ height: "", backgroundColor: "", borderBottom: "2px solid whitesmoke" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FF4D10" class="bi bi-bricks" viewBox="0 0 16 16"><path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z" /></svg>
                <div style={{ paddingTop: "45px", paddingBottom: "45px", backgroundColor: "" }}>
                  <h6 style={{ margin: "0" }}>Contruction</h6>
                  <h6 style={{ margin: "0" }}>Consultants</h6>
                </div>
              </div>
              <div style={{ height: "", paddingRight: "30px", backgroundColor: "" }}>
                <p style={{ margin: "0", fontSize: ".85em", paddingTop: "30px", paddingBottom: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda vel quia itaque facere, quaerat quisquam harum cupiditate! Quia, ullam quia itaque facere, quaerat quisquam.</p>
                <a style={{ textDecoration: "none", color: "black" }} href="">
                  <div style={{ backgroundColor: "", display: "flex" }}>
                    <h6 style={{ backgroundColor: "", marginTop: "auto", marginBottom: "auto", paddingRight: "5px" }}>Read More</h6>
                    <div style={{ backgroundColor: "#FF4D10", borderRadius: "12px", padding: "2px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></div>
                  </div>
                </a>
              </div>
            </div>
          </Col>
          <Col style={{ backgroundColor: "", padding: "30px", paddingRight: "0px", height: "", borderRadius: "12px" }}>
            <div style={{ backgroundColor: "", color: "black" }}>
              <div style={{ height: "", backgroundColor: "", borderBottom: "2px solid whitesmoke" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FF4D10" class="bi bi-bricks" viewBox="0 0 16 16"><path d="M0 .5A.5.5 0 0 1 .5 0h15a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H14v2h1.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5H2v-2H.5a.5.5 0 0 1-.5-.5v-3A.5.5 0 0 1 .5 6H2V4H.5a.5.5 0 0 1-.5-.5v-3zM3 4v2h4.5V4H3zm5.5 0v2H13V4H8.5zM3 10v2h4.5v-2H3zm5.5 0v2H13v-2H8.5zM1 1v2h3.5V1H1zm4.5 0v2h5V1h-5zm6 0v2H15V1h-3.5zM1 7v2h3.5V7H1zm4.5 0v2h5V7h-5zm6 0v2H15V7h-3.5zM1 13v2h3.5v-2H1zm4.5 0v2h5v-2h-5zm6 0v2H15v-2h-3.5z" /></svg>
                <div style={{ paddingTop: "45px", paddingBottom: "45px", backgroundColor: "" }}>
                  <h6 style={{ margin: "0" }}>Contruction</h6>
                  <h6 style={{ margin: "0" }}>Consultants</h6>
                </div>
              </div>
              <div style={{ height: "", paddingRight: "30px", backgroundColor: "" }}>
                <p style={{ margin: "0", fontSize: ".85em", paddingTop: "30px", paddingBottom: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem assumenda vel quia itaque facere, quaerat quisquam harum cupiditate! Quia, ullam quia itaque facere, quaerat quisquam.</p>
                <a style={{ textDecoration: "none", color: "black" }} href="">
                  <div style={{ backgroundColor: "", display: "flex" }}>
                    <h6 style={{ backgroundColor: "", marginTop: "auto", marginBottom: "auto", paddingRight: "5px" }}>Read More</h6>
                    <div style={{ backgroundColor: "#FF4D10", borderRadius: "12px", padding: "2px" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg></div>
                  </div>
                </a>
              </div>
            </div>
          </Col>
        </Col>
      </div>



      <div style={{ textAlign: "center", backgroundColor: "", padding: "40px", paddingBottom: "60px" }}>
        <h6 style={{ padding: "0", margin: "0" }}>Contrary to popular belief. <b><a style={{ color: "black" }} href="">Build Your Dream Now!</a></b></h6>
      </div>



      <div style={{ backgroundColor: "", padding: "", display: "flex" }}>
        <div style={{ backgroundColor: "#FF4D10", color: "whitesmoke", width: "50%", marginTop: "50px" }}>
          <div style={{ width: "60%", margin: "auto", paddingTop: "40px", backgroundColor: "" }}>
            <h5 style={{ margin: "0", padding: "0" }}>World's Leading Industry Corporation</h5>
            <h3 style={{ margin: "0" }}>Best A Grade Commercial <br /> & Residential Services</h3>
            <p style={{ backgroundColor: "", width: "70%", paddingTop: "20px", paddingBottom: "20px", fontSize: ".8em" }}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered altercation in some form, by injected humor, or randomised words which don't look even slightly believable or randomised words which don't look.</p>
            <Row>
              <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-building-fill-gear" viewBox="0 0 16 16"><path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.493 4.493 0 0 0 12.5 8a4.493 4.493 0 0 0-3.59 1.787A.498.498 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.476 4.476 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1V1Zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" /><path d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" /></svg>
                <h5 style={{ paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Powerful Product <br /> Strategy</h5>
                <p style={{ backgroundColor: "", fontSize: ".8em", width: "95%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sit adipisci aliquam unde ullam voluptatem earum ea.</p>
              </Col>
              <Col>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-patch-check-fill" viewBox="0 0 16 16"><path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" /></svg>
                <h5 style={{ paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Award Winning <br /> Project</h5>
                <p style={{ backgroundColor: "", fontSize: ".8em", width: "95%" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit sit adipisci aliquam unde ullam voluptatem earum ea.</p>
              </Col>
            </Row>
          </div>
        </div>
        <Col style={{ padding: "0", backgroundColor: "" }}>
          <Image className={styles.newimage} src={demolition} alt="construction workers"
            // width={800}
            layout="intrinsic"
          />
          <div style={{ backgroundColor: "#FF4D10", width: "35%", textAlign: "right", color: "whitesmoke", display: "flex", justifyContent: "end", paddingRight: "10px", paddingBottom: "5px" }}>
            <div style={{ backgroundColor: "", display: "inline-block", textAlign: "center", padding: "10px" }}>
              <h6 style={{ margin: "0" }}>Watch</h6>
              <h6 style={{ margin: "0" }}>Our Video!</h6>
            </div>
            <div style={{ marginTop: "auto", marginBottom: "auto", padding: "5px", border: "1px solid white", borderRadius: "25px" }}>
              <svg style={{ backgroundColor: "black", borderRadius: "25px" }} xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-play-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" /></svg>
            </div>
          </div>
        </Col>
      </div>



      <div style={{ textAlign: "center", backgroundColor: "", padding: "40px" }}>
        <h5 style={{ margin: "0", color: "#FF4D10", fontWeight: "600" }}>Featured Project</h5>
        <h3 style={{ margin: "0" }}><b>Our Recent Works</b></h3>
      </div>










      <div style={{ backgroundColor: "black" }}>
        <Row style={{ backgroundColor: "pink", width: "55vw", margin: "auto" }}>
          <Col style={{ backgroundColor: "", padding: "20px" }}>
            <div style={{ backgroundColor: "", height: "300px" }}>
              <Image
                src={chemTank}
                alt="chemical tank"
                layout="fill"
                style={{ borderRadius: "5px", position: "" }}
              />
            </div>
            <div style={{ backgroundColor: "", padding: "15px" }}>
              <h6 style={{ margin: "0", paddingTop: "5px", paddingBottom: "5px" }}>The Fallingwater House</h6>
              <header style={{ color: "#FF4D10", fontSize: ".9em" }}>Building Inertia</header>
              <p style={{ fontSize: ".8em", paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis repellendus debitis magni deserunt reiciendis, doloremque.</p>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px", backgroundColor: "", marginTop: "" }}>
              <a style={{ backgroundColor: "", color: "white", textDecoration: "none" }} href="">
                <div style={{ backgroundColor: "#FF4D10", padding: "10px", width: "90%", margin: "auto", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", display: "flex", justifyContent: "center", borderTop: "2px solid transparent" }}>
                  <div style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "25px" }}>Explore More</div>
                  <div style={{ backgroundColor: "white", padding: "3px", borderRadius: "25px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ff6408" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col style={{ backgroundColor: "", padding: "20px" }}>
            <div style={{ backgroundColor: "", height: "300px" }}>
              <Image
                src={demolition}
                alt="construction workers"
                layout="fill"
                style={{ borderRadius: "5px", position: "" }}
              />
            </div>
            <div style={{ backgroundColor: "", padding: "15px" }}>
              <h6 style={{ margin: "0", paddingTop: "5px", paddingBottom: "5px" }}>The Guggenheim Museum</h6>
              <header style={{ color: "#FF4D10", fontSize: ".9em" }}>Constructing, Engineering</header>
              <p style={{ fontSize: ".8em", paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis repellendus debitis magni deserunt reiciendis, doloremque.</p>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px", backgroundColor: "", marginTop: "" }}>
              <a style={{ backgroundColor: "", color: "black", textDecoration: "none", fontWeight: "600" }} href="">
                <div style={{ backgroundColor: "", padding: "10px", width: "90%", margin: "auto", borderTopLeftRadius: "", borderTopRightRadius: "", display: "flex", justifyContent: "center", borderTop: "1px solid #B8B7B7" }}>
                  <div style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "25px" }}>Explore More</div>
                  <div style={{ backgroundColor: "#FF4D10", padding: "3px", borderRadius: "25px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                  </div>
                </div>
              </a>
            </div>
          </Col>
          <Col style={{ backgroundColor: "", padding: "20px" }}>
            <div style={{ backgroundColor: "", height: "300px" }}>
              <Image
                src={demolition}
                alt="construction workers"
                layout="fill"
                style={{ borderRadius: "5px", position: "" }}
              />
            </div>
            <div style={{ backgroundColor: "", padding: "15px" }}>
              <h6 style={{ margin: "0", paddingTop: "5px", paddingBottom: "5px" }}>Neue National Gallerie</h6>
              <header style={{ color: "#FF4D10", fontSize: ".9em" }}>Renuvation Architecture</header>
              <p style={{ fontSize: ".8em", paddingTop: "10px", paddingBottom: "10px", margin: "0" }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis facilis repellendus debitis magni deserunt reiciendis, doloremque.</p>
            </div>
            <div style={{ textAlign: "center", paddingTop: "20px", backgroundColor: "", marginTop: "" }}>
              <a style={{ backgroundColor: "", color: "black", textDecoration: "none", fontWeight: "600" }} href="">
                <div style={{ backgroundColor: "", padding: "10px", width: "90%", margin: "auto", borderTopLeftRadius: "", borderTopRightRadius: "", display: "flex", justifyContent: "center", borderTop: "1px solid #B8B7B7" }}>
                  <div style={{ marginTop: "auto", marginBottom: "auto", paddingRight: "25px" }}>Explore More</div>
                  <div style={{ backgroundColor: "#FF4D10", padding: "3px", borderRadius: "25px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
                  </div>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </div>





























      <div style={{ height: "1000px" }}>


      </div>





    </div>
  )
};
