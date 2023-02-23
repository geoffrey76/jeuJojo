import React from 'react';
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
    
    
    let imageArray = [baleine, baloon, birds, boats, chinese_deco, dolfins, fishes, flowers, palm_trees, red_flowers, sunflowers, watermelon];
    let cardNumbers = [];
    let imageToFind =[];
    let imagesToCompare=[];
    let indicesToCompare=[];
    let attemps = 0;
    let secondArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    
    
    
    let goodCards = 0;
    let s="";
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
    // for (let i=0; i<=23; i++){
        // cardContainer[i].addEventListener ("click", 
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
                    attemps++;
                    if (attemps >1){
                        attempsNumberContainer.children[0].innerHTML = "Nombre d'essais:";
                    }
                    attempsNumber.innerHTML = attemps;
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
                        if (attemps === 1){s=""
                        }else {s="s"}
                        memoryGrid.innerHTML  = `<p>Vous avez fait ${attemps} essai${s}</p>`+
                        '<button id="restartButton" onClick="window.location.reload()">RECOMMENCER</button>';
                    }
                }else{
                    // -----------------------------If the 2 cards are diffetrents ---------------------
                    if (imagesToCompare.length >= 2){
                        memoryGrid.classList.add ("cursorInvisible");
                        attemps++;
                        if (attemps >1){
                            attempsNumberContainer.children[0].innerHTML = "Nombre d'essais:";
                        }
                        if (attemps>99){attempsNumber.style.fontSize = "2em"};
                        attempsNumber.innerHTML = attemps;
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
        // );
    // }
    return(
        <div id="mainPart">
            <Header />
            <div id="centerPart">
                <aside id="attempsNumberContainer">
                    <p>Nombre d'essai:</p>
                    <p id="attempsNumber">0</p>
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
            </div>
            <Footer />      
        </div>
    )
}
            
export default Memory1Player;






