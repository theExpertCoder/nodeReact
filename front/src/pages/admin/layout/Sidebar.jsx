import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FcNext, FcPrevious } from "react-icons/fc";

const Sidebar = ({collapse}) => {

  const [collapseStatus, setCollapseStatus] = useState(false);
  const [collapseButton, setcollapseButton] = useState(<FcPrevious />);
  const handleSideBarCollapse = () =>{
    if(!collapseStatus){
      collapse(true)
      setCollapseStatus(true)
      setcollapseButton(<FcNext />);
    }else{
      collapse(false)
      setCollapseStatus(false)
      setcollapseButton(<FcPrevious  />);
    }
  };
  
  return (
    <div style={{borderRight:'1px solid #0d6efd'}} className="p-3 h-100">
      <Button variant="outline-light fs-2" onClick={handleSideBarCollapse} data-status={collapseStatus}>
        {collapseButton}
      </Button>
      <Nav defaultActiveKey="/home" className="flex-column">
        {/* <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link> */}
      </Nav>
    </div>
  )
}

export default Sidebar