import styled from 'styled-components';

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
  a {
    text-decoration: none;
    width: fit-content;
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
  margin: 15px 0;
  border-radius: 8px;
  border-radius: 8px;
  border-radius: 8px;
  background: #333333;
  box-shadow: 6px 6px 12px #2b2b2b,
              -6px -6px 12px #3b3b3b;
`; 