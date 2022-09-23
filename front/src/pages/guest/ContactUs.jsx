import { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const ContactUs = () => {
    const [counter, setCounter] = useState(0);
    const [bar, setBar] = useState('flex');

    useEffect(() => {   
        setTimeout(() => {
            setBar('none')
        }, 800);
        setCounter(100);
    },[]);
    return <>
      <ProgressBar style={{display: bar, height: "5px", borderRadius:'0px'}} animated striped variant="primary" now={counter} ></ProgressBar>
      <div>ContactUs</div>
    </>
  }
  
export default ContactUs