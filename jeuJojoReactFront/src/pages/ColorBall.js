import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/colorBall.css';


const ColorBall = ()=>{
   
   
    let colors = ["red", "green", "yellow", "blue", "black", "orange"];
    let ballToFind = [];
    let chosenColor = "";
    let ballNumber = 0;
    let ball = document.getElementsByClassName("ball");
    let proposedBall = [];
    let ballAlreadyFound  = Boolean;
    let correctAnswer = 0;
    let correctColor = 0;
    let answer = document.getElementsByClassName ("answer");
    let flashingBall = 0;
    // ================================== Make flash the first empty ball + stop when leaving the page ==================================
    useEffect(()=>{
        window.scrollTo(0, 0)
        flashingBall = setInterval (function(){ball[ballNumber].classList.toggle("invisible")}, 500);
        return ()=>clearInterval(flashingBall)
    },[])
    
    
    // ================================== Random choice of the color balls =================================
    for (let i=0; i<4; i++){
        ballToFind[i] = colors[Math.floor(Math.random()*6)];
    }
    // ================================== Funtion to stop flashing the empty ball and make the next one flashing
    // ================================== + analysing the result of the balls ===============================
    function stopflash(){
        if (ballNumber<40){
            proposedBall[ballNumber] = chosenColor;
            ball[ballNumber].classList = "ball";
            ball[ballNumber].style.backgroundColor = chosenColor;
            ballNumber++;
            //------------------ Analyse the balls 4 balls by 4 balls --------------------
            if (ballNumber/4 === Math.floor(ballNumber/4)){
                for (let i =0; i<4; i++){
                    ballAlreadyFound[i] = false;
                }
                correctAnswer = 0;
                correctColor = 0;
                for (let i=0; i<4; i++){
                    // ------------------- Ball of good color and good position ----------------
                    if (ballToFind[i] === proposedBall[i+ballNumber-4]){
                        correctAnswer++;
                        ballAlreadyFound[i] = true;
                        proposedBall[i+ballNumber-4] = "";
                    }       
                }   
                // ---------------------- Ball of good color but not at good position ----------
                for (let i=0; i<4; i++){
                    if (ballAlreadyFound[i] === false){
                        for(let j=ballNumber-4; j<ballNumber; j++){
                            if (ballToFind[i] === proposedBall[j]){
                                proposedBall[j] = "";
                                correctColor++;
                                break;
                            }
                        }
                    }
                    
                }
                // ------------------------ Show the numbers of good color at good position -------- 
                for (let i=0; i<correctAnswer; i++){
                    let newText = document.createTextNode ("I");
                    let newDiv = document.createElement ("div");
                    newDiv.style.color = "green";
                    newDiv.appendChild (newText);
                    answer[(ballNumber-4)/4].appendChild (newDiv);
                }
                // ----------------------Show the numbers of good color not at the good position ------
                for (let i=0; i<correctColor; i++){
                    let newText = document.createTextNode ("I");
                    let newDiv = document.createElement ("div");
                    newDiv.style.color = "#000000";
                    newDiv.appendChild (newText);
                    answer[(ballNumber-4)/4].appendChild (newDiv);
                } 
                // -------------------- Result when won ------------------
                if (correctAnswer === 4){
                    let gagne = document.getElementsByClassName("possibleColors");
                    gagne[0].classList.toggle ("gagne");
                    gagne[0].innerHTML="<p id=gagne>BRAVO <br>VOUS AVEZ GAGNE</p>"+
                        '<button id="restartButtonColorBall" onClick="window.location.reload()">RECOMMENCER</button>';
                    document.getElementById("restart").remove();
                    clearInterval(flashingBall);
                }
                // --------------------- Result when lost ------------------
                if (ballNumber === 40){
                    clearInterval(flashingBall);
                    if (correctAnswer < 4){
                        document.getElementsByClassName("restart")[0].style.visibility = "visible";
                        document.getElementById ("resultComment").style.visibility= "visible";
                        document.getElementById ("resultComment2").style.visibility= "visible";
                        let result = document.getElementsByClassName ("result");
                        for (let i=0; i<4; i++){
                            result[i].style.visibility = "visible";
                            result[i].style.backgroundColor = ballToFind[i];
                        }
                    
                    }
                }
            }
        }
        
    }
    // ==================================================== End of Main Function ========================================
    // ==================================================== Button BACK ======================================================
    
    function back(){
        if (ballNumber>0 && ballNumber/4 !== Math.floor(ballNumber/4)){
            ball[ballNumber].classList = "ball";
            ball[ballNumber].style.backgroundColor = "white";
            ballNumber--;
            ball[ballNumber].classList = "ball";
            ball[ballNumber].style.backgroundColor = "white";
        }
    }

    //============================================================= Refresh page function ================================================
    function refreshPage(){window.location.reload()}

    return(
        <div id="mainPart">
            <Header />
            <main id="mainColorBall">
                <div id="leftPart" className="side"></div>
                <div id="centrePart">
                    <section className="possibleColors">
                        <h1>Cliquez sur la couleur de votre choix</h1>
                        <p id="goodPosition">I = Une des boules est dans la position correcte</p>
                        <p id="goodColor">I = Une des boules à la bonne couleur, mais sa position n'est pas correcte</p>
                        <div id="backAndBalls">
                            <button id="backButton" onClick={back}>BACK</button>
                            <div  className="possibleBalls" id="redBall" onClick={function(){chosenColor = "red"; stopflash()}}></div>  
                            <div  className="possibleBalls" id="greenBall" onClick={function(){chosenColor = "green"; stopflash()}}></div> 
                            <div  className="possibleBalls" id="yellowBall" onClick={function(){chosenColor = "yellow"; stopflash()}}></div>  
                            <div  className="possibleBalls" id="blueBall" onClick={function(){chosenColor = "blue"; stopflash()}}></div> 
                            <div  className="possibleBalls" id="blackBall" onClick={function(){chosenColor = "black"; stopflash()}}></div> 
                            <div  className="possibleBalls" id="orangeBall" onClick={function(){chosenColor = "orange"; stopflash()}}></div> 
                        </div>
                        
                    </section>
                    
                    <section id="ballGrid">
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="answer"></div>
            
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="answer"></div>
            
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="ball"></div>  
                        <div className="ball"></div>
                        <div className="answer"></div>
                        
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="answer"></div>    
            
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="ball"></div>  
                        <div className="ball"></div>
                        <div className="answer"></div>     
            
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="ball"></div>  
                        <div className="ball"></div>  
                        <div className="answer"></div>   
            
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="ball"></div>  
                        <div className="ball"></div>  
                        <div className="answer"></div>   
            
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="answer"></div>    
            
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="answer"></div> 
                        
                        <div className="ball"></div>  
                        <div className="ball"></div> 
                        <div className="ball"></div>  
                        <div className="ball"></div>  
                        <div className="answer"></div>   
                    </section>
                    <button className="restart" id="restart" onClick={refreshPage}>Recommencer</button>
                    <p id="resultComment">PERDU</p>
                    <p id="resultComment2">la combinaison correcte était</p>
                    <div id="resultGrid">
                        <div className="result"></div>  
                        <div className="result"></div> 
                        <div className="result"></div>  
                        <div className="result"></div>  
                    </div>
                </div>   
                <div id="rightPart" className="side"></div>        
            </main>
            <Footer />      
        </div>
    )
}
            
export default ColorBall;
