import React from 'react';
import resumePDF from '../images/AL_RESUME_2023.pdf'

export default function Home() {
  return (
    <div>
      <h1>Resume</h1>
      <a href={resumePDF} download="AL_RESUME_2023.pdf" target="_blank" rel="noopener noreferrer">Download Resume ⬇️</a>
    </div>
  );
}