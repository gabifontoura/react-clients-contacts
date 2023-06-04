import styled from "styled-components";

export const StyledDashboard = styled.main`
    background-color: var(--color-grey-900);
    display: flex;
    flex-direction: column;
    border: none;
    width: 100vw;
    min-height: 100vh;
    height: max-content;
`;

export const Container = styled.main`
    display: flex;
    justify-content: space-between;
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    flex-direction: column;
    padding: 2rem;
    gap:1rem;
   
   

    .profile {
        background-color: var(--color-grey-1000);
        border-radius: var(--radius-1);
        margin-top: 1rem;
        padding: 1rem 2rem 2rem 2rem;
        display: flex;
        flex-direction: column;
        gap:1.5rem;
        max-width: 1100px;
        width: max-content;

        @media (max-width: 1000px) {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
        }
   
    }

    .add{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
    }


    header {
        display: flex;
        justify-content: space-between;
    }

    section{
        display: flex;
        justify-content: space-between;
        gap:2rem;

        @media (max-width: 1000px) {
            flex-direction: column;
            gap: 0.5rem;
        }
    }

    .users{
        display: flex;
        flex-direction: column;
        padding: 2rem 0;
        align-items: center;

    }


    .card{
        margin: 1rem 0 0 1.5rem;
        align-self: center;
    }

`;


