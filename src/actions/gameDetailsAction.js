import axios from "axios";
import { getGameDetailsUrl, getGameScreenshotUrl } from "../api";

export const fetchGameDetails = (id) => async (dispatch) => {
  const detailsData = await axios.get(getGameDetailsUrl(id));
  const screenshotData = await axios.get(getGameScreenshotUrl(id));

  dispatch({
    type: "FETCH_GAME_DETAILS",
    payload: {
      game: detailsData.data,
      screenshot: screenshotData.data,
    },
  });
};
