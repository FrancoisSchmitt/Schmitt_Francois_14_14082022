/**
 * @const employee switch to know if ADD_EMPLOYEE is called if it is the case we iterate in the table data
 */
const initialState = {
      data: [],
};

const employee = (state = initialState, action) => {
      switch (action.type) {
            case 'ADD_EMPLOYEE':
                  return {
                        ...state,
                        data: [...state.data, action.message],
                  };
            default:
                  return state;
      }
};

export default employee;
