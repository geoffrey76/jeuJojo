// import React, { useEffect, useState, useRef} from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import '../css/puissance4.css';
// // import { DragDropContainer, DropTarget } from 'react-drag-drop-container';
// import { createRoutesFromChildren } from 'react-router-dom';


// const Puissance4 = ()=>{
    
//     let index = 0;
//     let redToken = undefined;
//     let yellowToken = undefined;
//     let positionToMove = 0;
//     let column = 0;
//     const redTokenFlash = useRef(0);
//     const yellowTokenFlash = useRef(0);
    
//     const [gridToken, setGridToken] = useState([]);
//     const tokenNumber = useRef(0);
//     const playingToken = useRef("red");
//     const winner = useRef("");
//     let chosenColumnArray =[0, 1, 2, 3, 4, 5, 6];
   
//     useEffect(()=>{
//         window.scrollTo(0, 0);
//         let tokens = [] ;
//         for (let row=0; row<6; row++){
//             for (let column = 0; column<7; column++){
//                 tokens.push({"id":index,
//                             "coordinates": {"row":row, "column":column},
//                             "color":"white"});
//                 index++
//             }
//         };
//         setGridToken(tokens);
//     },[])
   
//     //================================== Drag token ===================================================
//     function drag(ev) {
//         ev.dataTransfer.setData("text", ev.target.id);
//         console.log(ev.dataTransfer)
//     }
//     function allowDrop(ev) {
//         ev.preventDefault();
//     }
//     //==================================== Drop token ================================================
//     function drop(ev) {
//         tokenNumber.current++
//         ev.preventDefault();
//         var data = ev.dataTransfer.getData("text");
//         console.log(gridToken)
//         ev.target.appendChild(document.getElementById(data));
        
//         for(let i=0; i<7; i++){
//             //-------------------------- Select the column to drop the token ------------------------
//             if(document.getElementsByClassName("chosenColumnToken")[i].children.length == 1){
//                 column = i;
//             }
//         }
//         let element = 0;
//         let tokens = gridToken;
//         redToken = document.getElementById("redToken");
//         yellowToken = document.getElementById("yellowToken");
//         //--------------------------------- Select the element where the token must drop --------------- 
//         if (tokens[column+35].color === "white"){
//             tokens[column+35].color = playingToken.current;
//             element = column+35;
//         }else if(tokens[column+28].color === "white"){
//             tokens[column+28].color = playingToken.current;
//             element = column+28;
//         }else if(tokens[column+21].color === "white"){
//             tokens[column+21].color = playingToken.current;
//             element = column+21;
//         }else if(tokens[column+14].color === "white"){
//             tokens[column+14].color = playingToken.current;
//             element = column+14;
//         }else if(tokens[column+7].color === "white"){
//             tokens[column+7].color = playingToken.current;
//             element = column+7;
//         }else if(tokens[column].color === "white"){
//             tokens[column].color = playingToken.current;
//             element = column;
//         }else {
//             tokenNumber.current--;
//             console.log("Impossible de jouer dans cette colonne")
//         }
//         //--------------------------------------- Condition to see if 4 element are aligned and one color win ------------------------------
//         if (tokens[element+7] !== undefined && tokens[element+14] !== undefined && tokens[element+21] !== undefined){
//             if (tokens[element+7].color === playingToken.current && tokens[element+14].color === playingToken.current && tokens[element+21].color === playingToken.current){
//                 column.log("1");
//                 winner.current = playingToken.current;
//             }
//         }
//         if (winner.current==="" && tokens[element-1] !== undefined && tokens[element-2] !== undefined && tokens[element-3] !== undefined){
//             if (tokens[element].coordinates.column !== 0 & tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 2){
//                 if (tokens[element-1].color === playingToken.current && tokens[element-2].color === playingToken.current && tokens[element-3].color === playingToken.current){
//                     console.log(tokens[element].coordinates.column)
//                     console.log("2");
//                     winner.current = playingToken.current;
//                 }
//             }
           
//         }
//         if (winner.current==="" && tokens[element+1] !== undefined && tokens[element+2] !== undefined && tokens[element+3] !== undefined){
//             if(tokens[element].coordinates.column !== 4 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
//                 if (tokens[element+1].color === playingToken.current && tokens[element+2].color === playingToken.current && tokens[element+3].color === playingToken.current){
//                     console.log("3");
//                     console.log(tokens[element].coordinates.column)
//                     winner.current = playingToken.current;
//                 }
//             }
            
