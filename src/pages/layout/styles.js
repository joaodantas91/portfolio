import styled from 'styled-components';

const Layout = styled.div`
  background-color: #535557;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

export default Layout;
