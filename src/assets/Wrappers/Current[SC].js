import styled from 'styled-components';

const Wrapper = styled.div`
  width: min(500px, 100%);
  background-color: #32373d;
  margin: auto;
  margin-top: 1rem;
  padding: 2rem 0;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
  box-shadow: var(--shadow-3);
  @supports (backdrop-filter: blur(1rem)) {
    -webkit-backdrop-filter: blur(1rem);
    backdrop-filter: blur(1rem);
    background-color: hsla(0, 0%, 100%, 0.1);
  }

  .date-city {
    width: 100%;
    margin: auto;
    text-align: center;
    -webkit-backdrop-filter: blur(1rem);
    backdrop-filter: blur(1rem);
    background-color: hsla(0, 0%, 100%, 0.2);
    padding: 1rem;
    > :first-child {
      color: var(--gray-600);
      font-size: 0.85rem;
      font-weight: 600;
      color: ${(props) => props.mainTempColor};
    }
    > :last-child {
      font-size: 2rem;
      font-weight: 700;
      color: white;
      text-shadow: #495057 1px 1px 1px;
    }
  }
  .main {
    display: flex;
    padding: 1rem 1rem 0 1rem;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 55em) {
      justify-content: space-between;
    }
    > :first-child {
      img {
        width: 175px;
        @media (max-width: 55em) {
          width: 150px;
        }
      }
    }

    .temperatureInfo {
      text-align: center;
      .temp {
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
        color: var(--gray-700);
        color: ${(props) => props.mainTempColor};
      }
      .temp_max {
        font-size: 1.25rem;
        letter-spacing: 0.1rem;
        color: var(--gray-700);
        color: ${(props) => props.mainTempColor};
      }
      .temp_min {
        opacity: 0.5;
      }
      .desc {
        font-size: 1.25rem;
        letter-spacing: 0.1rem;
        color: ${(props) => props.mainTempColor};
        text-transform: capitalize;
        font-weight: 700;
      }
      .otherInfo {
        padding: 1rem;
        display: flex;
        justify-content: center;
        font-size: 0.85rem;
        gap: 0.75rem;
        color: ${(props) => props.mainTempColor};
        img {
          color: ${(props) => props.mainTempColor};
        }
        > .div {
          display: flex;
          flex-direction: column;
        }
        img {
          width: 24px;
          margin: 0;
        }
        p {
          line-height: 0.5rem;
        }
      }
      .sun {
        font-size: 0.85rem;
        display: flex;
        justify-content: center;
        gap: 1.75rem;
        margin-top: 0.5rem;
        color: ${(props) => props.secondColor};
      }
      @media (max-width: 24em) {
        .temp_max {
          font-size: 1rem;
        }
        .otherInfo {
          padding: 0.85rem;
          font-size: 0.75rem;
          gap: 0.5rem;

          p {
            line-height: 0.75rem;
          }
        }
      }
    }
  }
  :hover {
    box-shadow: var(--shadow-5);

    transition: all 0.5s ease-in-out;
  }
  :not(:hover) {
    transition: all 0.5s ease-in-out;
  }
`;

export default Wrapper;
