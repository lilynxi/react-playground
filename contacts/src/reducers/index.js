import { combineReducers  } from 'redux';

const initialStateReducer = () => {
  return [
    { firstName: "Hans", secondName: "Meier" },
    { firstName: "Peter", secondName: "Müller" },
    { firstName: "Franz", secondName: "Loser" },
  ]
}

const selectedContactReducer = (contact = [], action)=> {
  if (action.type === 'CONTACT_SELECTED'){
    return [...contact, action.payload];
    //return action.payload;
  }

  return contact;
}

export default combineReducers({
  initialState: initialStateReducer,
  contact: selectedContactReducer
});