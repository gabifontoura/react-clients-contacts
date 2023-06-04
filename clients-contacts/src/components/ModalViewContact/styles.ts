import styled from "styled-components";

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  overflow-y: scroll;
  height: 10rem;
  border: solid 1px var(--color-blue-800);
  width: 90%;
  margin: 2rem 0;
  height: max-content;
  max-height: 10rem;
`;

export const StyledContactsCardModal = styled.li`
  border: solid 1px var(--color-blue-800);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  padding: 0.01rem 1.5rem;

  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.25rem 0;
  }

  .contacts {
    display: flex;
    gap: 1rem;
    justify-content: end;
    width: 80%;
    padding: 0.5rem;
    align-items: center;
    
    @media (max-width: 1000px) {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
        }
  }
`;
