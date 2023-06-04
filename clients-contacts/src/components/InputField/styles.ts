import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const StyledInput = styled.input`
  border: 1px solid var( --color-blue-900);
  border-radius: var(--radius-1);
  background-color: var( --color-grey-900);
  color: var( --color-grey-100);
  padding: 0 1rem;
  height: 3rem;
  width: 100%;
  font-size: 1rem;

  &:focus {
    outline: 2px solid var( --color-blue-900);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
