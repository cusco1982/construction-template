import styles from '../styles/Toolbar.module.css';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import OffcanvasButton from './OffcanvasButton';




function Toolbar() {



  return (
    <div className={styles.navbar}>



      {/* ---------------------------------------------------------------- */}
      <div style={{ width: "25vw", backgroundColor: "pink", color: "", margin: "auto", paddingRight: "20px", textAlign: "right" }}>


        <div style={{ display: "inline-block", color: "", margin: "", backgroundColor: "orange" }}>

          <a href="" className={styles.Logo}>
            <div style={{ color: "", letterSpacing: "-2px" }}>WJ</div>
            <div style={{ letterSpacing: "-1px", marginLeft: "8px" }}>Best</div>
            <div style={{ letterSpacing: "-1px", marginLeft: "4px" }}>Insulation</div>
          </a>

        </div>


      </div>







      {/* ---------------------------------------------------------------- */}

      <div style={{ width: "50vw", backgroundColor: "blue", margin: "", display: "flex", borderLeft: "1px solid white", borderRight: "1px solid white" }}>



        <div style={{ backgroundColor: "orange", display: "flex", width: "65%", margin: "auto" }}>

          <Col style={{ backgroundColor: "white", textAlign: "center", margin: "" }}><a style={{ color: "white", backgroundColor: "gray", textDecoration: "none", fontWeight: "400", padding: "8px", borderBottom: "2px solid red", borderBottom: "2px solid red" }} href="/">Home</a></Col>
          <Col style={{ backgroundColor: "red", textAlign: "center", margin: "" }}><a style={{ color: "white", backgroundColor: "gray", textDecoration: "none", fontWeight: "400", padding: "8px", borderBottom: "2px solid red" }} href="/">Services</a></Col>
          <Col style={{ backgroundColor: "green", textAlign: "center", margin: "" }}><a style={{ color: "white", backgroundColor: "gray", textDecoration: "none", fontWeight: "400", padding: "8px", borderBottom: "2px solid red" }} href="/">Gallery</a></Col>
          <Col style={{ backgroundColor: "red", textAlign: "center", margin: "" }}><a style={{ color: "white", backgroundColor: "gray", textDecoration: "none", fontWeight: "400", padding: "8px", borderBottom: "2px solid red" }} href="/">Contact</a></Col>
          <Col style={{ backgroundColor: "yellow", textAlign: "center", margin: "" }}><a style={{ color: "white", backgroundColor: "gray", textDecoration: "none", fontWeight: "400", padding: "8px", borderBottom: "2px solid red" }} href="/">Quote</a></Col>

        </div>



        <div style={{ backgroundColor: "green", width: "35%", textAlign: "right", paddingRight: "20px", margin: "auto" }}>
          <a href="/quote" style={{ textDecoration: "none", display: "inline-block", color: "", backgroundColor: "purple", margin: "" }}>
            <div style={{ display: "flex", color: "black", backgroundColor: "white", padding: "5px", paddingTop: "10px", paddingBottom: "10px", borderRadius: "5px" }}>
              <div style={{ backgroundColor: "", margin: "", fontSize: "1em" }}>Get A Quote</div>
              <svg style={{ backgroundColor: "", margin: "" }} xmlns="http://www.w3.org/2000/svg" width="27" height="23" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" /></svg>
            </div>
          </a>
        </div>




      </div>






      {/* ---------------------------------------------------------------- */}
      <div style={{ width: "25vw", backgroundColor: "red", display: "", margin: "auto" }}>

        <div style={{ display: "flex", backgroundColor: "pink", paddingLeft: "15px", paddingRight: "15px" }}>


          <a title='Call Now' href="tel:7329101016" style={{ display: "flex", backgroundColor: "orange", textDecoration: "none", color: "white" }}>
            <svg style={{ backgroundColor: "", margin: "auto", padding: "5px", borderRadius: "50%", border: "2px solid white" }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /></svg>
            <div style={{ backgroundColor: "black", margin: "auto", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", fontSize: ".9em" }}>732 910 1016</div>
          </a>



          <div style={{ marginLeft: "auto", marginRight: "auto", backgroundColor: "red", border: "1px solid gray" }}>

            <OffcanvasButton />

          </div>


        </div>

      </div>





    </div>
  );
}

export default Toolbar;