import React from 'react';
import { useState, useRef } from "react";
import validator from "validator";
import axios from "axios";
import "../css/contact.css";
import Form from '../components/ContactForm';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = ()=>{
    const fName = useRef("");
    const lName = useRef("");
    const email = useRef("");
    const comments = useRef("");
    // const [fName, setfName] = useState ("");
    // const [lName, setlName] = useState ("");
    // const [email, setEmail] = useState ("");
    // const [comments, setComments] = useState ("");
    const mailResponse = "";

    
    const handleOnchangeFName = e => fName.current = e.target.value;
    const handleOnChangeLName = e => lName.current = e.target.value;
    const handleOnChangeEMail = e => email.current = e.target.value;
    const handleOnChangeComments = e => comments.current = e.target.value;
    const handleOnSubmit = e =>{
        e.preventDefault();
        document.getElementById("eMail").className = "contactInput";
        document.getElementById("requiredEMail").style.visibility = "hidden";
        document.getElementById("commentBox").className = "contactInput"
        document.getElementById("requiredComment").style.visibility = "hidden";
        //------------ test to see if email or comments is null --------------------
        if (!validator.isEmail (email.current)){
            console.log("Entrer un e-mail valide");
            document.getElementById("eMail").className = "requiredItem";
            document.getElementById("requiredEMail").style.visibility = "visible";
            return (false);
        }
        if (!comments.current){
            document.getElementById("commentBox").className = "requiredItem"
            document.getElementById("requiredComment").style.visibility = "visible";
            return (false);
        }
        
        //------------- End of test --------------------------------------------------
        const sendMail = {firstName: fName.current, lastName: lName.current, email: email.current, comments: comments.current}
        axios.post ("/api/mailForm", sendMail)
        .then(function (response) {
            console.log(response);
            if (response.data=="Erreur lors de l'envoi du message"){
                console.log(response);
            };
            document.getElementById("mailResponse").innerHTML = response.data;
            document.getElementById("contactArea").remove();
            document.getElementById("sendContactButton").remove();
        })
        .then(()=>{fName.current = "";
        lName.current = "";
        email.current = "";
        comments.current = ""});
    }
    
    return(
        <div id='mainPart'>
            <Header />
            <main>
                <Form onChangeFName={handleOnchangeFName} onChangeLName={handleOnChangeLName}
                onChangeEMail={handleOnChangeEMail} onChangeComments={handleOnChangeComments} onSubmit={handleOnSubmit} />
                <h1 id='mailResponse'></h1>
            </main>
           <Footer />
        </div>
    )
       
}

export default Contact;