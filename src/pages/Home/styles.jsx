import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 10px;

  .title {
    text-align: center;
    h1 {
      display: flex;
      flex-direction: column;
      margin: 0;
      font-size: 50px;
      font-weight: 600;
      line-height: .9;
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
    margin-bottom: 25px;
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
    p:first-child {
      text-align: center;
    }
  }

  .links {
    display: flex;
    align-items: center;
    a {
      margin: 0 3px;
      svg {
        height: 35px;
        width: auto;
        color: #fff;
        &:first-child {
          margin-left: -5.5px
        }
      }
    }
  }
`;

export default Wrapper;