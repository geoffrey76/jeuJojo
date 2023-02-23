import React from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const PenduIntro = ()=>{

    return(
        <div id="mainPart">
            <Header />
            <main className="mainPendu">
                <div className="transBox">
                    <p>Le but du jeu est de trouver un mot. <br/>
                        Il s'agit de noms communs très utilisés (pas de noms propres, pas de verbes, pas d'adjectifs, pas d'adverbes,...)<br/>
                        Tu as droit à 6 erreurs maximum</p>
                    {/* <!--bouton pour commencer à jouer--> */}
                    <Link to="/jeuPendu" id="startPendu"><button type="submit" className="boutonStart">commencer a jouer</button></Link>
                </div>
                <Link to="http://www.freeimages.co.uk" rel="nofollow" target="_top" title="Download free stock photography" className="lienImg">image : www.freeimages.co.uk</Link>
             </main>
            <Footer />      
        </div>
    )
}
            
export default PenduIntro;