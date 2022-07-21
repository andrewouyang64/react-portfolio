import React from 'react';
import andrewImg from '../images/andrewphoto1.jpg';
import sqlIcon from '../images/sql-icon.jpg';
import mongoDb from '../images/mongo-icon.png';
import node from '../images/node-js-logo.jpg';
import pwaIcon from '../images/pwaicon.png';
import graphql from '../images/graphql.png';
import heroku from '../images/heroku-icon.png';
import expressicon from '../images/express.js.png';
import boostrap from '../images/bootstrap-icon.png';
import api from '../images/api-icon.png';
import reacticon from '../images/react-icon.png';
import jwt from '../images/jwt-icon.png';
import cssion from '../images/css-icon.png';

import '../styles/aboutme.css';

function AboutMe() {
  return (
    
    <div className="aboutmeDiv">
      <div className='imageDiv' >
        
        <img className="andrewImg" src={andrewImg}/>

        <div className='icons' >
         
              <img className="icon1" src={reacticon}/>
          
              <img className="icon1" src={cssion}/>
         
              <img className="icon1" src={boostrap}/>
         
              <img className="icon1" src={sqlIcon}/>
          
              <img className="icon1" src={api}/>
      
              <img className="icon1" src={mongoDb}/>
          
              <img className="icon1" src={graphql}/>
        
          <img className="icon1" src={node}/>
          <img className="icon1" src={expressicon}/>
          
          <img className="icon1" src={heroku}/>
          <img className="icon1" src={pwaIcon}/>
          <img className="icon1" src={jwt}/>
           
       
      

        </div>
       
      </div>
        <div className="heading">
          <h3 className='aboutme' >Andrew O Yang &nbsp;&nbsp; <span className='title'>full stack web developer</span> </h3>

          </div>
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

                        <p className='pTag' ></p>
      </div>
        
    </div>
  );
}

export default AboutMe;