import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const JeuNombre = ()=>{
    
    // ========== Computer choose a random number ==========
    const [nombreOrdi, setNombreOrdi] = useState(Math.floor(Math.random()*100)+1);
    console.log(nombreOrdi);
    
    // ========== initialisation compteur ==========
    const [compteur, setCompteur] = useState(1);
    console.log(compteur);
    // ========== element main à changer quand gagné ou perdu ==========
    var bravo = document.getElementById("mainNombre");
    var notANumber = false;
    // ========== Content of field propNumber ==========
    var [nombreUtilisateur, setNombreUtilisateur] = useState(0);
    // ========== Push Enter to validate ==========
    function pressEnter(touche){
        if (touche.keyCode===13) {
            document.getElementById ("submitNumber").click();
        }
    }
    // ========== funtion to reset label where we put the proposed number ==========
    function resetSubmitNumber(){
    
        notANumber = false;
        document.getElementById ("propNumber").style.borderColor = "grey";
        document.getElementById("notANumber").style.visibility = "hidden";
    }
    // ========== function that compare the proposed number with the number to find ==========
    function proposeNumber(){
        //================= change nombreUtilisateur from string to number ==========================
       nombreUtilisateur =  Number(nombreUtilisateur);
        //========== proposer un nombre ==========
        // ========== test to see if it is a number between 1 and 100 ==========
        if (isNaN(nombreUtilisateur) || nombreUtilisateur < 1 || nombreUtilisateur > 100 || nombreUtilisateur !== Math.ceil(nombreUtilisateur) ){
            nombreUtilisateur = undefined;
            document.getElementById ("propNumber").blur();
            notANumber = true
            document.getElementById("propNumber").style.borderColor = "red";
            document.getElementById("notANumber").style.visibility = "visible";
            document.getElementById("showCompare").innerHTML= "";
        }
        // =================== si le nombre d'essai est inférieur à 10 =============
        if(compteur<10){
            // ========== comparer les deux nombres ==========
            if (nombreUtilisateur===nombreOrdi) {
                //affichage si la réponse est correcte
                    bravo.style.alignItems = "center";
                    bravo.innerHTML = "<p>BRAVO TU AS GAGNE<br>le nombre était bien <br>"+nombreOrdi+"<br>Tu as fait "+compteur+" essai(s)</p>";
                    document.querySelector (".restart").style.visibility = "visible";//restart button
            }
            if (nombreOrdi>nombreUtilisateur && !notANumber){
                // ========== affichage si plus grand ==========
                setCompteur((compteur)=>compteur+1);
                document.getElementById("showCompare").innerHTML= "Le nombre est plus grand";
                document.getElementById("propNumber").focus();
            } 
            if (nombreOrdi<nombreUtilisateur && !notANumber){
                // ========== affichage si plus petit ==========
                setCompteur((compteur)=>compteur+1);
                document.getElementById("showCompare").innerHTML= "Le nombre est plus petit";
                document.getElementById("propNumber").focus();
            }
    document.getElementById("propNumber").value=undefined;
        }else {  //affichage perdu (nombre d'essai maximum 10)
            bravo.style.alignItems = "center";
            bravo.innerHTML = "<p>PERDU<br>le nombre était "+nombreOrdi+"</p>";
            document.querySelector (".restart").style.visibility = "visible"; //restart button
        } 
    }
     //========================================= Refresh page function ================================
     const refreshPage = ()=>{
        window.location.reload();  }
    return(
        <div id='mainPart'>
            <Header />
            <main className="trouverNombre">
                <div className="transBox">
                    <div id="mainNombre">
                        <p id="nbrAttempt">Tentative: {compteur}</p>
                        <p id="showCompare"></p>
                        <div>
                            <label id="propNumberLabel">Nombre entier entre 1 et 100</label>
                            <input  type="number" name="propNumber" id="propNumber" min="1" max="100"  maxLength="3" required  autoFocus onChange={e=>{setNombreUtilisateur(e.target.value)}} onKeyDown={pressEnter} onFocus={resetSubmitNumber}/>
                        </div>
                        <p id="notANumber">Ceci n'est pas un nombre entier entre 1 et 100</p> 
                        <div id="game"> 
                            <button type="submit" id="submitNumber" onClick={proposeNumber}>OK</button>
                            <button type="submit" id="stopNumber" onClick={refreshPage}>Cancel</button>
                        </div>
                    </div>
                    <button type="button" className="restart" onClick={refreshPage}>Recommencer</button>
                    
                    
                </div>
            </main>
           <Footer />
        </div>
    )
       
}

export default JeuNombre;



