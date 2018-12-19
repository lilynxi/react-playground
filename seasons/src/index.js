import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props){
    super(props); // reference to the parents constructor function

    this.state = { lat: null, errorMessage: false };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        this.setState({lat: position.coords.latitude});
      },
      (err) => {
        console.log(err);
        this.setState({errorMessage: err.message})
      }
    );
  }


  render() {

    //console.log(this.state.errorMessage);

    return (
      <div>
        {
          !this.state.errorMessage ?
          <div>Latitude: {this.state.lat}</div>
          :
          <div>Err: {this.state.errorMessage}</div>
        }
      </div>
    )

  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));