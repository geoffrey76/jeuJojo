import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/memory2Players.css';
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


const Memory2PlayersReact = ()=>{
    
    let imageArray = [baleine, baloon, birds, boats, chinese_deco, dolfins, fishes, flowers, palm_trees, red_flowers, sunflowers, watermelon];
    let cardNumbers = [];
    let imageToFind =[];
    let imagesToCompare=[];
    let indicesToCompare=[];
    let attemps = 0;
    let playerAFlash = 0;
    let playerBFlash = 0;
    let playingPlayer = "playerA"
    let wonCardsANumber = 0;
    let wonCardsBNumber = 0;
    let secondArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    
    // =========================== Make flash Player A =========================================
    useEffect(()=>{
        window.scrollTo(0, 0);
        let playerA = document.getElementById("playerA");
        playerAFlash = setInterval(function(){playerA.classList.toggle ("hide")}, 500);
        return ()=>clearInterval(playerAFlash);
    },[])
    // ============================ Function to make flash player ================================
    function playerFlash(player){
        player.classList.toggle ("hide");
    }
    // ========================== Built Array with different numbers between 0 and 23 ==================
    let arrayInit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    let i=0
    while (arrayInit.length>0){
        let index = Math.floor(Math.random()*arrayInit.length);
        cardNumbers[i] = arrayInit[index];
        arrayInit.splice(index, 1);
        i++;
    }
    // ============================ Built Array with the different image to find ==================================
    for (let i=0; i<=11; i++){
        imageToFind[cardNumbers[i]] = imageArray[i];
        imageToFind[cardNumbers[i+12]] = imageArray[i];
    }
    // <<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        // ============================ EventListener on all cards + test the cards =============================================
    function cardCompare(i){
        
            //========================================= Variable declaration ========================================
            let memoryGrid = document.getElementById("memoryGrid");
            let cardContainer = document.getElementsByClassName ("cardContainer");
            let playerA = document.getElementById("playerA");
            let playerB = document.getElementById("playerB");
            let wonCardsAGrid = document.getElementById("wonCardsAGrid");
            let wonCardsBGrid = document.getElementById("wonCardsBGrid");
            let direction = "";
            let winning="";
           
                if (indicesToCompare.length < 2){    //------------ Avoid to click on 3 cards -----------
                    cardContainer[i].style.animation = "cardFlip 1s forwards";
                    setTimeout (function(){
                        cardContainer[i].style.backgroundColor = "white";
                        cardContainer[i].style.backgroundImage = `url(${imageToFind[i]})`;
                    },300);
                    indicesToCompare.push(i);
                    imagesToCompare.push(imageToFind[i]);
                    cardContainer[indicesToCompare[0]].classList.add ("cursorInvisible");//------ Avoid to click on the same card ----
                    // -------------------------------- Compare two cards ------------------------------
                    // -------------------------------- If the 2 cards are identical -----------------
                    if (imagesToCompare[0]  === imagesToCompare[1]){
                        attemps++;
                        memoryGrid.classList.add ("cursorInvisible");
                        setTimeout (function(){
                            if (attemps !== 0){
                                if (playingPlayer === "playerA"){ //----------- If player A was playing --------------
                                    for(let x=0; x<=1; x++){
                                        direction = "left";
                                        movingCard(x, direction);
                                    }
                                    wonCardsANumber++;
                                    setTimeout (function(){
                                        //------------------------ Display small icon --------------------------
                                        wonCardsAGrid.appendChild (document.createElement("div"));
                                        wonCardsAGrid.lastChild.style.backgroundImage = `url(${imageToFind[i]})` ; 
                                        wonCardsAGrid.lastChild.classList.add("wonCardsASmall");
                                        imagesToCompare=[];
                                        indicesToCompare=[];
                                    }, 1500);
                                    
                                }else{ // --------------------- If player B was playing ----------------------
                                    for(let x=0; x<=1; x++){ 
                                        direction = "right"
                                        movingCard (x, direction);
                                    }
                                    wonCardsBNumber++;
                                    setTimeout(function(){
                                        //------------------------ Display small icon --------------------------
                                        wonCardsBGrid.appendChild (document.createElement("div"));
                                        wonCardsBGrid.lastChild.style.backgroundImage = `url(${imageToFind[i]})`;
                                        wonCardsBGrid.lastChild.classList.add("wonCardsBSmall");
                                        imagesToCompare=[];
                                        indicesToCompare=[];
                                    }, 1500)     
                                }
                            } 
                            //-------------------------   Display winning player -------------------------
                            setTimeout (function(){
                                if (wonCardsANumber+wonCardsBNumber === 12){
                                    clearInterval(playerAFlash);
                                    playerA.classList.remove("hide");
                                    clearInterval(playerBFlash);
                                    playerB.classList.remove("hide");
                                    memoryGrid.classList.toggle ("victory");
                                    if (wonCardsANumber>wonCardsBNumber){
                                        winning = "VICTOIRE DU JOUEUR A";
                                    }else if (wonCardsANumber<wonCardsBNumber){
                                        winning = "VICTOIRE DU JOUEUR B";
                                    }else{
                                        winning = "EGALITE";
                                    }
                                    memoryGrid.innerHTML  = `<p>${winning}</p>`+
                                    '<button id="restartButton" onClick="window.location.reload()">RECOMMENCER</button>';
                                }  
                            },2000);
                            
                        }, 1500);
                    
                    // -------------------------------- If the 2 cards are different -----------------
                    }else{
                        
                        if (imagesToCompare.length >= 2){
                            
                            memoryGrid.classList.add ("cursorInvisible");
                            attemps++;
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
                                
                                if (attemps !== 0){
                                    if (playingPlayer === "playerA"){ // -------------- If player A was playing - switch to player B -------------- 
                                        clearInterval(playerAFlash);
                                        playerA.classList.remove("hide");
                                        playerBFlash = setInterval(playerFlash, 500, playerB);
                                        playingPlayer = "playerB";
                                    }else{  // -------------- If player B was playing - switch to player A -------------- 
                                        clearInterval(playerBFlash);
                                        playerB.classList.remove("hide");
                                        playerAFlash = setInterval(playerFlash, 500, playerA);
                                        playingPlayer = "playerA";
                                    }
                                }
                            }, 2000)
                        }
                    }
                }
                memoryGrid.classList.remove ("cursorInvisible");
        }  
      
    // ================================ Function to make the winning cards move to the left or to the right =======================
    function movingCard(x, direction){
        let cardContainer = document.getElementsByClassName ("cardContainer");
        let memoryGrid = document.getElementById("memoryGrid");
        let memoryGridHeight = memoryGrid.clientHeight;
        let memoryGridWidth = memoryGrid.clientWidth;
        let cardHeight = cardContainer[0].offsetHeight;
        let cardWidth = cardContainer[0].offsetWidth;
        let widthToTravel = 0
        let cardOffsetTop = cardContainer[indicesToCompare[x]].offsetTop;
        let cardOffsetTopCenter = cardOffsetTop + cardHeight/2;
        let heightToTravel = cardOffsetTopCenter - memoryGridHeight/2;
        let cardOffsetLeft = cardContainer[indicesToCompare[x]].offsetLeft;
        let translateCardInterval0 = 0;
        let translateCardInterval1 = 0;

        cardContainer[indicesToCompare[x]].style.zIndex = "1000";
        if (direction === "left"){
            widthToTravel = cardOffsetLeft+cardWidth;
        }else{
            widthToTravel = memoryGridWidth - cardOffsetLeft;
        }
        let deltaPositionX = 0;
        let deltaPositionY = 0;
        let speedX = widthToTravel/100;
        if (direction === "left") {speedX = -speedX}
        let speedY = heightToTravel/100;
        cardContainer[indicesToCompare[x]].style.animation = "translate 1s forwards";
        if (x===0){
            translateCardInterval0 = setInterval (translateCard, 5);
        }
        if (x===1){
           translateCardInterval1 = setInterval (translateCard, 5);
        }
        function translateCard(){
            setTimeout(function(){
                clearInterval (translateCardInterval0);
                clearInterval (translateCardInterval1);
            },700);
            deltaPositionX = deltaPositionX + speedX;
            deltaPositionY = deltaPositionY - speedY;
            cardContainer[indicesToCompare[x]].style.left = deltaPositionX+"px";
            cardContainer[indicesToCompare[x]].style.top = deltaPositionY+"px";
        }
    }
    return(
        <div id="mainPartMemory2">
            <Header />
            <aside id="asideLeft" className="aside">
                <div id="wonCardsAGrid"></div>
                <p id="playerA" className="player">Joueur A: </p>
            </aside>
            <main id="memoryGrid" className="memoryGrid">
                {secondArray.map(listItem =>
                    <div key={listItem} className="cardContainer" onClick={()=>cardCompare(listItem)}></div>
                )}
                    {/* <div className="cardContainer" onClick={()=>cardCompare(0)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(1)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(2)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(3)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(4)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(5)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(6)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(7)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(8)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(9)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(10)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(11)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(12)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(13)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(14)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(15)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(16)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(17)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(18)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(19)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(20)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(21)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(22)}></div>
                    <div className="cardContainer" onClick={()=>cardCompare(23)}></div> */}
            
            </main>
            <aside id="asideRight" className="aside"> 
                <p id="playerB" className="player">Joueur B: </p>
                <div id="wonCardsBGrid"></div>
            </aside>   
            <Footer />      
        </div>
    )
}           
export default Memory2PlayersReact;


