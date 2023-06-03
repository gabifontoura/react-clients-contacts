import styled from "styled-components";
export const StyledLoading = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-900);

  .loading {
    color: white;
    width: 3rem;
    height: 3rem;
    animation: spinner 10s infinite linear;
  }

  @keyframes spinner {
    0% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;