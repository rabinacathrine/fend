import React from 'react';
import './style.css';

const Home=(props)=>{
    return(
//         <div class="row">
//   <div class="column">
//     <h2>Column 1</h2>
//     <p>Some text..</p>
//   </div>
//   <div class="column">
//     <h2>Column 2</h2>
//     <p>Some text..</p>
//   </div>
// </div>
<div class='some-page-wrapper'>
  <div class='row'>
    <div class='column'>
      <div class='blue-column'>
        Some Text in Column One
      </div>
    </div>
    <div class='column'>
      <div class='green-column'>
        Some Text in Column Two
        
        <div class="grid-container">
  <div>1</div>
  <div>2</div>
  
</div>
       
      <p>  <progress max="100" value="80"></progress></p>
      </div>
    </div>
  </div>
</div>


    )
}
export default Home;