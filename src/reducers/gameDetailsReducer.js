const initState = {
  game: {},
  screenshot: {},
};

const gameDetailsReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAME_DETAILS":
      return {
        ...state,
        game: action.payload.game,
        screenshot: action.payload.screenshot,
      };
    default:
      return { ...state };
  }
};

export default gameDetailsReducer;
