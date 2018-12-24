import React from 'react';


const Spinner = ({text}) => {

  return <div className="ui active dimmer">
  <div className="ui loader">{text}</div>
</div>
}

Spinner.defaultProps = {
  text : "default Text"
};

export default Spinner;