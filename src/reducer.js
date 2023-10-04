// reducer.js
const reducer = (state, action) => {
    switch (action.type) {
      case "NEXT_PAGE":
        return { ...state, page: state.page + 1 };
      case "PREV_PAGE":
        return { ...state, page: state.page - 1 };
      default:
        return state;
    }
  };
  const initialState = {
    page: 1, // Initialize with the default page value
    nbPages: 0,
  };
  export { reducer, initialState };