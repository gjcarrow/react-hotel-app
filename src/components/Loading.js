import React from 'react';
import loadingGif from '../images/gif/loading-arrow.gif';

const Loading = () => {
  return (
    <div className="loading loader">
      <h4>
        rooms data loading...
      </h4>

      <div className="loading-gif">
        <img src={loadingGif} alt="loading..." />
      </div>
    </div>
  );
};

export default Loading;