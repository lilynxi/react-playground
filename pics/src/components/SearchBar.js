import React, {Component} from 'react';

class SearchBar extends Component {

  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmitTerm(this.state.term);
  }

  render(){
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>image search</label>
            <input type="text" placeholder="Search" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;