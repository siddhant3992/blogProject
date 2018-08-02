const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST_FULFILLED":
      return state.concat([action.payload]);
    case "GET_POST_FULFILLED":
      var newState = Object.assign({}, state);
      newState = action.payload;
      return newState;
    case "EDIT_POST_FULFILLED":
      return state.map(
        post =>
          post.id === action.id ? { ...post } : post
      );
    case "DELETE_POST":
      return state.filter(post => post.id !== action.id);

    default:
      return state;
  }
};

export default reducer;
