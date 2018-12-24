import React, {Component} from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component {

  state = { images: [] };

  // async onSearchSubmit(term){  
  // onSearchSubmit = async function(term){

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: response.data.results });

    console.log(response.data.results.length);
    // .then((response) => {
    //   console.log(response.data.results.length);
    // });
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '1rem'}}>
        <SearchBar onSubmitTerm={this.onSearchSubmit} />
        <ImageList/>
        {this.state.images.length}
      </div>
    );
  }
}

export default App;