export const selectContact = (contact) => {
  return {
    type:'CONTACT_SELECTED',
    payload: contact,
  };
};