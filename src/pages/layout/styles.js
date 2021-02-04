import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #535557;
  height: 100vh;
  width: calc(100vw - 80px);
  margin-left: 80px;
  h1 {
    color: #fff;
    font-size: 80px;
    line-height: 0.9em;
    display: flex;
    flex-direction: column;
    span:last-child {
      margin-left: 70px;
    }
  }

  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 450ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-in;
  }
`;

export default Container;
