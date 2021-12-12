import contactReducer from './contactReducer';
import { createContext, useReducer } from 'react';
const INITIAL_STATE = {
  isFetching: false,
  success: null,
  error: null,
};
export const ContactContext = createContext(INITIAL_STATE);

export const ContactContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactReducer, INITIAL_STATE);

  return (
    <ContactContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ContactContext.Provider>
  );
};
