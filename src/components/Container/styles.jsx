import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #535557;
  ${(props)=> {
    console.log(props.ref);
  }}
  height: fit-content;
  top: 0;
  right: 0;
  color: #fff;
`;





export default Container;