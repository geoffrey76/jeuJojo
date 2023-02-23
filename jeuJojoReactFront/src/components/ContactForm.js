const Form = ( {onChangeFName, onChangeLName, onChangeEMail, onChangeComments, onSubmit} )=>{
    return(
        <form id="contactForm" onSubmit={onSubmit}>
            <div id='contactArea'>
                <div id="personalInfo">
                    <label className='contactInput'>Prénom</label>
                    <input  type="text" onChange={onChangeFName} id="fName" autoFocus></input>
                    <label className='contactInput'>Nom</label>
                    <input  type="text" onChange={onChangeLName} id="lName"></input>
                    <div id="eMailContainer">
                        <label className='contactInput'>e-mail<span className='requiredStar'>*</span></label>
                        <div id='requiredEMail' className='contactInput'>Entrez un email valide</div>
                    </div>
                    <input type="text" onChange={onChangeEMail} id="eMail"></input>
                </div>
                <div id='comments'>
                    <div id="commentsContainer">
                        <label className='contactInput'>Commentaires<span className='requiredStar'>*</span></label>
                        <div id='requiredComment' className='contactInput'>Entrez un commentaire</div>
                    </div>
                    <textarea  onChange={onChangeComments} id="commentBox"></textarea>
                </div>
            </div>
            <button type="submit" id="sendContactButton">Envoyer</button>
        </form>
    )  
}

export default Form;