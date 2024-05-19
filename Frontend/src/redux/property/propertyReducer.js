import { ADD_PROPERTY,GET_ALL_PROPERTIES } from './actiontypes';

const initialState = {
  properties: [],
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROPERTY:
      return {
        ...state,
        properties: [...state.properties, action.payload],
      };
    case GET_ALL_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
      };
    default:
      return state;
  }
};

export default propertyReducer;
