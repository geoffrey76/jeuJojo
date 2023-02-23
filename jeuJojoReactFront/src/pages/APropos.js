import React from 'react';
import "../css/contact.css";
import Header from '../components/Header';
import Footer from '../components/Footer';

const APropos = ()=>{
   
    return(
        <div id='mainPart'>
            <Header />
            <main id="aPropos">
                 <p>Débutant dans la réalisation de site web, j'ai modestement réalisé ce site avec des petits jeux, qui, je l'espère, t'apporteront beaucoup de plaisir.</p>
            </main>
           <Footer />
        </div>
    )
       
}

export default APropos;