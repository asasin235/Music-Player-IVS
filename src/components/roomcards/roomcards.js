import React from "react";
import  Card from "react-bootstrap/Card";
import  Link  from "react-router-dom/Link";
import Button from "react-bootstrap/Button"
import "./roomcards.css";
import { BsArrowRight } from "react-icons/bs";

const Roomcards = () => {
  return (
    <div className="cards">
      
      <Card className="Card1">
        <Card.Body>
          <Card.Title>
            <b>Create Room</b>
          </Card.Title>
          <Card.Text>
            Play alng with
            <br />
            your friends
          </Card.Text>
          {/* TODO : Add Arrow Pic */}
          <Link to={'/createRoom'} >
          <Button variant="danger" size="lg">
          ------{'>'}
  </Button>
          
          </Link>  
        </Card.Body>
      </Card>
      
      
      <Card className="Card1">
        <Card.Body>
          <Card.Title>
            <b>Join Room</b>
          </Card.Title>
          <Card.Text>
            Play along with
            <br />
            your friends
          </Card.Text>
          <Link to={'/JoinRoom'}>
          <Button variant="danger" size="lg">
          ------{'>'}
  </Button>
          </Link>
        </Card.Body>
      </Card>
      
      {/* <Card>
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default Roomcards;
