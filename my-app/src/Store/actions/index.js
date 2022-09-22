import { ADD_EMPLOYEE } from './types';

export const addEmployee = (message) => ({
      type: ADD_EMPLOYEE,
      message,
});
