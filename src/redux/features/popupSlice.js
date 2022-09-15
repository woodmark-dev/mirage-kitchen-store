const initialState = false;

const togglePopupReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case "togglePopup": {
      return !state;
    }
    default:
      return state;
  }
};

export default togglePopupReducer;
