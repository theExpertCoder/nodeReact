import { useEffect, useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

const Dashboard = () => {
  const [counter, setCounter] = useState(0);
  const [bar, setBar] = useState('flex');
  useEffect(() => {   
      setCounter(100);
      setTimeout(() => {
          setBar('none')
      }, 800);
  },[]);
  return <>
    <ProgressBar style={{display: bar, height: "2px", borderRadius:'0px'}} animated striped variant="danger" now={counter} ></ProgressBar>
    <div>Dashboard</div>
  </>
}

export default Dashboard