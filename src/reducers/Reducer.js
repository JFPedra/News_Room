const reducer = (state, action) => {
  switch (action.type) {
    case "HOME":
      state = action.payload;
      break;
    default:
      break;
  }
  return state;
};

export default reducer;
