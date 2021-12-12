const contactStart = () => {
  return { type: 'CONTACT_START' };
};
const contactSuccess = (res) => {
  return { type: 'CONTACT_SUCCESS', payload: res.data.message };
};
const contactFailure = (error) => {
  return {
    type: 'CONTACT_FAILURE',
    payload:
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
  };
};
export { contactFailure, contactStart, contactSuccess };
