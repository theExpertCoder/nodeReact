import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


const GuestLayout = () => {
    
   
    const func = (data) => {
        // console.log(data);
    }
  
    return <>
        <Header func={func}/>           
            <Outlet />
        <Footer />
    </>

}

export default GuestLayout