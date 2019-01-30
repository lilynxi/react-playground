import React from 'react';
import ContactList from './ContactList';
import Contact from './Contact';
import './style.css';

const App = () => {
  return <div>
    <div className="contact-list"><ContactList/></div>
    <div className="contact"><Contact /></div>
  </div>
}

export default App;