
const PenduLetterButton = ({id, onClick})=>{
    return(
         <button id={id} type="button" className="alphabetButton" onClick={onClick}>{id.toUpperCase()}</button>
    )
}

export default PenduLetterButton;