import {
  GET_COUNTRIES,
  ADD_COUNTRY,
  DELETE_COUNTRY,
  UPDATE_COUNTRY
} from './countriesTypes';

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      console.log('getCountries fired');
      break;
    case ADD_COUNTRY:
      console.log('addCountry fired', action.payload);
      break;
    case DELETE_COUNTRY:
      console.log('deleteCountry fired', action.payload);
      break;
    case UPDATE_COUNTRY:
      console.log('updateCountry fired');
      break;
    default:
      console.log('default fired');
  }
};
