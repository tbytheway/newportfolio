import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
import "../style/home.scss" 


const Home = () => {
    return(
        <div className="home-wrapper">
            <h1>Hi. I'm <span className="text-red">Terry Bytheway</span>.<br></br>
            I'm a full-stack web developer</h1>
            <div className="work-button">
            <button><a href="#about">Check out my work &nbsp;<FontAwesomeIcon icon={ faAngleDoubleRight } /></a></button>
            </div>
        </div>
    )
}
export default Home