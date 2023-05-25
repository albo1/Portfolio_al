
import React from 'react';
import imageMe from '../images/me2lol.png';

export default function About() {
  return (
    <div>
      <h1>About Me </h1>
      <img src= {imageMe} alt="pic of me" width={150} />
      <p>
        I am a developer in the Greater Philadelphia Area.<br/>
        <br/>
        I cannot wait to begin my coding journey!
      </p>
    </div>
  );
}