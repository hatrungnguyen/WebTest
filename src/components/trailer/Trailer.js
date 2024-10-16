import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';
import React from 'react';

const Trailer = () => {
  let { ytTrailerId } = useParams(); // Extract YouTube video ID from the route parameters

  return (
    <div className="react-player-container">
      {ytTrailerId ? (
        <ReactPlayer
          controls={true}
          playing={true}
          url={`https://www.youtube.com/watch?v=${ytTrailerId}`}
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
};

export default Trailer;
