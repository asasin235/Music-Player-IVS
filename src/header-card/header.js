import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './header.css'
function Header(){
    return (
        <Card bg='primary' style={{ width: '18rem' }}>
  
  <Card.Body className='main-data'>
    <Card.Title className="Heading">Card Title</Card.Title>
    <Card.Text >
      Play Along with your friends
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>)
    }




export default Header;