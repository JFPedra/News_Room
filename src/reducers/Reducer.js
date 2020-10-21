const initialState = null;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOME":
      state = action.news;
      break;
    case "CATEGORY":
      state = action.news;
      break;
    case "CLEAR":
      state = null;
      break;
    default:
      break;
  }
  return state;
};

export default reducer;
