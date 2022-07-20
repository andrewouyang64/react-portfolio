import React from 'react';
import { useState } from 'react';
import '../styles/contact.css';
import { validateEmail, checkMessage } from '../../utils/helper';


export default function Contact() {

  // Create state variables for the fields in the form and set their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, name, and message
    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is empty. If so, pop out a message "Message is required"
    }
    if (!checkMessage(message)) {
      setErrorMessage('You have not input message!');
      return;
    }
    alert(`Hello ${name}, your message has been sent by email.`);
    
    // When contact form is submitted, clear out the form.
    setName('');
    setEmail('');
    setMessage('');
  };
  return (
    <div>
      <h1 className='contact'>Contact</h1>
      <div className='form'>
      <form className="formContent" action="mailto:betterandbetter117@gmail.com" method="POST"
        enctype="text/plain" name="EmailForm"> 
        
        Name:<br/>
        <input 
          className= "name" 
          value={name} 
          onChange={handleInputChange} 
          type="text" 
          size="40" 
          name="Contac-tName"
          placeholder="Name"
        /><br/><br/>

        Email:<br/>
        <input
        className='email'
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"

        /><br/><br/>

          Message:<br/>
        <textarea className= "message" 
          value={message} 
          onChange={handleInputChange}
          name="Message" 
          rows="6" cols="42"
          placeholder="Please write message here">
          
        </textarea><br/>

        <button className='button' type="button" onClick={handleFormSubmit}>Submit</button>
        {/* <input className='button'
          type="submit" value="Submit" name="submit"/>  */}
        </form>

        {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      </div>
    </div>
  );
}
