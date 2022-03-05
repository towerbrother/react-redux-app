import { getDate } from "./utils/dates";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.rawg.io/api/";

export const popularGamesUrl = `${BASE_URL}games?key=${API_KEY}&dates=${getDate(
  -1
)},${getDate()}&ordering=-rating&page_size=9`;

export const upcomingGamesUrl = `${BASE_URL}games?key=${API_KEY}&dates=${getDate()},${getDate(
  1
)}&ordering=-added&page_size=9`;

export const newGamesUrl = `${BASE_URL}games?key=${API_KEY}&dates=${getDate(
  -1
)},${getDate()}&ordering=-released&page_size=9`;

export const searchedGamesUrl = (name) =>
  `${BASE_URL}games?key=${API_KEY}&search=${name}&page_size=9`;

export const getGameDetailsUrl = (id) =>
  `${BASE_URL}games/${id}.json?&key=${API_KEY}`;

export const getGameScreenshotUrl = (id) =>
  `${BASE_URL}games/${id}/screenshots?&key=${API_KEY}`;
