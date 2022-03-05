import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGameDetails } from "../actions/gameDetailsAction";
import { smallImage } from "../utils/resize";
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../utils/animations";

const Game = ({ id, name, released, image }) => {
  const stringId = id.toString();
  const dispatch = useDispatch();
  const handleLoadGameDetails = () => {
    document.body.style.overflow = "hidden";
    dispatch(fetchGameDetails(id));
  };

  return (
    <StyledGame
      layoutId={stringId}
      onClick={handleLoadGameDetails}
      variants={popup}
      initial="hidden"
      animate="show"
    >
      <Link to={`/games/${id}`}>
        <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
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

  @media (max-width: 768px) {
    h3 {
      padding: 0.8rem;
      font-size: 1.2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export default Game;
