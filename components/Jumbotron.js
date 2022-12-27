import Carousel from 'react-bootstrap/Carousel';
import construction from "../photos/demolition.jpg";


function Jumbotron() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "60vh" }}
                    src="https://images.pexels.com/photos/4254158/pexels-photo-4254158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "60vh" }}
                    src="https://images.pexels.com/photos/4254158/pexels-photo-4254158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    style={{ height: "60vh" }}
                    src="https://images.pexels.com/photos/4254158/pexels-photo-4254158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Jumbotron;