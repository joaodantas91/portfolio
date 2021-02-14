import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #535557;
  width: calc(100% - 80px);
  height: 100%;
  top: 0;
  right: 0;
  color: #fff;

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 80px;
  }
`;





export default Container;