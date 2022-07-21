import React from 'react';
import project1Image from '../images/tourist-info-pic1.png';
import project2Image from '../images/book-taku1.png';
import project3Image from '../images/password-generator.png';
import '../styles/portfolio.css';

export default function Portfolio() {
  return (
    <div>
      <h1 className='portfolio'>Portfolio</h1>
        
        <div className='projectPage'>
       
          <p>
          <img className= "project1Image" src={project1Image} alt="A tourist info image"/> 
          <a className='project1Link' href="https://andrewouyang64.github.io/Tourist-Info/">Project1: Tourist-Info</a> <br/>
          This is an imformative tool for tourists to quickly obtain location and backgroud info
                    for a city they may visit. It utilizes the Google map and Wikipedia by implementing
                    API querying. It has a fully functional Google map and is completely interactive while the major info
                    is extracted out from Wikipedia. The application provides
                    user-friendly UI. It records up to four previous searches.To re-visit a search just by clicking
                    on the name on the list bar. New search is added at the top with the first
                    letter automatically converted to uppercase. A clear botton gives an option to
                    clear out previous searches. By default, the city of Sydney is displayed. When an invalid name
                    is entered, an error message will popup. HTML, CSS, CSS framework from Tailwind, Javascript, 
                    jQuery and server side API data fetching are used in this application. I was responsible for 
                    Javascript structuring and rendering, as well as some CSS stylings. Github
                    repos link: <a href="https://github.com/andrewouyang64/Tourist-Info" >https://github.com/andrewouyang64/Tourist-Info</a>
          </p>
         
        </div>

        <div className='projectPage'>       
          <p className='project2'>
          <img className= "project2Image" src={project2Image} alt="A book taku image"/>
          <a className = "project2Link" href="https://book-taku.herokuapp.com/">Project2: Book-Taku</a><br/>
          Book-taku is an application that allows reader interact with to see information about a
                    list of books and adds comment to them after login or sign up. MVC instructure is implemented in this application. The technologies 
                    used include MYSQL database, sequelize, node,js, express.js, session and store for cookie, handlebars 
                    templating engine, and bcrypt, dotenv and pagination packages. The Book-taku application is responsive and interactive
                    . This is a full stack development. For delails and codebase: Github repos link: <a href="https://github.com/andrewouyang64/book-taku" >https://github.com/andrewouyang64/book-taku</a>
          </p>
          
        </div>

        <div className='projectPage'>
        
         
          <p>
          <img className= "project3Image" src={project3Image} alt="A password generator"/> 
          <a className='project3Link' href="https://andrewouyang64.github.io/apw/">Password Generator</a> <br/>
          This app was coded largely with Javascript logic programming, some CSS styling as well as HTML. This
                   password generator can generate a password for a user with choices of uppercase, numeric or symbol between 8 to
                   128 charaters. User can choose different combination by ticking on the checkbox and length of the password.
                   After ticking the options, by clicking on the Generator button, a randomized password is generated and displayed. Github
                   repos link: <a href="https://github.com/andrewouyang64/apw" >https://github.com/andrewouyang64/apw</a><br></br><br></br>
          </p>

        </div>

      
      
    </div>
  );
}
