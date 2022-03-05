import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchGames } from "../actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animations";
import logo from "../img/logo.svg";

const Nav = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    input !== ""
      ? dispatch(searchGames(input))
      : dispatch({ type: "CLEAR_SEARCHED_GAMES" });
    setInput("");
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo onClick={() => dispatch({ type: "CLEAR_SEARCHED_GAMES" })}>
        <img src={logo} alt="logo" />
        <h1>Gameland</h1>
      </StyledLogo>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    width: 60%;
  }

  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }

  @media (max-width: 767px) {
    padding: 1rem;
    width: 90vw;
    margin: 0 auto;

    h1 {
      font-size: 1.2rem;
    }

    img {
      height: 1.2rem;
      width: 1.2rem;
    }

    input {
      font-size: 1rem;
      padding: 0.4rem;
      margin-top: 0.8rem;
    }

    button {
      font-size: 1rem;
      padding: 0.4rem;
    }
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    height: 2rem;
    width: 2rem;
  }

  h1 {
    padding-left: 0.8rem;
  }

  @media (max-width: 767px) {
    padding: 0.6rem;

    img {
      height: 1.4rem;
      width: 1.4rem;
    }
  }
`;

export default Nav;
