import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';


const renderBody = (props) => {
  return props.images.length > 0 ? (
    <div className="masonry">
      {props.images.map(image => (
        <ImageCard image={image} key={image.id} />
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

