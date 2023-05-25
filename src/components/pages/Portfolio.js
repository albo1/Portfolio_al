import React from 'react';
import pic1 from '../images/petstagram.png';
import pic2 from '../images/dateplanner.png'; 
import pic3 from '../images/weatherapp.jpeg';
import pic4 from '../images/notetaker.png';
import pic5 from '../images/refactor.png';
import pic6 from '../images/jate.png';
// import styles from '../styles/styles.css';

export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <div class="row col-sm-6" style={{display: 'inline-block'}}>
        
      <a href="https://intense-crag-59810.herokuapp.com/" target="_blank">
      <img src= {pic1} alt="petstagram"width={100} />Instagram for Pets!</a>
      <a href="https://github.com/albo1/petstagram_al" target="_blank">Github</a>
      </div>

      <div class="row col-sm-6  "style={{display: 'inline-block'}}>
     
      <a href="https://alboy77.github.io/date_planner/" target="_blank">
      <img src= {pic2}alt="date planner" width={100} />Date Planner</a>
      <a href="https://github.com/albo1/date_planner" target="_blank">Github</a> 
      </div>

      
      <div class="row col-sm-6"style={{display: 'inline-block'}}> 
      <a href="https://github.com/albo1/weather_app" target="_blank">
      <img src= {pic3} alt="weather app" width={100} />Weather App</a>
      <a href="https://github.com/albo1/weather_app" target="_blank">Github</a>
      </div>

      <div class="row col-sm-6 "style={{display: 'inline-block'}}>
      <a href="https://fathomless-badlands-45599.herokuapp.com/" target="_blank">
      <img src= {pic4} alt="Note Taker" width={100} />Note Taker</a>
      <a href="https://github.com/albo1/Note-Taker" target="_blank">Github</a>
      </div>

      <div class="row col-sm-6 "style={{display: 'inline-block'}}> 
      <a href="https://alboy77.github.io/Horiseon-accessibility-refactor/#social-media-marketing" target="_blank">
      <img src= {pic5} alt="refactor" width={100} />Horiseon Refactor</a>
      <a href="https://github.com/albo1/Horiseon-accessibility-refactor" target="_blank">Repo</a>
      </div>

      <div class="row col-sm-6 "style={{display: 'inline-block'}}>
      <a href="https://glacial-reef-41259.herokuapp.com/" target="_blank">
      <img src= {pic6} alt="text editor" width={100} />Text Editor</a>
      <a href="https://github.com/albo1/pwa_text_editor" target="_blank">Repo</a>
      </div>

    </div>
  );
}
