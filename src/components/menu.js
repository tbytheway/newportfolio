import React from 'react';

import "../style/menu.scss" 


const Menu = () => {
    return(
        <div className="menu-wrapper">
            <h2>
            <div className= "menu"> 
                <div><a onclick="topFunction()" id="myBtn" title="Go to top">Home</a></div>
                <div><a href="#about">About</a></div>
                <div><a href="#projects">Projects</a></div>
                <div><a href="#contact">Contact</a></div>
            </div>
            </h2>
        </div>
    )
}
export default Menu