import React from 'react';
import { connect } from 'react-redux';

const Contact = (props) => {
  console.log(props);
  return (
    props.contact.map((contact,i) => <div key={i}>{contact.firstName}</div>)
  )
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps)(Contact);

//export default Contact;