import styled from 'styled-components';

const Wrapper = styled.div`
  width: 80%;
  margin: 2rem auto;

  input {
    color: var(--gray-700);
  }
  input ::after {
    z-index: 100;
  }
`;

export default Wrapper;
