import Textarea from '../../components/TextArea/TextArea';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import './CreateRoomForm.css'
import {MdContentCopy} from 'react-icons/md'
import React from 'react';

export default class CreateRoomForm extends React.Component {

  state = {
    loading: true,
    roomid: null,
    roomName: '',
    password: '',
    participantsCount: '',
    rememberMe: false

  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.type === 'checkbox' ? input.checked : input.value;
 
    this.setState({ [input.name]: value });
  };

  handleFormSubmit = () => {
    const { roomName, password, participantsCount, rememberMe } = this.state;
    localStorage.setItem('rememberMe', rememberMe);
    localStorage.setItem('roomName', rememberMe ? roomName : '');
    localStorage.setItem('password', rememberMe ? password : '');
    localStorage.setItem('participantsCount', rememberMe ? participantsCount : '');

  };

  async componentDidMount(){
    const url = "http://localhost:8080";
    const response = await fetch(url);
    const data = await response.json();
    const rememberMe = localStorage.getItem('rememberMe') === 'true';
    const roomName = rememberMe ? localStorage.getItem('roomName') : '';
    const password = rememberMe ? localStorage.getItem('password') : '';
    const participantsCount = rememberMe ? localStorage.getItem('participantsCount') : '';
    this.setState({roomName, password, participantsCount, rememberMe, roomid: data.value, loading: false });
  }

render() {
return( 
    <form onSubmit={this.handleFormSubmit} className='create-room-div'>
    <Row sm={2} xs={1}>
      <Col>
        <h1>Create Room</h1>
      </Col>
      <Col className='d-flex justify-content-end'>
        <Button size="lg" className='create-room-button'>
          ROOM ID:{this.state.loading || !this.state.roomid ? (<p>loading...</p>) : (<p>{this.state.roomid}</p>)} <MdContentCopy />
        </Button>
      </Col>
    </Row>
      <Row xs={1} md={2}>
        <Col>
          <div className='input-div'>
            <h3>Room Name:</h3>
            <input name="roomName" value={this.state.roomName} onChange={this.handleChange}/>
              <Button type="submit">SAVE</Button>
          </div>

          <div className='input-div'>
            <h3> Passcode: </h3>
            <div className='text-div'>
              <input type='password' name="password" value={this.state.password} onChange={this.handleChange}/>
              <Button><MdContentCopy /></Button>
            </div>
          </div>

          <div className='input-div'>
            <Button>GENERATE PASSCODE</Button>
          </div>
        </Col>
        <Col>
        <div className='input-div'>
         <h3 className='title'>Number of Participants</h3>
         <input type='number' name='participantsCount' id='particip' value={this.state.participantsCount} onChange={this.handleChange} />
        </div>
        <div className='input-div'>
      <h3 className='title'>Game Rules</h3>
      <textarea name='textarea'></textarea>
    </div>
        </Col>
      </Row>
    <div className='create-room-button-div'>
      <h1>
    <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox"/>
      </h1>
    <Button type="submit" className='create-room-button' size='sm' variant='primary'>
        CREATE ROOM
      </Button>
    </div>
  </form>
    );
}

}