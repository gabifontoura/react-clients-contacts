import styled from "styled-components";

export const StyledContactCard = styled.ul`
  border: solid 1px var(--color-blue-800);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  padding: 0.01rem 1.5rem;

  &:hover {
    filter: brightness(1.2);
  }

  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .contacts {
    display: flex;
    gap: 1rem;
    justify-content: end;
    width: 60%;
    padding: 0.5rem;

  }
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin-top: 1rem;
  overflow-y: scroll;
  min-height: fit-content;
  max-height: 25rem;
  border: solid 1px var(--color-blue-800);
  width: 40rem;

  @media (max-width: 600px) {
    width: fit-content;
  }
`;
