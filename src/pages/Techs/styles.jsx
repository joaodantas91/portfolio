import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  padding: 25px 10px;
  transition: all .1s;

  h2 {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 0;
    font-size: 50px;
    font-weight: 600;
    line-height: .9;
    margin-bottom: 40px;
  }

  .techs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto 30px;
    width: 500px;
    max-width: 100%;
    &:last-child {
      margin-bottom: 0;
    }

    .tech {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33.334%;
      height: 100px;
      margin-bottom: 20px;
      img {
        height: auto;
        width: auto;
        max-height: 90%;
        max-width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 40px;
    }
    .techs {
      .tech {
        width: 50%;
        img {
          max-height: 85%;
          max-width: 85%;
        }
      }
    }
  }
`;