//         }
//         if (winner.current==="" && tokens[element+1] !== undefined && tokens[element-1] !== undefined && tokens[element-2] !== undefined){
//             if(tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 6){
//                 if (tokens[element+1].color === playingToken.current && tokens[element-1].color === playingToken.current && tokens[element-2].color === playingToken.current){
//                     console.log(tokens[element].coordinates.column)
//                     console.log("4");
//                     winner.current = playingToken.current;
//                 }
//             }
            
//         }
//         if (winner.current==="" && tokens[element+1] !== undefined && tokens[element+2] !== undefined && tokens[element-1] !== undefined){
//             if(tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
//                 if (tokens[element+1].color === playingToken.current && tokens[element+2].color === playingToken.current && tokens[element-1].color === playingToken.current){
//                     console.log(tokens[element].coordinates.column)
//                     console.log("5");
//                     winner.current = playingToken.current;
//                 }
//             }
            
//         }
//         if (winner.current==="" && tokens[element+6] !== undefined && tokens[element+12] !== undefined && tokens[element+18] !== undefined){
//             if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 2){
//                 if (tokens[element+6].color === playingToken.current && tokens[element+12].color === playingToken.current && tokens[element+18].color === playingToken.current){
//                     console.log("6");
//                     console.log(tokens[element].coordinates.column)
//                     winner.current = playingToken.current;
//                 }
//             }
            
//         }
//         if (winner.current==="" && tokens[element-6] !== undefined && tokens[element-12] !== undefined && tokens[element-18] !== undefined){
//             if (tokens[element].coordinates.column !== 4 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
//                 if (tokens[element-6].color === playingToken.current && tokens[element-12].color === playingToken.current && tokens[element-18].color === playingToken.current){
//                     console.log("7");
//                     console.log(tokens[element].coordinates.column)
//                     winner.current = playingToken.current;
//                 }
//             }
            
//         }
//         if (winner.current==="" && tokens[element+6] !== undefined && tokens[element-6] !== undefined && tokens[element-12] !== undefined){
//             if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
//                 if (tokens[element+6].color === playingToken.current && tokens[element-6].color === playingToken.current && tokens[element-12].color === playingToken.current){
//                     console.log("8");
//                     console.log(tokens[element].coordinates.column)
//                     winner.current = playingToken.current;
//                 }
//             }
            
//         }
//         if (winner.current==="" && tokens[element+6] !== undefined && tokens[element+12] !== undefined && tokens[element-6] !== undefined){
//             if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 6){
//                 if (tokens[element+6].color === playingToken.current && tokens[element+12].color === playingToken.current && tokens[element-6].color === playingToken.current){
//                     console.log("9");
//                     console.log(tokens[element].coordinates.column)
//                     winner.current = playingToken.current;
//                 }
//             }
//         }
//         if (winner.current==="" && tokens[element+8] !== undefined && tokens[element+16] !== undefined && tokens[element+24] !== undefined){
//             if (tokens[element].coordinates.column !== 4 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
//                 if (tokens[element+8].color === playingToken.current && tokens[element+16].color === playingToken.current && tokens[element+24].color === playingToken.current){
//                     console.log("10");
//                     console.log(tokens[element].coordinates.column)
//                     winner.current = playingToken.current;
//                 }
//             }  
//         }
//         if (winner.current==="" && tokens[element-8] !== undefined && tokens[element-16] !== undefined && tokens[element-24] !== undefined){
//             if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 2){
//                 if (tokens[element-8].color === playingToken.current && tokens[element-16].color === playingToken.current && tokens[element-24].color === playingToken.current){
//                     console.log("11");
//                     console.log(tokens[element].coordinates.column)
//                     winner.current = playingToken.current;
//                 }
//             }
            
//         }
//         if (winner.current==="" && tokens[element-8] !== undefined && tokens[element+8] !== undefined && tokens[element+16] !== undefined){
//             if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
//                 if (tokens[element-8].color === playingToken.current && tokens[element+8].color === playingToken.current && tokens[element+16].color === playingToken.current){
//                     console.log("12");
//                     console.log(tokens[element].coordinates.column)
//                     winner.current = playingToken.current;
//                 }
//             }
            
