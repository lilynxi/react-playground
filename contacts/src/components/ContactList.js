import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectContact } from '../actions';

class ContactList extends Component{

  render(){
    return (
      this.props.initialState.map((person,i) => <div key={i}>
        <div>{person.firstName}</div>
        <div onClick={this.onClick = () => this.props.selectContact(person)}>select</div>
      </div>
      )
    )
  }
}


const mapStateToProps = (state) => {
  return state;
}

const mapActionsToProps = {
  selectContact 
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ContactList);

