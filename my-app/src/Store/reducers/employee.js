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
