import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #fff;
  
`;

export const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 0;

  .title {
    text-align: center;
    h1 {
      display: flex;
      flex-direction: column;
      margin: 0;
      font-size: 50px;
      font-weight: 600;
      line-height: .9;
      span:last-child {
        margin-left: 70px;
      }
    }
    h3 {
      margin-bottom: 20px;
    }
  }
  .profile {
    overflow: hidden;
    border-radius: 50%;
    width: 175px;
    height: 175px;
    box-shadow: 0 4px 6px rgba(0,0,0, .3);
    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
      height: 100%;
    }
  }

  .description {
    text-align: center;
    max-width:800px;
    font-weight: 200;
    
    margin-bottom: 20px;
  }
  
`;