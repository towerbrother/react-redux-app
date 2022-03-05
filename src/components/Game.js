import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGameDetails } from "../actions/gameDetailsAction";
import { smallImage } from "../utils/resize";
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({ id, name, released, image }) => {
  const dispatch = useDispatch();
  const handleLoadGameDetails = () => {
    document.body.style.overflow = "hidden";
    dispatch(fetchGameDetails(id));
  };

  return (
    <StyledGame onClick={handleLoadGameDetails}>
      <Link to={`/games/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
