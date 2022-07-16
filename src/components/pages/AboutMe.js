import React from 'react';
import andrewImg from '../images/andrewphoto1.jpg';
import '../styles/aboutme.css';

function AboutMe() {
  return (
    
    <div className="aboutme">
      <div> 
        <img className="andrewImg" src={andrewImg}/>
      </div>
        <div className="heading">About Me</div>
        <div className='content'>
        
        <span className='span1'>Since</span> I graduated  from college with a bachelor degree in automation many years ago, 
                        I have worked as a computer hardware engineer, a business director and a business advisor. I have extensive experiences
                        in computer technology, business management and IT implementation for business.
                        Recently I have completed most of a coding course in full stack web development at University of Sydney. Over the course I 
                        have learnt and practiced programming with languages and libraraies/frameworks that include
                        <span className='span2'> HTML, CSS, Boostrap, JavaScript, jQuery, API, node.js, express.js, MYSQL database, 
                        sequelize, RESTful crud, MVC structure, jest test and insomnia, PWA, React.js.  I also gained experiences on project management from using
                        Git/Github, Agile, Kanban methods and Heroku deploymentation in group projects.</span>
                        I'm passionate about adapting to new technoloies that I intend to use to solve complex real world problems. Currently I continue
                        studying full stack web delevopment. I also consider taking courses in cloud computing and AI/ML as I intend to become a software professional.
      </div>
    </div>
  );
}

export default AboutMe;