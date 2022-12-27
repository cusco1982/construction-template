import styles from '../styles/Toolbar.module.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import OffcanvasButton from './OffcanvasButton';




function Toolbar() {



  return (
    <div className={styles.navbar}>



      {/* ---------------------------------------------------------------- */}
      <div style={{ width: "25%", backgroundColor: "pink", color: "", margin: "auto", paddingRight: "20px", textAlign:"right" }}>




        <a href="/" className={styles.Logo}>
          <div style={{ display: "flex", color: "white" }}>
            <div style={{ color: "", letterSpacing: "-2px" }}>WJ</div>
            <div style={{ letterSpacing: "-1px", marginLeft: "8px" }}>Best</div>
            <div style={{ letterSpacing: "-1px", marginLeft: "4px" }}>Insulation</div>
          </div>
        </a>




      </div>







      {/* ---------------------------------------------------------------- */}

      <div style={{ width: "50%", backgroundColor: "blue", margin: "auto", display: "flex" }}>



        <div style={{ backgroundColor: "orange", display: "flex", width: "65%" }}>

          <Col style={{ backgroundColor: "white", textAlign: "center", margin: "auto" }}><a style={{ color: "white", backgroundColor: "gray", padding: "10px", paddingRight: "20px", paddingLeft: "20px", textDecoration: "none" }} href="/">Home</a></Col>
          <Col style={{ backgroundColor: "red", textAlign: "center", margin: "auto" }}><a style={{ color: "white", backgroundColor: "gray", padding: "10px", paddingRight: "20px", paddingLeft: "20px", textDecoration: "none" }} href="/">Services</a></Col>
          <Col style={{ backgroundColor: "green", textAlign: "center", margin: "auto" }}><a style={{ color: "white", backgroundColor: "gray", padding: "10px", paddingRight: "20px", paddingLeft: "20px", textDecoration: "none" }} href="/">Gallery</a></Col>
          <Col style={{ backgroundColor: "blue", textAlign: "center", margin: "auto" }}><a style={{ color: "white", backgroundColor: "gray", padding: "10px", paddingRight: "20px", paddingLeft: "20px", textDecoration: "none" }} href="/">Contact</a></Col>
          <Col style={{ backgroundColor: "yellow", textAlign: "center", margin: "auto" }}><a style={{ color: "white", backgroundColor: "gray", padding: "10px", paddingRight: "20px", paddingLeft: "20px", textDecoration: "none" }} href="/">Quote</a></Col>

        </div>



        <div style={{ backgroundColor: "green", width: "35%", textAlign: "right", paddingRight: "20px" }}>

          <a href="/quote" style={{ textDecoration: "none", display: "inline-block", color: "", backgroundColor: "purple", margin: "" }}>
            <div style={{ display: "flex", color: "black", backgroundColor: "white", padding: "5px", paddingTop: "8px", paddingBottom: "8px", borderRadius: "5px" }}>
              <div style={{ backgroundColor: "", margin: "auto", fontSize: "1em" }}>Get A Quote</div>
              <svg style={{ backgroundColor: "", margin: "auto" }} xmlns="http://www.w3.org/2000/svg" width="27" height="23" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
            </div>
          </a>

        </div>




      </div>






      {/* ---------------------------------------------------------------- */}
      <div style={{ width: "25%", backgroundColor: "red" }}>

        7329101016

        <OffcanvasButton />
        
      </div>





    </div>
  );
}

export default Toolbar;