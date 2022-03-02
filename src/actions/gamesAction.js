import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

export const fetchGames = () => async (dispatch) => {
  const popularGames = await axios.get(popularGamesUrl);
  const upcomingGames = await axios.get(upcomingGamesUrl);
  const newGames = await axios.get(newGamesUrl);

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popularGames: popularGames.data.results,
      upcomingGames: upcomingGames.data.results,
      newGames: newGames.data.results,
    },
  });
};
