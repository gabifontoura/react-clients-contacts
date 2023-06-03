import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: transparent;
  border: 2px solid var(--color-grey-600);
  border-radius: var(--radius-2);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;
  width: 100%;
  max-width: 30rem;
  color: var(--color-grey-600);
  align-self: center;

    .main-nav-active {
    color: var(--color-grey-100);
    text-align: center;
    background-color: var(--color-grey-800);
    height: 3rem;
    justify-content: center;
    padding: 0.75rem;
    border-radius: var(--radius-2);
    font-size: 1.4rem;
    text-decoration: none;
    transition: 0.4s;
    &:hover {
            background-color:var(--color-blue-100);
            color: #000;
          }
  }

  
`;