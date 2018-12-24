import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
  // constructor(props){
  //   super(props); // reference to the parents constructor function

  //   this.state = { lat: null, errorMessage: false };
  // }

  state = {lat: null, errorMessage: false};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errorMessage: err.message})
    );
  }

  componentDidUpdate(){
    console.log("Component did Update");
  }

  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Err: {this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}/>;
    }

    return <Spinner text={"loading text"} />;
  }

  render() {
    return(
      <div className="blabla">
        {this.renderContent()}
      </div>
    );

  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));