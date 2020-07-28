import React, { useContext } from 'react';
import { useReducer } from 'react';
import Context from './Context';

export const StateProvider = ({ reducer, initialState, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const useStateValue = () => useContext(Context);
