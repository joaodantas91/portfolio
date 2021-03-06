import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  margin: 15px 0;
  @media (max-width: 768px) {
    margin: 0 15px;
  }
`;

export const Navbar = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333;
  left: 0;
  top: 0;
  height: 100vh;
  width: 80px;
  box-shadow: 0 6px 12px #2b2b2b;
  z-index: 9;
  .active {
    &>div { //Navbar Button
      box-shadow: inset 6px 6px 12px #2b2b2b, inset -6px -6px 12px #3b3b3b; 
      animation-play-state: paused;
    }
  }
  
  a {
    text-decoration: none;
    width: fit-content;
  }
  ${({beforeItem, currentItem})=>`#a${beforeItem}`} {
    &>div { //Navbar Button
      box-shadow: inset 6px 6px 12px #2b2b2b, inset -6px -6px 12px #3b3b3b; 
      animation-name: shadowOuter;
      animation-play-state:running;
    }
  }
  ${({beforeItem, currentItem})=>`#a${currentItem}`}.active {
    &>div { //Navbar Button
      animation-name: shadowInset;
      animation-play-state:running;
    }
  }
  @media (max-width: 768px) {
    flex-direction: row;
    top: auto;
    bottom: 0;
    height: 80px;
    width: 100vw;
  }
`; 

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 45px;
  width: 45px;
  border-radius: 8px;
  border-radius: 8px;
  border-radius: 8px;
  border-radius: 8px;
  background: #333333;
  box-shadow: 6px 6px 12px #2b2b2b, -6px -6px 12px #3b3b3b;
  animation-fill-mode: forwards;
  animation-duration: .4s;
  animation-iteration-count: 1;
  
  @keyframes shadowInset {
    0% {
      box-shadow: 6px 6px 12px #2b2b2b, -6px -6px 12px #3b3b3b;     
    }

    50% {
      box-shadow: 0px 0px 0px #2b2b2b, 0px 0px 0px #3b3b3b;
    }

    51% {
      box-shadow: inset 0px 0px 0px #2b2b2b, inset 0px 0px 0px #3b3b3b;
    }

    100% {
      box-shadow: inset 6px 6px 12px #2b2b2b, inset -6px -6px 12px #3b3b3b;
    }
  }

  @keyframes shadowOuter {
    0% {
      box-shadow: inset 6px 6px 12px #2b2b2b, inset -6px -6px 12px #3b3b3b;
    }

    50% {
      box-shadow: inset 0px 0px 0px #2b2b2b, inset 0px 0px 0px #3b3b3b;
    }

    51% {
      box-shadow: 0px 0px 0px #2b2b2b, 0px 0px 0px #3b3b3b;
    }

    100% {
      box-shadow: 6px 6px 12px #2b2b2b, -6px -6px 12px #3b3b3b;
    }
  }
`; 