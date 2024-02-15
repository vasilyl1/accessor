import React, { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducers';

// initialize the context for the current user
const AccessorStateContext = createContext();

// hook to access the state context from any component
export const useAccessorState = () => useContext(AccessorStateContext);

// StateProvider component that holds initial state and reducer function, returns provider component
export const AccessorStateProvider = ({ children }) => {
    const initialState = {

        navigation: [
            { name: 'Dashboard', href: '#', current: true },
            { name: 'Calendar', href: '#', current: false },
          ],
        
          userNavigation: [{ name: 'Login', href: '/auth' }],
        
          notifications: [
            { name: 'Your notifications will be displayed here', href: '#' },
            { name: 'Please login', href: '/auth' }
          ],
        
          loggedUser: { name: '', email: '', imageUrl: './assets/images/notLoggedInUser.png' },

          dummyUser : { name: '', email: '', imageUrl: './assets/images/notLoggedInUser.png' }
    };

    // useReducer hook to manage state with the reducer function
    const [state, dispatch] = useReducer(reducer, initialState);
  
    // Provider components expect a value prop to be passed
    return (
      <AccessorStateContext.Provider value={{state,dispatch}}>
        {/* Render children passed from props */}
        {children}
      </AccessorStateContext.Provider>
    );
  };