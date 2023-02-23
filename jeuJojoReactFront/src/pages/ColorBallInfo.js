import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const ColorBallInfo = ()=>{

    return(
        <div id="mainPart">
            <Header />
            <main id="mainColorBallInfo">
                <ul className="listColorBallInfo">
                    <li><span className="whiteText">Le but du jeu est de trouver une combinaison de 4 boules de couleur choisies par l'ordinateur parmi 6 couleurs possibles.</span></li>
                    <li><span className="whiteText">Propose 4 boules en cliquant sur les couleurs disponibles.</span> 
                        <div id="infoBalls">
                            <div  className="possibleBalls" id="redBall"></div>  
                            <div  className="possibleBalls" id="greenBall"></div> 
                            <div  className="possibleBalls" id="yellowBall"></div>  
                            <div  className="possibleBalls" id="blueBall"></div> 
                            <div  className="possibleBalls" id="blackBall"></div> 
                            <div  className="possibleBalls" id="orangeBall"></div> 
                        </div>
                    </li>
                    <li><span className="whiteText">L'ordinateur te montre ton résultat avec des pions verts ou noirs (<span className="spanGoodPosition">I</span> <span className="spanGoodColor">I</span>)</span></li>
                    <li><span className="spanGoodPosition">Chaque petit pion vert correspond à une boule de la bonne couleur et bien placée,</span></li>
                    <li><span className="spanGoodColor">Chaque petit pion noir correspond à une boule de la bonne couleur, mais mal placée,</span></li>
                    <li><span className="whiteText">L'ordre des petits pions verts et noirs ne correspond pas forcément à celui de la combinaison.</span></li>
                    <li><span className="whiteText">Tu peux revenir en arière en appuyant sur le bouton BACK</span></li>
                    <li><span className="whiteText">Tu as droit à 10 chances.</span></li>
                </ul>
                
                {/* </main><p id="secondChapter"><br> */}
                    
                {/* <!--bouton pour commencer à jouer--> */}
                <Link to="/colorBall"><button type="submit" className="boutonStart">commencer a jouer</button></Link>
            </main>
            <Footer />      
        </div>
    )
}
            
export default ColorBallInfo;
