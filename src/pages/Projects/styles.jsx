import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1110px;
  max-width: 100%;
  margin: 0 auto;
  padding: 25px 10px;
  h2 {
    text-align: center;
    margin: 0;
    font-size: 50px;
    font-weight: 600;
    line-height: .9;
    margin-bottom: 40px;
  }
  .frames {
    display: flex;
    flex-wrap: wrap;
    .frame {
      backface-visibility: hidden;
      height: fit-content;
      display: flex;
      flex-direction: column;
      width: calc(33.334% - 40px);
      margin: 0 20px;
      margin-bottom: 20px;
      box-shadow: 0 0px 6px rgba(0,0,0,.2);
      transition: all .2s;
      &:hover { 
        transform: scale(1.04)
      }
      img {
        backface-visibility: hidden;
      }
      .frame-img {
        width: 130px;
        max-width: 100%;
        margin: 5px 0 5px 5px;
      }
      .project {
        width: 100%;
        height: auto;
      }
    }
  }
  @media (max-width: 992px) {
    .frames {
      .frame {
        width: calc(50% - 40px);
      }
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 35px;
    }
  }
  @media (max-width: 576px) {
    .frames {
      .frame {
        width: calc(100% - 40px);
      }
    }
  }
`;