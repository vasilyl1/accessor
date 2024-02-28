//import React, { createContext, useContext, useReducer } from 'react';
import { createStore } from 'redux';
import {reducer} from './Reducers';

export const store = createStore(reducer);
