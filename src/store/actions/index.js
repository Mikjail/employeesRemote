import { CREATE_EMPLOYEE, FETCH_EMPLOYEES, EDIT_EMPLOYEE } from './actionTypes';

export const fetchEmployees = () => ({
  type: FETCH_EMPLOYEES
});

export const createEmployees = (employee) => ({
  type: CREATE_EMPLOYEE,
  payload: employee
});

export const editEmployee = (employee) => ({
  type: EDIT_EMPLOYEE,
  payload: employee
});
