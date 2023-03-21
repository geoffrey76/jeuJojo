import { React } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StartButton from '../components/StartButton';

const Accueil = ()=>{
    const startButtonList = [
        {title:"Trouver un nombre entre 1 et 100", link:"/jeuNombre", id:"numberButton"},
        {title:"Jeu du pendu", link:"/penduIntro", id:"penduButton"},
        {title:"Jeu des balles de couleurs", link:"/colorBallInfo",id:"colorBallButton"},
        {title:"Memory", link:"/memory", id:"memoryButton"},
        {title:"4 à la suite", link:"/4aLaSuite", id:"puissance4Button"}
    ]
    return(
        <div id="mainPart">
            <Header />
            <main>
                <h1>a quel jeu veux-tu jouer?</h1>
                <ul>
                    {startButtonList.map(element=>
                        <StartButton key={element.title} title={element.title} link={element.link} id={element.id}/>
                    )}
                </ul> 
        
            </main>
            <Footer />
        
        </div>
        
    )

}
    
export default Accueil;
