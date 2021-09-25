import Link from "react-router-dom/Link"

import SecondHeader from "../../components/header/secondHeader"
import "bootstrap/dist/css/bootstrap.min.css";
const JoinRoom = () => {
    return (

        <>
            <SecondHeader title="Create Room" />



            <Link to={'/'}> Go Back</Link>

        </>
    )
}

export default JoinRoom
