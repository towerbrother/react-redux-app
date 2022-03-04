import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Game from "./Game";
import GameDetails from "./GameDetails";
import { fetchGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  const { popularGames, upcomingGames, newGames } = useSelector(
    (state) => state.games
  );

  return (
    <StyledGameList>
      {pathId && <GameDetails />}
      <h2>Upcoming Games</h2>
      <StyledGames>
        {upcomingGames.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </StyledGames>
      <h2>Popular Games</h2>
      <StyledGames>
        {popularGames.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </StyledGames>
      <h2>New Games</h2>
      <StyledGames>
        {newGames.map((game) => (
          <Game
            key={game.id}
            id={game.id}
            name={game.name}
            released={game.released}
            image={game.background_image}
          />
        ))}
      </StyledGames>
    </StyledGameList>
  );
};

const StyledGameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const StyledGames = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
