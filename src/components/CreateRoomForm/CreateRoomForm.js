import Participants from '../../components/Participants/Participants';
import Textarea from '../../components/TextArea/TextArea';
import { Container, Row, Col, Button } from "react-bootstrap";
import './CreateRoomForm.css'
import {MdContentCopy} from 'react-icons/md'
import React from 'react';

export default class CreateRoomForm extends React.Component {

  state = {
    loading: true,
    roomid: null
  }

  async componentDidMount(){
    const url = "http://localhost:8080";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({roomid: data.value, loading: false });
  }

render() {
return( 
        <div className='create-room-div'>
    <Container fluid>
      <Row sm={2} xs={1}>
        <Col>
          <h1>Create Room</h1>
        </Col>
        <Col className='d-flex justify-content-end'>
          <Button size='lg' className='create-room-button'>
            ROOM ID: {this.state.roomid} <MdContentCopy />
          </Button>
        </Col>
      </Row>
    </Container>
    <Container fluid>
      <Row xs={1} md={2}>
        <Col>
          <div className='input-div'>
            <h3>Room Name:</h3>
            <div className='text-div'>
              <input type='text' />
              <Button>SAVE</Button>
            </div>
          </div>

          <div className='input-div'>
            <h3> Passcode: </h3>
            <div className='text-div'>
              <input type='password' />
              <Button><MdContentCopy /></Button>
            </div>
          </div>

          <div className='input-div'>
            <Button>GENERATE PASSCODE</Button>
          </div>
        </Col>
        <Col>
          <Participants title='Number of Participants' />
          <Textarea title='Game Rules' />
        </Col>
      </Row>
    </Container>
    <div className='create-room-button-div'>
      <Button className='create-room-button' size='lg' variant='primary'>
        CREATE ROOM
      </Button>
    </div>
  </div>
    );
}

}
