import { FETCH_EMPLOYEES } from '../actions/actionTypes';

const initialState = [
  {
    id: 1,
    name: 'Kermie',
    day_of_birth: '4/9/1999',
    country: 'Philippines',
    salary: 1648.51,
  },
  {
    id: 2,
    name: 'Ealasaid',
    day_of_birth: '1/30/1973',
    country: 'Sweden',
    salary: 875.32,
  },
  {
    id: 3,
    name: 'Chrystel',
    day_of_birth: '1/27/1979',
    country: 'Indonesia',
    salary: 1424.75,
  },
];

const fetchEmployees = (state) => state.slice();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return fetchEmployees(state);
    default:
      return state;
  }
};

export default reducer;
