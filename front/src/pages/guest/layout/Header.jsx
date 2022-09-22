import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// browserHistory.push('/some/path')

const Header = ({func}) => {
   
    // console.log(name)
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const changeNavigation = (e) => {
        e.preventDefault();
        setShow(false);
        navigate(e.target.getAttribute('href'));
    };
    func('ys');
    return <>
        <div> 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/" onClick={changeNavigation}>React-Bootstrap</Navbar.Brand>
               
                <Button variant="dark" onClick={handleShow}>
                        <span className="navbar-toggler-icon"></span>
                </Button>
                <Offcanvas placement={'end'} show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Demo</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto">
                            <Nav.Link href="/" onClick={changeNavigation}>Home</Nav.Link>
                            <Nav.Link href="/about" onClick={changeNavigation}>Contact</Nav.Link>
                            <Nav.Link href="/contact" onClick={changeNavigation}>About</Nav.Link>
                            <Nav.Link href="/dashboard" onClick={changeNavigation}>Dashboard</Nav.Link>                        
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
        </div>
    </>
}

export default Header