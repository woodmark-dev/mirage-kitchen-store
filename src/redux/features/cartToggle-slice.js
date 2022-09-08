const initialState = false;

const cartToggleReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "toggleCart": {
      return !state;
    }
    default:
      return state;
  }
};

export default cartToggleReducer;
