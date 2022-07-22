import React from 'react';
import '../styles/footer.css';
import gitIcon from '../images/symbole-github-violet.png';
import phoneIcon from '../images/mobile-phone-icon.png';
import emailIcon from '../images/Mail-icon.png';
import linkedinIcon from '../images/linkedin-icon.png';
import twitterIcon from '../images/twitter-bird-symbols-png.png';

function footer () {

    return (
        <footer className="footer" id="contactMe">
        <h3>My Links</h3>
        <nav className="navDiv">
        
                <a className="contactIcon" href="https://github.com/andrewouyang64"><img className="icon" src={gitIcon}/></a>
              
                <a className="contactIcon" href="tel:+61410418298"><img className="icon" src={phoneIcon}/></a>
             
                <a className="contactIcon" href="mailto:andrew.ouyang@hotmail.com"><img className="icon" src={emailIcon}/></a>
              
                <a className="contactIcon" href="http://linkedin.com/in/andrew-ouyang-617918101"><img className="icon" src={linkedinIcon}/></a>
              
              <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="contactIcon" ><img className="icon" src={twitterIcon}/></a> 
            
        </nav>
    </footer> 
    )
}

export default footer;