//         }if (winner.current==="" && tokens[element-8] !== undefined && tokens[element-16] !== undefined && tokens[element+8] !== undefined){
//             if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 6){
//                 if (tokens[element-8].color === playingToken.current && tokens[element-16].color === playingToken.current && tokens[element+8].color === playingToken.current){
//                     console.log("13");
//                     console.log(tokens[element].coordinates.column)
//                     winner.current = playingToken.current;
//                 }
//             } 
            
//         } 
//         //----------------------------------- Change color ----------------------------
//         if (playingToken.current === "red"){
//             playingToken.current = "yellow";
//         }else{
//             playingToken.current = "red";
//         }
//         //------------------------------------ Make the token descent (move) in the column ------------
//         let movingToken = document.getElementById(data)
//         movingToken.style.position = "relative";
//         positionToMove = document.getElementsByClassName("tokens")[element].offsetTop-document.getElementsByClassName("chosenColumnToken")[0].offsetTop;
//         let actualPosition = 0;
//         let descendingToken  = setInterval(function(){
//             actualPosition = actualPosition+positionToMove/100;
//             movingToken.style.top = `${actualPosition}px`;
//             if (actualPosition >= positionToMove){
//                 clearInterval(descendingToken);//----------- clear interval if token in position ---------
//                 movingToken.remove();//-------------------- Remove the token when in position ------------
//                 setGridToken(tokens);
//                 let old = [...gridToken];
//                 setGridToken([...old])
//                 //------------------------------------- Display winner ------------------------
//                 if (winner.current !== ""){
//                     if (winner.current === "red"){winner.current = "rouges".toUpperCase()}else{winner.current = "jaunes".toUpperCase()};
//                     document.getElementById("title").style.display = "none";
//                     document.getElementById("chosenColumn").style.display = "none";
//                     document.getElementById("tokenContainer").style.display = "none";
//                     document.getElementById("winner").style.display = "block";
//                     document.getElementsByClassName("restart")[0].style.visibility = "visible";
//                 }
//                 console.log(tokenNumber);
//                 //------------------------------------ Display no winner ------------------------
//                 if (winner.current == "" && tokenNumber.current === 42){
//                     document.getElementById("title").style.display = "none";
//                     document.getElementById("chosenColumn").style.display = "none";
//                     document.getElementById("tokenContainer").style.display = "none";
//                     document.getElementById("noWinner").style.display = "block";
//                     document.getElementsByClassName("restart")[0].style.visibility = "visible";
//                 }
//             }  
//         },5)
//         //----------------------- Put the dragable token in the initial position ----------------------
//         document.getElementById('tokenContainer').appendChild(document.createElement("div"));
//         document.getElementById('tokenContainer').lastChild.id = movingToken.id;
//         document.getElementById('tokenContainer').lastChild.draggable = "true";
//         document.getElementById('tokenContainer').lastChild.ondragstart= function(event){drag(event)};
//         document.getElementById('tokenContainer').firstChild.style.display = "block";
//         document.getElementById('tokenContainer').lastChild.style.display = "none";
        
//     }
        
//     //========================================= Refresh page function ================================
//     function refreshPage(){
//         window.location.reload() 
//         window.scrollTo(0, 0);
//     }

//     return( 
//         <div id="mainPart">
//             <Header />
//             <div id='mainPuissance4'>
//                 <div id='titleContainer'>
//                     <h1 id='title'>FAITES GLISSER LE JETON DANS LA COLONNE POUR PLACER VOTRE JETON</h1>
//                     <div id='tokenContainer'>
//                         <div draggable="true" onDragStart={event=>drag(event)} id='redToken'></div>
//                         <div draggable="true" onDragStart={event=>drag(event)} id='yellowToken'></div>
//                     </div>
//                 </div>
                
//                 <div id='chosenColumn'>
                    
