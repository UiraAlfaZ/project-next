const initialState = {
  pekerja: [],
};

const pekerjaReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_PEKERJA") {
    return {
      ...state,
      pekerja: action.payload,
    };
  } else if (action.type === "CREATE_WORKER") {
    return state;
  } else {
    return state;
  }
};

export default pekerjaReducer;