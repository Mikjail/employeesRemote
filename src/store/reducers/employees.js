import { FETCH_EMPLOYEES } from '../actions/actionTypes';

export const initialState = [
  {
    id: 1,
    name: 'Kermie Hills',
    jobTitle: 'Manager',
    dayOfBirth: '4/9/1999',
    country: 'Philippines',
    salary: 1648.51
  },
  {
    id: 2,
    name: 'Ealasaid Doe',
    jobTitle: 'QA',
    dayOfBirth: '1/30/1973',
    country: 'Sweden',
    salary: 875.32
  },
  {
    id: 3,
    name: 'Chrystel Kornel',
    jobTitle: 'Software Engineer',
    dayOfBirth: '1/27/1979',
    country: 'Indonesia',
    salary: 1424.75
  }
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
