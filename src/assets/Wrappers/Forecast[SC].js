import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 2rem auto;
  width: fit-content;
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
  box-shadow: var(--shadow-3);
  @supports (backdrop-filter: blur(1rem)) {
    -webkit-backdrop-filter: blur(1rem);
    backdrop-filter: blur(1rem);
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  .singleCard {
    .dayShort {
      font-size: 1.25rem;
      letter-spacing: 0.1rem;
      color: var(--gray-700);
      color: ${(props) => props.mainTempColor};
    }
    img {
      width: 64px;
    }
    .temp_max {
      font-size: 1rem;
      color: ${(props) => props.mainTempColor};
    }
    .temp_min {
      opacity: 0.5;
    }
  }
  @media (max-width: 55em) {
    flex-direction: column;
    padding: 0 1rem;
    width: 100%;
    gap: 0;
    .singleCard {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${(props) => props.mainTempColor};
      padding: 1rem 0;
      .dayShort {
        font-size: 1.25rem;
        letter-spacing: 0.1rem;
      }
      img {
        width: 64px;
      }
      .temp_max {
        font-size: 1rem;
      }
      .temp_min {
        opacity: 0.5;
      }
    }
    .singleCard:last-child {
      border-bottom: none;
    }
  }
`;

export default Wrapper;
