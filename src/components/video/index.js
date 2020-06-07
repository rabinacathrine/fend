// import React from 'react';
// //import './Video.css';

// const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

// export function Video(props) {
//   if (!props.id) {
//     return null;
//   }
//   const embedUrl = `${BASE_EMBED_URL}${props.id}`;
//   return (
//     <div className='video-container'>
//       <div className="video">
//         <iframe className='video-player' src={embedUrl} frameBorder='0'
//                 allow='autoplay; encrypted-media' allowFullScreen title='video' />
//       </div>
  
//     </div>
//   );
  
// }

import React from "react"
const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
)
export default Video
