import styled from "styled-components";

export const StyledCard = styled.div`
  border: solid 1px var(--color-blue-900);
  border-radius: var(--radius-1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 16rem;
  padding: 0.5rem 0.35rem 1.75rem 1.5rem;
  flex-wrap: wrap;
  overflow: auto;

  .line {
    display: flex;
    gap: 0.8rem;
    align-items: center;
  }

  .edit {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 0.2rem;
  }
`;

export const ExtraInfoList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
  list-style: none;
  overflow-y: auto;
  max-height: 25rem;
  margin: 0.5rem;
`;
