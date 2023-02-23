import React, { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import pendu1 from '../images/pendu1.svg';
import pendu2 from '../images/pendu2.svg';
import pendu3 from '../images/pendu3.svg';
import pendu4 from '../images/pendu4.svg';
import pendu5 from '../images/pendu5.svg';
import pendu6 from '../images/pendu6.svg';
import pendu7 from '../images/pendu7.svg';
import pendu8 from '../images/pendu8.svg';
import PenduLetterButton from '../components/PenduLetterBtton';

const JeuPendu = ()=>{
    
    //choose a word in the array of words
    /* Liste des mots a deviner*/
    const listWords = ["angle", "armoire", "banc", "bureau", "cabinet", "carreau", "chaise", "classe", "clé", "coin", "couloir", "dossier", "eau", "école", "écriture", "entrée", "escalier", "étagère", "étude", "extérieur", "fenêtre", "intérieur", "lavabo", "lecture", "lit", "marche", "matelas", "maternelle", "meuble", "mousse", "mur", "peluche", "placard", "plafond", "porte", "portemanteau", "poubelle", "radiateur", "rampe", "récréation", "rentrée", "rideau", "robinet", "salle", "savon", "serrure", "serviette", "siège", "sieste", "silence", "sol", "sommeil", "sonnette", "sortie", "table", "tableau", "tabouret", "tapis", "tiroir", "toilette", "vitre", "crayon", "stylo", "feutre", "pointe", "mine", "gomme", "dessin", "coloriage", "rayure", "peinture", "pinceau", "couleur", "craie", "papier", "feuille", "cahier", "carnet", "carton", "ciseaux", "découpage", "pliage", "pli", "colle", "affaire", "boîte", "casier", "caisse", "trousse", "cartable", "jouet", "jeu", "pion", "dé", "domino", "puzzle", "cube", "perle", "chose", "carré", "rond", "tampon", "livre", "histoire", "bibliothèque", "image", "album", "titre", "conte", "dictionnaire", "magazine", "catalogue", "page", "ligne", "mot", "enveloppe", "étiquette", "alphabet", "appareil", "caméscope", "cassette", "chaîne", "chanson", "chiffre", "contraire", "différence", "doigt", "écran", "écriture", "film", "fois", "idée", "instrument", "intrus", "lettre", "liste", "magnétoscope", "main", "micro", "modèle", "musique", "nom", "nombre", "orchestre", "ordinateur", "photo", "point", "poster", "pouce", "prénom", "question", "radio", "sens", "tambour", "télécommande", "téléphone", "télévision", "trait", "trompette", "voix", "xylophone", "zéro", "ami", "attention", "camarade", "colère", "copain", "coquin", "dame", "directeur", "directrice", "droit", "effort", "élève", "enfant", "fatigue", "faute", "fille", "garçon", "gardien", "madame", "maître", "maîtresse", "mensonge", "ordre", "personne", "retard", "sourire", "travail", "arrosoir", "assiette", "balle", "bateau", "boîte", "bouchon", "bouteille", "bulles", "canard", "casserole", "cuillère", "cuvette", "douche", "entonnoir", "gouttes", "litre", "moulin", "pluie", "poisson", "pont", "pot", "roue", "saladier", "seau", "tablier", "tasse", "trous", "verre", "anorak", "arc", "bagage", "baguette", "barbe", "bonnet", "botte", "bouton", "bretelle", "cagoule", "casque", "casquette", "ceinture", "chapeau", "chaussette", "chausson", "chaussure", "chemise", "cigarette", "col", "collant", "couronne", "cravate", "culotte", "écharpe", "épée", "fée", "flèche", "fusil", "gant", "habit", "jean", "jupe", "lacet", "laine", "linge", "lunettes", "magicien", "magie", "maillot", "manche", "manteau", "mouchoir", "moufle", "paire", "pantalon", "pied", "poche", "prince", "pyjama", "reine", "robe", "roi", "ruban", "semelle", "soldat", "sorcière", "tache", "taille", "talon", "tissu", "tricot", "uniforme", "valise", "veste", "vêtement", "aiguille", "ampoule", "avion", "bois", "bout", "bricolage", "bruit", "cabane", "carton", "clou", "colle", "crochet", "élastique", "ficelle", "fil", "marionnette", "marteau", "métal", "mètre", "morceau", "moteur", "objet", "outil", "peinture", "pinceau", "planche", "plâtre", "scie", "tournevis", "vis", "voiture", "véhicule", "accident", "aéroport", "auto", "camion", "engin", "feu", "frein", "fusée", "garage", "gare", "grue", "hélicoptère", "moto", "panne", "parking", "pilote", "pneu", "quai", "train", "virage", "vitesse", "voyage", "wagon", "zigzag", "acrobate", "arrêt", "arrière", "barre", "barreau", "bord", "bras", "cerceau", "chaises", "cheville", "chute", "corde", "corps", "côté", "cou", "coude", "cuisse", "danger", "doigts", "dos", "échasses", "échelle", "épaule", "équipe", "escabeau", "fesse", "filet", "fond", "genou", "gymnastique", "hanche", "jambes", "jeu", "main", "milieu", "montagne", "muscle", "numéro", "ongle", "parcours", "pas", "passerelle", "pente", "peur", "pieds", "plongeoir", "poignet", "poing", "prises", "roulade", "saut", "serpent", "sport", "suivant", "tête", "toboggan", "tour", "trampoline", "tunnel", "ventre", "bagarre", "balançoire", "ballon", "bande", "bicyclette", "bille", "cadenas", "château", "coup", "cour", "course", "échasse", "flaque", "paix", "pardon", "partie", "pédale", "pelle", "pompe", "préau", "raquette", "rayon", "récréation", "sable", "sifflet", "signe", "tas", "tricycle", "tuyau", "vélo", "filet", "allumette", "anniversaire", "appétit", "beurre", "coquille", "crêpes", "croûte", "dessert", "envie", "faim", "fève", "four", "galette", "gâteau", "goût", "invitation", "langue", "lèvres", "liquide", "louche", "mie", "moitié", "moule", "odeur", "part", "pâte", "pâtisserie", "recette", "rouleau", "sel", "soif", "tarte", "tranche", "yaourt", "bassine", "cocotte", "épluchure", "légume", "rondelle", "soupe", "consommé", "potage", "glaçon", "jus", "kiwi", "lame", "mûre", "noyau", "paille", "pamplemousse", "râpe", "arête", "frite", "gobelet", "jambon", "os", "poulet", "purée", "radis", "restaurant", "sole", "animal", "bébés", "bouche", "cage", "câlin", "caresse", "foin", "graines", "hamster", "lapin", "maison", "nez", "œil", "oreille", "patte", "toit", "yeux", "légume", "abeille", "agneau", "aile", "âne", "arbre", "bain", "barque", "bassin", "bébé", "bec", "bête", "bœuf", "boue", "bouquet", "bourgeon", "branche", "caillou", "campagne", "car", "champ", "chariot", "chat", "cheminée", "cheval", "chèvre", "chien", "cochon", "colline", "coq", "coquelicot", "crapaud", "cygne", "départ", "dindon", "escargot", "étang", "ferme", "fermier", "feuille", "flamme", "fleur", "fontaine", "fumée", "grain", "graine", "grenouille", "griffe", "guêpe", "herbe", "hérisson", "insecte", "jardin", "mare", "marguerite", "miel", "mouche", "mouton", "oie", "oiseau", "pierre", "pigeon", "plante", "plume", "poney", "poule", "poussin", "prairie", "rat", "rivière", "route", "tortue", "tracteur", "tulipe", "vache", "vétérinaire", "aigle", "animaux", "aquarium", "bêtes", "cerf", "chouette", "cigogne", "crocodile", "dauphin", "éléphant", "girafe", "hibou", "hippopotame", "kangourou", "lion", "loup", "ours", "panda", "panthère", "perroquet", "phoque", "renard", "requin", "rhinocéros", "singe", "tigre", "zèbre", "zoo", "épingle", "bâton", "bêtise", "bonhomme", "bottes", "canne", "cauchemar", "cri", "danse", "déguisement", "dinosaure", "drapeau", "fête", "figure", "géant", "gens", "joie", "joue", "journaux", "maquillage", "masque", "monsieur", "moustache", "ogre", "princesse", "rue", "trottoir", "âge", "an", "année", "calendrier", "début", "dimanche", "été", "étoile", "fin", "mamans", "heure", "hiver", "horloge", "jeudi", "jour", "journée", "lumière", "lundi", "lune", "mardi", "matin", "mercredi", "midi", "minuit", "minute", "mois", "moment", "montre", "nuit", "ombre", "pendule", "retour", "réveil", "saison", "samedi", "semaine", "soir", "soleil", "temps", "univers", "vacances", "vendredi", "air", "brouillard", "ciel", "éclair", "flocon", "goutte", "hirondelle", "luge", "neige", "nuage", "orage", "ouragan", "parapluie", "parasol", "ski", "tempête", "thermomètre", "tonnerre", "traîneau", "vent", "assiette", "balai", "biscuit", "boisson", "bol", "bonbon", "céréale", "confiture", "coquetier", "couteau", "couvercle", "couvert", "cuillère", "cuisine", "cuisinière", "désordre", "dînette", "éponge", "évier", "four", "fourchette", "lait", "lessive", "machine", "nappe", "pain", "pile", "plat", "plateau", "poêle", "réfrigérateur", "repas", "tartine", "torchon", "vaisselle", "argent", "aspirateur", "bague", "barrette", "bijou", "bracelet", "brosse", "cadre", "canapé", "chambre", "cheveu", "chiffon", "cil", "coffre", "coffret", "collier", "couette", "coussin", "couverture", "dent", "dentifrice", "drap", "fauteuil", "repasser", "frange", "glace", "lampe", "lit", "ménage", "or", "oreiller", "parfum", "peigne", "pouf", "poupée", "poussette", "poussière", "shampoing", "sourcil", "trésor", "tube", "vase", "adulte", "album", "amour", "baiser", "bavoir", "biberon", "bisou", "caprice", "cimetière", "cousin", "cousine", "crèche", "fils", "frère", "homme", "femme", "jumeau", "maman", "mari", "mariage", "mère", "papa", "parent", "père", "rasoir", "sœur", "ambulance", "bosse", "champignon", "dentiste", "docteur", "fièvre", "front", "gorge", "infirmier", "infirmière", "jambe", "larme", "médecin", "menton", "mine", "ordonnance", "pansement", "peau", "piqûre", "poison", "sang", "santé", "squelette", "trousse", "araignée", "brouette", "chenille", "coccinelle", "fourmi", "herbe", "jonquille", "lézard", "pâquerette", "rangée", "râteau", "rosé", "souris", "taupe", "terrain", "terre", "terrier", "tige", "ver", "portière", "sac", "billet", "caisse", "farce", "grimace", "grotte", "pays", "regard", "ticket", "bûche", "buisson", "camp", "chasseur", "châtaigne", "chemin", "chêne", "corbeau", "écorce", "écureuil", "forêt", "gourde", "lac", "loupe", "lutin", "marron", "mûre", "moustique", "muguet", "nid", "paysage", "pin", "rocher", "sapin", "sommet", "tente", "adresse", "appartement", "ascenseur", "balcon", "boucherie", "boulanger", "boulangerie", "boutique", "bus", "caniveau", "caravane", "carrefour", "cave", "charcuterie", "cinéma", "cirque", "cloche", "clocher", "clown", "coiffeur", "courrier", "croix", "église", "embouteillage", "endroit", "enveloppe", "essence", "facteur", "fleuriste", "foire", "hôpital", "hôtel", "immeuble", "incendie", "laisse", "magasin", "manège", "médicament", "moineau", "monde", "monument", "ouvrier", "palais", "panneau", "paquet", "parc", "passage", "pharmacie", "pharmacien", "piscine", "place", "police", "policier", "pompier", "poste", "promenade", "quartier", "square", "timbre", "travaux", "usine", "village", "ville", "voisin", "volet", "abricot", "ail", "aliment", "ananas", "banane", "bifteck", "café", "carotte", "cerise", "chocolat", "chou", "citron", "citrouille", "clémentine", "concombre", "coquillage", "corbeille", "crabe", "crevette", "endive", "farine", "fraise", "framboise", "fromage", "fruit", "gâteau", "haricot", "huile", "légume", "marchand", "melon", "monnaie", "navet", "noisette", "noix", "nourriture", "oignon", "orange", "panier", "pâtes", "pêche", "persil", "pois", "poire", "poireau", "pomme", "prix", "prune", "queue", "raisin", "riz", "salade", "sucre", "thé", "tomate", "viande", "vin", "baleine", "bouée", "île", "jumelles", "marin", "mer", "mouette", "navire", "pêcheur", "plage", "poisson", "port", "sardine", "serviette", "vague", "voile"];
    //---------Array of image pendu-----------
    const pendu = [pendu1, pendu2, pendu3, pendu4, pendu5, pendu6, pendu7, pendu8];
    var [attemptNmb, setAttemptNmb] = useState(0);
    const [wordToFind, setWordToFind] = useState(listWords[Math.ceil(Math.random()*listWords.length)]);
    const numberCorrectLetters = useRef(0);
    var wordToFindArray = wordToFind.split("");
    var numberLetters=wordToFind.length;
//     let numberCorrectLetters = 0;
    const alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    console.log(wordToFind);
   
    function testLetters(proposedLetter){
         var oneCorrectLetter = 0
         for (let compteur=0; compteur<numberLetters; compteur++){
              var correctLetter = wordToFind[compteur];
              if (correctLetter === "é" || correctLetter=== "è" || correctLetter=== "ê" || correctLetter=== "ë"){
                   correctLetter = "e";
              }
              if (correctLetter === "à" || correctLetter=== "â" || correctLetter=== "ä"){
                   correctLetter = "a";
              }
              if (correctLetter === "ù" || correctLetter=== "û" || correctLetter=== "ü"){
                   correctLetter = "u";
              }
              if (correctLetter === "ï" || correctLetter=== "î"){
                   correctLetter = "i";
              }
              if (correctLetter === "ô" || correctLetter=== "ö"){
                   correctLetter = "o";
              }
              if (correctLetter === "ç"){
                   correctLetter = "c";
              }
              
              if (proposedLetter === correctLetter){
                   oneCorrectLetter = 1
                   numberCorrectLetters.current++;
                   
                   console.log(numberCorrectLetters.current);
                   console.log(numberLetters)
                   document.getElementById(compteur).className = "goodLettersButton";
                   document.getElementById(proposedLetter).style.visibility = "hidden";
                   
                   if (numberCorrectLetters.current === numberLetters){
                        document.getElementById("alphabet").innerHTML = '<p>GAGNE</p>';
                        document.getElementById("alphabet").style.fontSize = "30px";
                        document.getElementsByClassName("restart")[0].style.visibility = "visible";
                        break; 
                   }
                   
              }
         }
         if (oneCorrectLetter === 0 && proposedLetter != correctLetter){
              setAttemptNmb(()=>attemptNmb+1);
              document.getElementById(proposedLetter).disabled = true;
              document.getElementById(proposedLetter).className = "wrongLettersButton";
              if (attemptNmb >= 6){
                   document.getElementById("alphabet").innerHTML = '<p>PERDU</p>';
                   document.getElementById("alphabet").style.fontSize = "30px";
                   document.getElementsByClassName("restart")[0].style.visibility = "visible";
                   for (let compteur=0; compteur<numberLetters; compteur++){
                        document.getElementById(compteur).className = "wrongLettersButton";
                   }        
              }
         }
    }
    //========================================= Refresh page function ================================
    function refreshPage(){window.location.reload() }
   
    return(
        <div id='mainPart'>
            <Header />
            <main className="mainPendu">
                <section className="transBox">
                    <div id="centralPartPendu">
                         <img src={pendu[attemptNmb]} id="imgPendu" className="imgPendu" alt='pendu'/>
                         <aside id="secondColumnPendu">
                                   <section id="result">
                                        {wordToFindArray.map((wordToFindLetter, index)=>
                                             <button key={index} id = {index} className = "answerButton">{wordToFindLetter}</button>
                                        )}
                              </section>
                              <section>
                                   <div id="alphabet">
                                        {alphabetArray.map(element=>
                                              <PenduLetterButton key={element} id={element} onClick={()=>testLetters(element)}/>
                                        )}
                                       
                                        {/* <button id="a" type="button" className="alphabetButton" onClick={()=>testLetters("a")}>A</button>
                                        <button id="b" type="button" className="alphabetButton" onClick={()=>testLetters("b")}>B</button>
                                        <button id="c" type="button" className="alphabetButton" onClick={()=>testLetters("c")}>C</button>
                                        <button id="d" type="button" className="alphabetButton" onClick={()=>testLetters("d")}>D</button>
                                        <button id="e" type="button" className="alphabetButton" onClick={()=>testLetters("e")}>E</button>
                                        <button id="f" type="button" className="alphabetButton" onClick={()=>testLetters("f")}>F</button>
                                        <button id="g" type="button" className="alphabetButton" onClick={()=>testLetters("g")}>G</button>
                                        <button id="h" type="button" className="alphabetButton" onClick={()=>testLetters("h")}>H</button>
                                        <button id="i" type="button" className="alphabetButton" onClick={()=>testLetters("i")}>I</button>
                                        <button id="j" type="button" className="alphabetButton" onClick={()=>testLetters("j")}>J</button>
                                        <button id="k" type="button" className="alphabetButton" onClick={()=>testLetters("k")}>K</button>
                                        <button id="l" type="button" className="alphabetButton" onClick={()=>testLetters("l")}>L</button>
                                        <button id="m" type="button" className="alphabetButton" onClick={()=>testLetters("m")}>M</button>
                                        <button id="n" type="button" className="alphabetButton" onClick={()=>testLetters("n")}>N</button>
                                        <button id="o" type="button" className="alphabetButton" onClick={()=>testLetters("o")}>O</button>
                                        <button id="p" type="button" className="alphabetButton" onClick={()=>testLetters("p")}>P</button>
                                        <button id="q" type="button" className="alphabetButton" onClick={()=>testLetters("q")}>Q</button>
                                        <button id="r" type="button" className="alphabetButton" onClick={()=>testLetters("r")}>R</button>
                                        <button id="s" type="button" className="alphabetButton" onClick={()=>testLetters("s")}>S</button>
                                        <button id="t" type="button" className="alphabetButton" onClick={()=>testLetters("t")}>T</button>
                                        <button id="u" type="button" className="alphabetButton" onClick={()=>testLetters("u")}>U</button>
                                        <button id="v" type="button" className="alphabetButton" onClick={()=>testLetters("v")}>V</button>
                                        <button id="w" type="button" className="alphabetButton" onClick={()=>testLetters("w")}>W</button>
                                        <button id="x" type="button" className="alphabetButton" onClick={()=>testLetters("x")}>X</button>
                                        <button id="y" type="button" className="alphabetButton" onClick={()=>testLetters("y")}>Y</button>
                                        <button id="z" type="button" className="alphabetButton" onClick={()=>testLetters("z")}>Z</button> */}
                                   </div>
                                   <button type="button" className="restart" onClick={refreshPage}>Recommencer</button>
                              </section>
                         </aside>  
                    </div>   
                    <a href="http://www.freeimages.co.uk" rel="nofollow" target="_top" title="Download free stock photography" className="lienImg">image : www.freeimages.co.uk</a> 
                </section>
               
            </main>
           <Footer />
        </div>
    )
       
}

export default JeuPendu;