//                     {chosenColumnArray.map(element=> <div key={element+100} onDrop={event=>drop(event)} onDragOver={event=>allowDrop(event)} className='chosenColumnToken'></div>)}
//                 </div>
//                 <div id='puissance4Grid'>
//                     {gridToken.map(element=> <div key={element.id} className='tokens' style={{backgroundColor: element.color}}></div>)}
//                 </div>
//                 <div id='winner'>VICTOIRE DES {winner.current} </div>
//                 <div id='noWinner'>PAS DE VAINQUEUR </div>
//                 <button type="button" className="restart" onClick={refreshPage}>Recommencer</button>
//             </div>
//             <Footer />      
//         </div>
//     )
// }
// export default Puissance4;


//*********************************************************************************************************** */


import React, { useEffect, useState, useRef, TouchEvent } from 'react';
import useSound from 'use-sound';
import tadaSound from '../sounds/tada-fanfare-a-6313.mp3'
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/puissance4.css';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';

const Puissance4 = ()=>{
    
    let index = 0;
    let redToken = undefined;
    let yellowToken = undefined;
    let positionToMove = 0;
    let column = undefined;
    const redTokenFlash = useRef(0);
    const yellowTokenFlash = useRef(0);
   
    const [gridToken, setGridToken] = useState([]);
    const tokenNumber = useRef(0);
    const playingToken = useRef("red");
    const winner = useRef("");
    const [winningSound] = useSound(tadaSound);
    const tokenClass = useRef("redToken")
    let playAgain = false;
    let chosenColumnArray =[0, 1, 2, 3, 4, 5, 6];

   
    useEffect(()=>{
        window.scrollTo(0, 0);
        let tokens = [] ;
        for (let row=0; row<6; row++){
            for (let column = 0; column<7; column++){
                tokens.push({"id":index,
                            "coordinates": {"row":row, "column":column},
                            "color":"white"});
                index++
            }
        };
        setGridToken(tokens);
    },[])
   
    //==================================== Drop token ================================================
    function drop(e){
        
        tokenNumber.current++
        console.log(e.target)
        e.target.appendChild(document.createElement("div"));
        e.target.firstChild.id = "movingToken";
        let movingToken = document.getElementById('movingToken');
        movingToken.style.backgroundColor = playingToken.current;
        console.log(document.getElementsByClassName("chosenColumnToken"))
        // for(let i=0; i<7; i++){
            //-------------------------- Select the column to drop the token ------------------------
            // if(document.getElementsByClassName("chosenColumnToken")[i].children.length == 1){
                column = Number(e.target.id);
                console.log(typeof(column))
            // }
        // }
        console.log(column)
        let element = 0;
        let tokens = gridToken;
        redToken = document.getElementById("redToken");
        yellowToken = document.getElementById("yellowToken");
        //--------------------------------- Select the element where the token must drop --------------- 
        if (tokens[column+35].color === "white"){
            tokens[column+35].color = playingToken.current;
            element = column+35;
        }else if(tokens[column+28].color === "white"){
            tokens[column+28].color = playingToken.current;
            element = column+28;
        }else if(tokens[column+21].color === "white"){
            tokens[column+21].color = playingToken.current;
            element = column+21;
        }else if(tokens[column+14].color === "white"){
            tokens[column+14].color = playingToken.current;
            element = column+14;
        }else if(tokens[column+7].color === "white"){
            tokens[column+7].color = playingToken.current;
            element = column+7;
        }else if(tokens[column].color === "white"){
            tokens[column].color = playingToken.current;
            element = column;
        }else {
            tokenNumber.current--;
            alert("Impossible de jouer dans cette colonne")
            movingToken.style.visibility = "hidden";
            playAgain = true;
        }
        //--------------------------------------- Condition to see if 4 element are aligned and one color win ------------------------------
        if (tokens[element+7] !== undefined && tokens[element+14] !== undefined && tokens[element+21] !== undefined){
            if (tokens[element+7].color === playingToken.current && tokens[element+14].color === playingToken.current && tokens[element+21].color === playingToken.current){
                console.log("1");
                winner.current = playingToken.current;
            }
        }
        if (winner.current==="" && tokens[element-1] !== undefined && tokens[element-2] !== undefined && tokens[element-3] !== undefined){
            if (tokens[element].coordinates.column !== 0 & tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 2){
                if (tokens[element-1].color === playingToken.current && tokens[element-2].color === playingToken.current && tokens[element-3].color === playingToken.current){
                    console.log(tokens[element].coordinates.column)
                    console.log("2");
                    winner.current = playingToken.current;
                }
            }
           
        }
        if (winner.current==="" && tokens[element+1] !== undefined && tokens[element+2] !== undefined && tokens[element+3] !== undefined){
            if(tokens[element].coordinates.column !== 4 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
                if (tokens[element+1].color === playingToken.current && tokens[element+2].color === playingToken.current && tokens[element+3].color === playingToken.current){
                    console.log("3");
                    console.log(tokens[element].coordinates.column)
                    winner.current = playingToken.current;
                }
            }
            
        }
        if (winner.current==="" && tokens[element+1] !== undefined && tokens[element-1] !== undefined && tokens[element-2] !== undefined){
            if(tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 6){
                if (tokens[element+1].color === playingToken.current && tokens[element-1].color === playingToken.current && tokens[element-2].color === playingToken.current){
                    console.log(tokens[element].coordinates.column)
                    console.log("4");
                    winner.current = playingToken.current;
                }
            }
            
        }
        if (winner.current==="" && tokens[element+1] !== undefined && tokens[element+2] !== undefined && tokens[element-1] !== undefined){
            if(tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
                if (tokens[element+1].color === playingToken.current && tokens[element+2].color === playingToken.current && tokens[element-1].color === playingToken.current){
                    console.log(tokens[element].coordinates.column)
                    console.log("5");
                    winner.current = playingToken.current;
                }
            }
            
        }
        if (winner.current==="" && tokens[element+6] !== undefined && tokens[element+12] !== undefined && tokens[element+18] !== undefined){
            if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 2){
                if (tokens[element+6].color === playingToken.current && tokens[element+12].color === playingToken.current && tokens[element+18].color === playingToken.current){
                    console.log("6");
                    console.log(tokens[element].coordinates.column)
                    winner.current = playingToken.current;
                }
            }
            
        }
        if (winner.current==="" && tokens[element-6] !== undefined && tokens[element-12] !== undefined && tokens[element-18] !== undefined){
            if (tokens[element].coordinates.column !== 4 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
                if (tokens[element-6].color === playingToken.current && tokens[element-12].color === playingToken.current && tokens[element-18].color === playingToken.current){
                    console.log("7");
                    console.log(tokens[element].coordinates.column)
                    winner.current = playingToken.current;
                }
            }
            
        }
        if (winner.current==="" && tokens[element+6] !== undefined && tokens[element-6] !== undefined && tokens[element-12] !== undefined){
            if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
                if (tokens[element+6].color === playingToken.current && tokens[element-6].color === playingToken.current && tokens[element-12].color === playingToken.current){
                    console.log("8");
                    console.log(tokens[element].coordinates.column)
                    winner.current = playingToken.current;
                }
            }
            
        }
        if (winner.current==="" && tokens[element+6] !== undefined && tokens[element+12] !== undefined && tokens[element-6] !== undefined){
            if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 6){
                if (tokens[element+6].color === playingToken.current && tokens[element+12].color === playingToken.current && tokens[element-6].color === playingToken.current){
                    console.log("9");
                    console.log(tokens[element].coordinates.column)
                    winner.current = playingToken.current;
                }
            }
        }
        if (winner.current==="" && tokens[element+8] !== undefined && tokens[element+16] !== undefined && tokens[element+24] !== undefined){
            if (tokens[element].coordinates.column !== 4 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
                if (tokens[element+8].color === playingToken.current && tokens[element+16].color === playingToken.current && tokens[element+24].color === playingToken.current){
                    console.log("10");
                    console.log(tokens[element].coordinates.column)
                    winner.current = playingToken.current;
                }
            }  
        }
        if (winner.current==="" && tokens[element-8] !== undefined && tokens[element-16] !== undefined && tokens[element-24] !== undefined){
            if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 2){
                if (tokens[element-8].color === playingToken.current && tokens[element-16].color === playingToken.current && tokens[element-24].color === playingToken.current){
                    console.log("11");
                    console.log(tokens[element].coordinates.column)
                    winner.current = playingToken.current;
                }
            }
            
        }
        if (winner.current==="" && tokens[element-8] !== undefined && tokens[element+8] !== undefined && tokens[element+16] !== undefined){
            if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 5 && tokens[element].coordinates.column !== 6){
                if (tokens[element-8].color === playingToken.current && tokens[element+8].color === playingToken.current && tokens[element+16].color === playingToken.current){
                    console.log("12");
                    console.log(tokens[element].coordinates.column)
                    winner.current = playingToken.current;
                }
            }
            
        }if (winner.current==="" && tokens[element-8] !== undefined && tokens[element-16] !== undefined && tokens[element+8] !== undefined){
            if (tokens[element].coordinates.column !== 0 && tokens[element].coordinates.column !== 1 && tokens[element].coordinates.column !== 6){
                if (tokens[element-8].color === playingToken.current && tokens[element-16].color === playingToken.current && tokens[element+8].color === playingToken.current){
                    console.log("13");
                    console.log(tokens[element].coordinates.column)
                    winner.current = playingToken.current;
                }
            } 
            
        } 
        //------------------------------------ Make the token descent (move) in the column ------------
        
        movingToken.style.position = "relative";
        positionToMove = document.getElementsByClassName("tokens")[element].offsetTop-document.getElementsByClassName("chosenColumnToken")[0].offsetTop;
        let actualPosition = 0;
        let descendingToken  = setInterval(function(){
            actualPosition = actualPosition+positionToMove/100;
            movingToken.style.top = `${actualPosition}px`;
            if (actualPosition >= positionToMove){
                clearInterval(descendingToken);//----------- clear interval if token in position ---------
                movingToken.remove();//-------------------- Remove the token when in position ------------
                setGridToken(tokens);
                let old = [...gridToken];
                setGridToken([...old])
                //------------------------------------- Display winner ------------------------
                if (winner.current !== ""){
                    winningSound();
                    if (winner.current === "red"){winner.current = "rouges".toUpperCase()}else{winner.current = "jaunes".toUpperCase()};
                    document.getElementById("titleContainer").style.display = "none";
                    document.getElementById("chosenColumn").style.display = "none";
                    document.getElementById("winner").style.display = "block";
                    document.getElementsByClassName("restart")[0].style.visibility = "visible";
                }
                console.log(tokenNumber);
                //------------------------------------ Display no winner ------------------------
                if (winner.current == "" && tokenNumber.current === 42){
                    document.getElementById("titleContainer").style.display = "none";
                    document.getElementById("chosenColumn").style.display = "none";
                    document.getElementById("noWinner").style.display = "block";
                    document.getElementsByClassName("restart")[0].style.visibility = "visible";
                }
            }  
        },5)
        //----------------------------------- Change color of token ----------------------------
        if (playAgain !== true){
            if (playingToken.current === "red"){
                playingToken.current = "yellow";
            }else{
                playingToken.current = "red";
            }
        }
        tokenClass.current = `${playingToken.current}Token`;
    }
        
    //========================================= Refresh page function ================================
    function refreshPage(){
        window.location.reload() 
        window.scrollTo(0, 0);
    }
    
    return( 
        <div id="mainPart">
            <Header />
            <div id='mainPuissance4'>
                <div id='titleContainer'>
                    <h1 id='title'>FAITES GLISSER LE JETON DANS LA COLONNE POUR PLACER VOTRE JETON</h1>
                    <div id='tokenContainer'>
                        <DragDropContainer targetKey="foo" >
                            <div  id='token' className={tokenClass.current}></div>
                        </DragDropContainer>
                    </div>
                </div>
                <div id='chosenColumn'>
                    {chosenColumnArray.map(element=>
                        <DropTarget targetKey="foo" key={element+100}
                            onHit={drop}>
                            <div  id={element} className='chosenColumnToken'></div>   
                        </DropTarget>
                    )}
                </div>
                <div id='puissance4Grid'>
                    {gridToken.map(element=> <div key={element.id} className='tokens' style={{backgroundColor: element.color}}></div>)}
                </div>
                <div id='winner'>VICTOIRE DES {winner.current} </div>
                <div id='noWinner'>PAS DE VAINQUEUR </div>
                <button type="button" className="restart" onClick={refreshPage}>Recommencer</button>
            </div>
            <Footer />      
        </div>
    )
}
export default Puissance4;




//********************************************************************************************************* */
