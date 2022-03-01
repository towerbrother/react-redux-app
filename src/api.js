import { getDate } from "./utils/dates";

const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URL = "https://api.rawg.io/api/";
const API_KEY_URL = `?key=${API_KEY}`;

export const POPULAR_GAMES_URL = `${BASE_URL}games${API_KEY_URL}&dates=${getDate(
  -1
)},${getDate()}&ordering=-rating&page_size=10`;
