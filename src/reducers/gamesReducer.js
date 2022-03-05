const initState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
  searchedGames: [],
};

const gamesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popularGames: action.payload.popularGames,
        upcomingGames: action.payload.upcomingGames,
        newGames: action.payload.newGames,
      };
    case "SEARCH_GAMES":
      return {
        ...state,
        searchedGames: action.payload.searchedGames,
      };
    case "CLEAR_SEARCHED_GAMES":
      return {
        ...state,
        searchedGames: [],
      };
    default:
      return { ...state };
  }
};

export default gamesReducer;
