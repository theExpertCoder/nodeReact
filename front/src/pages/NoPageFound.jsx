import { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const NoPageFound = () => {
  const [counter, setCounter] = useState(0);
  const [bar, setBar] = useState('flex');

  useEffect(() => {   
      setTimeout(() => {
          setBar('none')
      }, 800);
      setCounter(100);
  },[]);
  return <>
    <ProgressBar style={{display: bar, height: "2px", borderRadius:'0px'}} animated striped variant="danger" now={counter} ></ProgressBar>
    <div>NoPageFound</div>
  </>
}

export default NoPageFound