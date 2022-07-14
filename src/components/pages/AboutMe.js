import React from 'react';
import andrewImg from './andrewphoto1.jpg';
const styles = {
  aboutme: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    marginTop: '1.3rem',
    background: '#3f51b5',
    height: '3rem',
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
    marginLeft: '30px',
    marginRight: '30px'
  },
  content: {
    padding: 20,
  },

  andrewImg: {
    height: '200px',
    width: '160px',
    marginLeft: '30px',
    marginRight: '30px',
    marginTop: '30px'
  }
};

function AboutMe() {
  return (
    
    <div style={styles.aboutme}>
      <div> 
        <img style={styles.andrewImg} src={andrewImg}/>
      </div>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        
        About Me !  Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </div>
    </div>
  );
}

export default AboutMe;