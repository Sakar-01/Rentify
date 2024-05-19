import { ADD_PROPERTY,GET_ALL_PROPERTIES } from './actiontypes';
import axios from 'axios';

export const addProperty = (propertyData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/property/add', propertyData);
      dispatch({ type: ADD_PROPERTY, payload: response });
    } catch (error) {
        
    }
  };

  export const getProperties = () => async (dispatch) => {
    try {
      const response = await axios.get('/api/property/getall');
      console.log(response)
      dispatch({
        type: GET_ALL_PROPERTIES,
        payload: response.data,
      });
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };