import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

// browserHistory.push('/some/path')

const Header = () => {
   
    // console.log(name)
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [cross, setCross] = useState('Icon');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleCrossOpen = () => {
        setCross('Icon open')
    };
    const handleCrossClose = () => {
        setCross('Icon')
    };

    
    const changeNavigation = (e) => {
        e.preventDefault();
        setShow(false);
        navigate(e.target.getAttribute('href'));
    };
    
    return <>
        <div> 
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="light">
            <Container fluid>
                <Navbar.Brand className='text-white fw-semibold fs-1' href="/" onClick={changeNavigation}>React</Navbar.Brand>

                <div id="icon" className="Icon open" onClick={handleShow} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <Offcanvas placement={'end'} show={show} onHide={handleClose} className="bg-primary">
                    <Offcanvas.Header >                   
                    <Offcanvas.Title className='text-white'>Demo</Offcanvas.Title>
                    <div id="icon" className={cross} onClick={handleClose}  onMouseEnter={handleCrossOpen} onMouseLeave={handleCrossClose}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="ms-auto text-white">
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