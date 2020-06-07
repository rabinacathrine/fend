import React from 'react';
import './style.css';
const Card = (props) =>{
    return(
        <div class='some-page-wrapper'>
        <div class='row'>
          <div class='column'>
            <div class='left'>
              <a href="//#endregion">Views</a>
             
                <div className="bottom">
                  <ul>
                      <li><a href="#sound">Sound Off</a></li>
                      <li><a href="#language">Language</a></li>
                      <li><a href="#easy">Easy</a></li>
                      <li><a href="#difficult">Difficult</a></li>
                  </ul>
              </div>
            </div>
          </div>
          <div class='column'>
            <div class='right'>
                <button className="end">End</button>
              
              
              <div class="grid-container">
        <div></div>
        <div></div>
        
      </div>
             
            <p>  <progress max="100" value="80"></progress></p>
            </div>
          </div>
        </div>
      </div>
      
            )

}
export default Card;