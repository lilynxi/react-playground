import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'summer',
    iconName: 'sun',
  },
  winter: {
    text: 'winter',
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9){
    return lat > 0 ? 'summer': 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = ({lat}) => {
  const season = getSeason(lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season]; // text, iconName
  

  return <div className={`season-display ${season}` }>
    <h1>{text}</h1>
    <i className={`${iconName} icon big`}></i>
  </div>
}

export default SeasonDisplay;