import './waitinglobby.css';
import {Col , Row , Container , Image} from 'react-bootstrap';
import p1 from "./images/p1.jpeg";
import p2 from "./images/p2.jpeg";
import p3 from "./images/p3.jpeg";
import p4 from "./images/p4.jpeg";
import p5 from "./images/p5.png";
import online from "./images/check.jpeg";
import offline from "./images/offline.jpeg";



const Waitinglobby = ()=>{

    return (
        <div className="waitinglobby-div">
            <h5>waiting lobby</h5>
        <Container>
        <Row>
            <Col className="cl" xs="auto">
            <Image className="img" src={p1} roundedCircle />
            <Image className="img2" src={online} roundedCircle/>
            <p className="txt">player 1<br/>added 10 songs</p>
            </Col >
            <Col className="cl" xs="auto">
            <Image className="img" src={p2} roundedCircle />
            <Image className="img2" src={online} roundedCircle/>
            <p className="txt">player 2</p>
            </Col>
            <Col className="cl" xs="auto">
            <Image className="img" src={p3} roundedCircle />
            <Image className="img2" src={offline} roundedCircle/>
            <p className="txt">player 3</p>
            </Col>
            <Col className="cl" xs="auto">
            <Image className="img" src={p4} roundedCircle />
            <Image className="img2" src={offline} roundedCircle/>
            <p className="txt">player 4</p>
            </Col>
            <Col className="cl" xs="auto">
            <Image className="img" src={p5} roundedCircle />
            <Image className="img2" src={online} roundedCircle/>
            <p className="txt">player 5</p>
            </Col>
        </Row>
        </Container>
        </div>

        
    );

}

export default Waitinglobby