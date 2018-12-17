import React from 'react';
import ReactDOM from 'react-dom';




const inlineStyle = {
  backgroundColor:'orange'
};



const App = () => {
  const getTime = () => {
    return (new Date()).toLocaleTimeString()
  };

  return (
    <div style={inlineStyle}>{getTime()}</div>
  );
};


ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);