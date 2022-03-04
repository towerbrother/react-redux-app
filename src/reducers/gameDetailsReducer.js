const initState = {
  game: { platforms: [] },
  screenshot: { results: [] },
  isLoading: true,
};

const gameDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAME_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screenshot: action.payload.screenshot,
        isLoading: false,
      };
    case "LOADING_DETAILS":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
