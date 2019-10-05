import {
  GET_COUNTRIES,
  ADD_COUNTRY,
  DELETE_COUNTRY,
  UPDATE_COUNTRY
} from './countriesTypes';

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      };
    case ADD_COUNTRY:
      return {
        ...state,
        countries: [action.payload, ...state.countries]
      };
    case DELETE_COUNTRY:
      // console.log('deleteCountry fired', action.payload);
      return {
        ...state,
        countries: state.countries.filter(
          country => country.id !== action.payload
        )
      };
    case UPDATE_COUNTRY:
      return {
        ...state,
        countries: state.countries.map(country =>
          country.id === action.payload.id ? action.payload : country
        )
      };
    default:
      return state;
  }
};
