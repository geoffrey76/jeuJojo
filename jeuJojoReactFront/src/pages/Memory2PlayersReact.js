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
    
    window.scrollTo(0, 0);
    //=====================================Start of the presentation of the cards before the game ===============   
    useEffect (()=>{
        let memoryGrid = document.getElementById("memoryGrid");
        let cardContainer = document.getElementsByClassName ("cardContainer");
        let j = 0;
        let memoryGridHeight = memoryGrid.clientHeight;
        let memoryGridWidth = memoryGrid.clientWidth;
        let cardHeight = cardContainer[0].offsetHeight;
        let cardWidth = cardContainer[0].offsetWidth;
        let deltaX = [];
        let deltaY = [];
        let positionX = [];
        let positionY = [];
        //----------------------------Remove cursor and not possible to click---------------------------------
        memoryGrid.classList.add ("cursorInvisible");
        //------------------------------ Cards are appearing back face (start of the flipping to show the image for a while ----------------------)
        for (let i=0; i<=23; i=i+2){
            setTimeout(function(){
                cardContainer[i].style.animation = "cardFlip 1s forwards";
                cardContainer[i+1].style.animation = "cardFlip 1s forwards";
                setTimeout (function(){ 
                    cardContainer[i].style.backgroundImage = `url(${imageArray[j]})`;
                    cardContainer[i+1].style.backgroundImage = `url(${imageArray[j]})`;
                    j=j+1;
                },300);    
                //------------------------------- Start of the backflip to show the back face of the card again -----------------
                setTimeout (function(){
                    cardContainer[i].style.animation = "cardFlipBack 1s forwards";
                    cardContainer[i+1].style.animation = "cardFlipBack 1s forwards";
                    setTimeout(function(){
                        cardContainer[i].style.removeProperty ("background-Image");
                        cardContainer[i+1].style.removeProperty ("background-Image");
                    },300)
                },2000);    
            },500);
        }
        //----------------------------------- Start of the move of the cards -----------------------------------
        // PositionX and PositionY are the initial position 
        // deltaX and deltaY are the number(random number) of pixels to move at every frame
        setTimeout(function(){
            for (let i=0; i<=23; i++){
                positionX[i] = 0;
                positionY[i] = 0;  
                deltaX[i] = Math.random()*(7-4)+4;
                deltaY[i] = Math.random()*(7-4)+4;
                cardContainer[i].style.zIndex = Math.floor(Math.random()*23);
            }
            
            for (let i=0; i<=23; i++){
                let initialMove = setInterval(function(){
                    setTimeout(function(){
                        clearInterval(initialMove);
                    },3000)
                    //------------------------- 2 if ==> to keep the cards within the memoryGrid -----------------------
                    console.log(i)
                    if (cardContainer[i].offsetLeft<0 || cardContainer[i].offsetLeft>memoryGridWidth-cardWidth){
                        deltaX[i] = -deltaX[i];
                    }
                    positionX[i] = positionX[i] + deltaX[i];
                    if (cardContainer[i].offsetTop<0 || cardContainer[i].offsetTop>memoryGridHeight-cardHeight){
                        deltaY[i] = -deltaY[i]
                    }
                    positionY[i] = positionY[i] + deltaY[i];
                    cardContainer[i].style.left = `${positionX[i]}px`;
                    cardContainer[i].style.top = `${positionY[i]}px`;
                },5)
            }
        },4000);
        //------------------------------ Set the cards back to their initial position ---------------------------
        setTimeout(function(){
            for (let i=0; i<=23; i++){
                cardContainer[i].style.left = "0px";
                cardContainer[i].style.top = "0px";
            }
            
},7050);
        //-----------------------Cursor visible and possible to click----------------------------------
        setTimeout(()=>{
            memoryGrid.classList.remove ("cursorInvisible");
        },7000)
        // =========================== Make flash Player A =========================================
        let playerA = document.getElementById("playerA");
        playerAFlash = setInterval(function(){playerA.classList.toggle ("hide")}, 500);
        return ()=>clearInterval(playerAFlash);
        
    },[]);

    
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


