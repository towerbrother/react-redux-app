import axios from "axios";
import { popularGamesUrl } from "../api";

export const fetchPopularGames = () => async (dispatch) => {
  const popularGames = await axios.get(popularGamesUrl);
  dispatch({
    type: "FETCH_POPULAR_GAMES",
    payload: {
      popularGames: popularGames.data.results,
    },
  });
};
