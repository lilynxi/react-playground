import React from 'react';
import './ImageList.css';


const renderBody = (props) => {
  return props.images.length > 0 ? (
    <div className="masonry">
      {props.images.map(image => (
        <div className="item" key={image.id}>
          <img alt={image.description} src={image.urls.small} />
        </div>
      ))}
    </div>
  ) : (
    <div>no results found</div>
  );
}

const ImageList = props => {
  return (
    <div>
      {renderBody(props)}
    </div>
  );
}



export default ImageList;

