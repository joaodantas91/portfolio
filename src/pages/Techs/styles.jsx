import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 25px 10px;

  h2 {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 0;
    font-size: 50px;
    font-weight: 600;
    line-height: .9;
  }

  .techs {
    display: flex;
    flex-wrap: wrap;
    .tech {
      padding: 5px;
      border: 1px solid #fff;
      border-radius: 5px;
      width: 70px;
      height: 70px;

      img {
        object-fit: cover;
        object-position: center;
        height: 100%;
        width: 100%;
      }
    }
  }
`;