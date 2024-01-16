import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1400px;
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
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    flex-wrap: wrap;
    gap: 20px;
    .frame {
      backface-visibility: hidden;
      height: fit-content;
      display: flex;
      flex-direction: column;
      box-shadow: 0 0px 6px rgba(0,0,0,.2);
      transition: all .2s;
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
        object-fit: cover;
        object-position: center top;
        aspect-ratio: 16/9;
      }
    }
  }
  @media (max-width: 992px) {
    .frames {
      
    }
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 35px;
    }
  }
  @media (max-width: 576px) {
    .frames {
     
    }
  }
`;