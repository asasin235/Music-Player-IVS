import Link from "react-router-dom/Link"
import Container from 'react-bootstrap/Container'
import SecondHeader from "../../components/header/secondHeader"
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import Joinroomform from "../../components/JoinRoomForm/joinRoomForm"
const JoinRoom = () => {
    return (

    <>
            <SecondHeader title="Join Room" />
            <Joinroomform/>
            <Link to={'/'}> Go Back</Link>


     </>   
    )
}

export default JoinRoom
