import { React, useState, useEffect, useRef } from 'react';
import axios from "axios";
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/memory.css';
import baleine from '../images/imgMemory/baleine.png';
import baloon from '../images/imgMemory/baloon.png';
import birds from '../images/imgMemory/birds.png';
import boats from '../images/imgMemory/boats.png';
import chinese_deco from '../images/imgMemory/chinese_deco.png';
import dolfins from '../images/imgMemory/dolfins.png';
import fishes from '../images/imgMemory/fishes.png';
import flowers from '../images/imgMemory/flowers.png';
import palm_trees from '../images/imgMemory/palm_trees.png';
import red_flowers from '../images/imgMemory/red_flowers.png';
import sunflowers from '../images/imgMemory/sunflowers.png';
import watermelon from '../images/imgMemory/watermelon.png';


const Memory1Player = ()=>{
    const [bestScore, setBestScore] = useState(0);
    const [bestScoreName, setBestScoreName] = useState([""]);
    const [attempsDisplay, setAttempsDisplay] = useState (0);
    //-------------------- Retrieve best score and name from back-end ------------------------------
    useEffect(()=>{
        //----------------------------Remove cursor and not possible to click---------------------------------
        document.getElementById("memoryGrid").classList.add ("cursorInvisible");//-----------Classlist in memory2Players.css---------
        //---------------------------------------------------------------------------------------
        axios.get('/api/getBestScore').then((response)=>{
            const bestScoreData = response.data;
            if (bestScoreData.length !== 0){
                setBestScoreName (bestScoreData[0].bestScoreName);
                setBestScore (bestScoreData[0].bestScore);
            }
            document.getElementById("memoryGrid").classList.remove("cursorInvisible");//-----------Classlist in memory2Players.css---------
        })
    },[]);
    //-------------------- send best score when it changes ------------------------------------
    function sendBestScore(){
        axios.post ("/api/newBestScore", {bestScore: bestScore, bestScoreName: bestScoreName});
        document.getElementById("restartButtonMemory1").style.display = "block";
        document.getElementById("bestScoreChange").style.display = "none";
    }
    
    //---------------------- End rertrieve best score ------------------------
    let imageArray = [baleine, baloon, birds, boats, chinese_deco, dolfins, fishes, flowers, palm_trees, red_flowers, sunflowers, watermelon];
    let cardNumbers = [];
    let imageToFind =[];
    let imagesToCompare=[];
    let indicesToCompare=[];
    const attemps = useRef(0);
    // let attemps = 0;
    let secondArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    let goodCards = 0;
    // ========================== Built Array with different numbers between 0 and 23 ==================
    let arrayInit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    let i=0
    while (arrayInit.length>0){
        let index = Math.floor(Math.random()*arrayInit.length);
        cardNumbers[i] = arrayInit[index];
        arrayInit.splice(index, 1);
        i++;
    }
    // ============================ Built Array with the different image ==================================
    for (let i=0; i<=11; i++){
        imageToFind[cardNumbers[i]] = imageArray[i];
        imageToFind[cardNumbers[i+12]] = imageArray[i];
    }
    
    // ============================EventListener on all cards + test the cards =============================================
        function cardCompare(i){
            let memoryGrid = document.getElementById("memoryGrid")
            let attempsNumber = document.getElementById ("attempsNumber");
            let attempsNumberContainer = document.getElementById ("attempsNumberContainer");
            let cardContainer = document.getElementsByClassName ("cardContainer");
            let centerPart = document.getElementById ("centerPart");
            cardContainer[i].style.animation = "cardFlip 1s forwards";
            cardContainer[i].style.animation = "cardFlip 1s forwards";
                
                setTimeout (function(){cardContainer[i].style.backgroundImage = `url(${imageToFind[i]})`;},300);
                indicesToCompare.push(i);
                imagesToCompare.push(imageToFind[i]);
                cardContainer[indicesToCompare[0]].classList.add ("cursorInvisible");
                // -------------------------------- Compare two cards ------------------------------
                if (imagesToCompare[0]  === imagesToCompare[1]){
                    attemps.current++;
                    if (attemps.current >1){
                        document.getElementById("attempsNumberContainer").firstChild.innerHTML = "<p>Nombre d'essais:</p>"
                    }
                    attempsNumber.innerHTML = attemps.current;
                    goodCards++;
                    cardContainer[indicesToCompare[0]].classList.add ("cursorInvisible");
                    cardContainer[indicesToCompare[1]].classList.add ("cursorInvisible");
                    setTimeout(()=>{
                        cardContainer[indicesToCompare[0]].style.visibility = "hidden";
                        cardContainer[indicesToCompare[1]].style.visibility = "hidden";
                        imagesToCompare=[];
                        indicesToCompare=[];
                    },1000)
                
                    // ---------------------- End of the game - Display the result ------------------------
                    if (goodCards === 12){
                        centerPart.style.display = "block";
                        attempsNumberContainer.style.display = "none";
                        memoryGrid.classList.toggle ("victory");
                        if (attemps.current < bestScore || bestScore === 0 || bestScore === null){
                            setBestScore (attemps.current);
                            document.getElementById("bestScoreChange").style.display = "block";
                        }else{
                            document.getElementById("restartButtonMemory1").style.display = "block";
                        }
                        setAttempsDisplay (attemps.current);
                        document.getElementById("victory").style.display = "block";
                        document.getElementById("centerPart").style.display = "none";
                    }
                }else{
                    // -----------------------------If the 2 cards are differents ---------------------
                    if (imagesToCompare.length >= 2){
                        memoryGrid.classList.add ("cursorInvisible");
                        attemps.current++;
                        if (attemps.current >1){
                            document.getElementById("attempsNumberContainer").firstChild.innerHTML = "<p>Nombre d'essais:</p>"
                        }
                        if (attemps.current>99){attempsNumber.style.fontSize = "2em"};
                        attempsNumber.innerHTML = attemps.current;
                        setTimeout (function(){
                            cardContainer[indicesToCompare[0]].style.animation = "cardFlipBack 1s forwards";
                            cardContainer[indicesToCompare[1]].style.animation = "cardFlipBack 1s forwards";
                            setTimeout(backgroundBasic, 1000, indicesToCompare);
                            function backgroundBasic(a){
                                cardContainer[a[0]].style.removeProperty ("background-Image");
                                cardContainer[a[1]].style.removeProperty ("background-Image");
                            }
                            cardContainer[indicesToCompare[0]].classList.remove ("cursorInvisible");
                            imagesToCompare=[];
                            indicesToCompare=[];   
                            memoryGrid.classList.remove("cursorInvisible");
                        }, 2000)
                    }
                }
        }

     //========================================= Refresh page function ================================
    function refreshPage(){window.location.reload() }
   
    return(
        <div id="mainPart">
            <Header />
            <div id="centerPart">
                <aside id="attempsNumberContainer">
                    <p>Nombre d'essai:</p>
                    <p id="attempsNumber">{attemps.current}</p>
                    <p>Meilleur Score:</p>
                    <p id="bestScoreName">{bestScoreName}</p>
                    <p id="bestScore">{bestScore}</p>
                </aside>
                <main id="memoryGrid" className="memoryGrid">
                    {secondArray.map(listItem =>
                        <div key={listItem} className="cardContainer" onClick={()=>cardCompare(listItem)}></div>
                    )}
                </main> 
            </div>
            <div id='victory'>
                <p>Tu as fait {attempsDisplay} essais</p>
                <div id='bestScoreChange'>
                    <label>Tu as le meilleur score. Entre ton pseudo</label>
                    <input type="text" onChange={e => setBestScoreName(e.target.value)} autoFocus></input>
                    <button type="button" onClick={sendBestScore}>OK</button>
                </div>
                <button type="button" id="restartButtonMemory1" onClick={refreshPage}>Recommencer</button>
            </div>
            <Footer />      
        </div>
    )
}
            
export default Memory1Player;






