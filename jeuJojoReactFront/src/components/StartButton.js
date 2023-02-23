import React from "react";
import { Link } from "react-router-dom";


const StartButton = ({ title, link, id })=>{
    return(
        <li><Link to = {link}><button id={id} className="indexButton"><div className="transButton"><p className="buttonTitle">{title}</p></div></button></Link></li>
    )  
}

export default StartButton;