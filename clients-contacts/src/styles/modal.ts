import styled from "styled-components";

export const StyledModalBg = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.65);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  
`;

export const StyledModalBox = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  padding-bottom: 2rem;
  max-height: 30rem;
  min-width: 20rem;
  background-color: var(--color-grey-900);
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-2);
  width:fit-content;


  .modal-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1.5rem 1.5rem 1.5rem 2rem;
    align-items: baseline;

  }

  .line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        
    }

  .icon{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      padding: 1rem 0 0 0 ;
      
  }


`;