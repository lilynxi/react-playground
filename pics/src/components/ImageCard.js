import React, {Component} from 'react';
import './ImageCard.css';


class ImageCard extends Component{
  constructor(props){
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load',() => {
      console.log(this.imageRef.current.clientHeight);
    });
  }

  render(){
    const { description, urls } = this.props.image;
    return (
      <div className="item">
        <img ref={this.imageRef} alt={description} src={urls.small} />
      </div>
    );
  }
}



export default ImageCard;

