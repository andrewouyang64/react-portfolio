import React from 'react';
import '../styles/resume.css';
import resumeText from '../images/AndrewResume.pdf';

export default function Resume() {
  return (
    <div className='resumeDiv' >
      <h1>Resume</h1>
      
      <embed className='resumeContent' src={resumeText} width="90%" height="700">
      </embed>
    </div>
  );
}
