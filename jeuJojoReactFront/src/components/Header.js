import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logoJeuJojo.png';

const Header = ()=>{
   // ==================== Menu toggle hamburger ==========================
function showMenu(){
    let hamburgerBar1 = document.getElementById("hamburgerBar1");
    let hamburgerBar2 = document.getElementById("hamburgerBar2");
    let hamburgerBar3 = document.getElementById("hamburgerBar3");
    let menuVisible = document.getElementById("mainMenu");
    menuVisible.classList.toggle('visible');
    if (menuVisible.className === "visible"){
        hamburgerBar1.classList.remove("hamburgerBar1MoveBack"); 
        hamburgerBar2.classList.remove("hamburgerBar2MoveBack"); 
        hamburgerBar3.classList.remove("hamburgerBar3MoveBack"); 
        hamburgerBar1.classList.add("hamburgerBar1Move"); 
        hamburgerBar2.classList.add("hamburgerBar2Move"); 
        hamburgerBar3.classList.add("hamburgerBar3Move"); 
    }else{
        hamburgerBar1.classList.remove("hamburgerBar1Move"); 
        hamburgerBar2.classList.remove("hamburgerBar2Move"); 
        hamburgerBar3.classList.remove("hamburgerBar3Move"); 
        hamburgerBar1.classList.add("hamburgerBar1MoveBack"); 
        hamburgerBar2.classList.add("hamburgerBar2MoveBack"); 
        hamburgerBar3.classList.add("hamburgerBar3MoveBack"); 
    }
    
}

// ===================== Menu toggle gameMenu ==========================
//--------------------- Show or hide gameMenu when click -------------------
function showGameMenuClick(){
    let gameMenu = document.getElementById("gameMenu");
    gameMenu.classList.toggle('visible');    
}
//--------------------- Show gameMenu when mouseover -------------------
function showGameMenu(){
    let gameMenu = document.getElementById("gameMenu");
    gameMenu.classList.add('visible');  
}
//--------------------- Hide gameMenu when mouseleave -------------------
function hideGameMenu(){
    let gameMenu = document.getElementById("gameMenu");
    gameMenu.classList.remove('visible');  
}
// //---------------------- Refresh the contact page if already on it when pushing contact on the Nav Bar ------ 
// function refreshContactPage(){
//     if (window.location.href="/contact"){window.location.reload()}
// }
return(
    <header>
        <Link to="/"><img src={logo} alt="Logo JJJ" id="logoImg"/></Link>
        <h1><Link to="/">Les jeux de jojo</Link></h1>
        <div id="hamburgerContainer" onClick={showMenu}>
            <div id="hamburgerBar1" className="hamburgerBar"></div>
            <div id="hamburgerBar2"className="hamburgerBar"></div>
            <div id="hamburgerBar3"className="hamburgerBar"></div>
        </div>
        <nav>
            <ul id="mainMenu">
                <li id="game" onClick={showGameMenuClick} onMouseOver={showGameMenu} onMouseLeave={hideGameMenu}>Jeux <i className="fa fa-caret-down"></i>
                    <nav id="gameMenu">
                        <li><Link to="/jeuNombre">Nombres</Link></li>
                        <li><Link to="/penduIntro">Pendu</Link></li>
                        <li><Link to="/colorBallInfo">Balles de couleurs</Link></li>
                        <li><Link to="/memory">Memory</Link></li>
                    </nav>
                </li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/aPropos">A propos</Link></li>
                <li><Link to="/">Accueil</Link></li>   
            </ul> 
        </nav>
    </header>
)

}

export default Header;
