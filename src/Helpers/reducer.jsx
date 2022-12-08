const reducer = (state, action) => {
  
    if (action.type === "GET_PROJECTS") {
      return {
        ...state,
        Amovies: action.payload,
      };
    }

    if (action.type === "GET_SINGLE_PROJECTS") {
      return {
        ...state,
        Smovies: action.payload,
      };
    }
    if (action.type === "GET_DOWNLOAD_PROJECTS") {
      return {
        ...state,
        Sdownload: action.payload,
      };
    }
  
    return state;
  };
  
  export default reducer;
  