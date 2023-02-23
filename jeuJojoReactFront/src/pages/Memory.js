import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StartButton from '../components/StartButton';


const Memory = ()=>{

    return(
        <div id="mainPart">
            <Header />
            <main>
                <ul>
                    <StartButton title = "Memory 1 Joueur" link = "/memory1Player" id = "memoryButton" />
                    <StartButton title = "Memory 2 Joueurs" link = "/memory2Players" id = "memoryButton" />
                </ul>
            </main>
            <Footer />      
        </div>
    )
}
            
export default Memory;






