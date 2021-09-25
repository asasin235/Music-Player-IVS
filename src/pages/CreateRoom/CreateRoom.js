
import Link from 'react-router-dom/Link'

import CreateRoomForm from "../../components/CreateRoomForm/CreateRoomForm"
import SecondHeader from "../../components/header/secondHeader"
import "bootstrap/dist/css/bootstrap.min.css";

const CreateRoom = () => {
  return (
    <>
      <SecondHeader title="Join Room" />

      <CreateRoomForm />
      <Link to={'/'}> Go Back</Link>

    </>
  )
}

export default CreateRoom