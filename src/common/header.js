import React from 'react';
import '../components/css/header.css';
const Header = (props) => {
    return (
        <div className="container-fluid" id="headerBG">
            <div id="header">
                <div className="logo">
                <img  src="https://optile.net/wp-content/uploads/optile-logo-white.png" 
                    width="183px" height="25px" title="Optile logo" alt="ANZ Logo"id="imgLogo"/> 
                </div>
            </div>
        </div>
    )
}


export default Header;
