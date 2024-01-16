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
    max-width:800px;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 20px;
    p + p {
      margin-top: 1em;
    }
  }

  .links {
    display: flex;
    align-items: center;
    gap: 18px;
    a {
      display: flex;
      align-items: center;
      color: #fff;
      font-weight: 400;
      text-decoration: none;
      &:hover, &:focus {
        text-decoration: underline;
      }
      svg {
        margin-top: -2px;
        margin-right: 2px;
        color: #fff;
      }
    }
  }
  @media (max-width: 768px) {
    .profile {
      width: 130px;
      height: 130px;
    }
    .title {
      h1 {
        font-size: 35px;
      }
      h3 {
        font-size: 16px;
      }
    }
  }
`;

export default Wrapper;