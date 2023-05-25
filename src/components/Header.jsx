import { useState } from "react";
//importing link for browser routing
import {Link} from "react-router-dom"

import Logo from "../../assets/img/beehively_logo_header.svg";




function LoggedInUser() {
    return true;
}
const Title = ()=>{
    return (
        <>
            <Link to="/">
            <img 
            className="logo"
            src={Logo} alt="LOGO"/>
            </Link>
        </>
    )
};
const Header = ()=>{

    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return (<div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                <li>
                    <Link to="/">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link to="/user_details">
                        User Details
                    </Link>
                </li>
                <li>
                    <Link to="/posts">
                        post
                    </Link>
                </li>
                <li>
                    {
                        isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : <button onClick={()=> setIsLoggedIn( true)}>Login</button>
                    }
                </li>
                </ul>
            </div>
            
        </div>); 
};

export default Header;
