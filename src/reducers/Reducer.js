const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOME":
      state = action.news;
      break;
    default:
      break;
  }
  return state;
};

export default reducer;
