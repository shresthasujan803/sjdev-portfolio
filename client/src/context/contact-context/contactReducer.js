const contactReducer = (state, action) => {
  switch (action.type) {
    case 'CONTACT_START':
      return { isFetching: true, error: null, success: null };

    case 'CONTACT_SUCCESS':
      return { isFetching: false, error: null, success: action.payload };

    case 'CONTACT_FAILURE':
      return {
        isFetching: false,
        success: null,
        error: action.payload,
      };

    default:
      return { ...state };
  }
};
export default contactReducer;
