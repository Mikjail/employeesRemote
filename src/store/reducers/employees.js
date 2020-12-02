import { CREATE_EMPLOYEE, FETCH_EMPLOYEES, EDIT_EMPLOYEE } from '../actions/actionTypes';

export const initialState = [
  {
    id: 1,
    name: 'Kermie Hills',
    jobTitle: 'Manager',
    dateOfBirth: '4/9/1999',
    country: 'Philippines',
    salary: 1648.51
  },
  {
    id: 2,
    name: 'Ealasaid Doe',
    jobTitle: 'QA',
    dateOfBirth: '1/30/1973',
    country: 'Sweden',
    salary: 875.32
  },
  {
    id: 3,
    name: 'Chrystel Kornel',
    jobTitle: 'Software Engineer',
    dateOfBirth: '1/27/1979',
    country: 'Indonesia',
    salary: 1424.75
  }
];

const fetchEmployees = (state) => state.slice();

const addEmployee = (state, action) => ([...state, action.payload]);

const editEmployee = (state, action) => {
  const indexEmployee = state.findIndex((empl) => (empl.id === action.payload.id));
  state.splice(indexEmployee, 1);
  return [...state, action.payload];
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EMPLOYEES:
      return fetchEmployees(state);
    case CREATE_EMPLOYEE:
      return addEmployee(state, action);
    case EDIT_EMPLOYEE:
      return editEmployee(state, action);
    default:
      return state;
  }
};

export default reducer;
