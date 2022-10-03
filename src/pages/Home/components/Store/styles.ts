import styled from "styled-components";


export const StoreContainer = styled.div`
   margin: 8.75rem 0 2.125rem 0;
   
   h1{
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
   }
`;

export const CoffeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
`
