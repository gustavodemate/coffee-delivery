import styled from "styled-components";



export const TitleSelectCoffeesContainer = styled.div`
    font-size: 1.125rem;
    color: ${props => props.theme.colors['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    line-height: 130%;
    font-weight: 700;
    display: flex;
    margin: 0 0 0.9375rem 2rem;

   

`;


export const SelectCoffeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    width: 28rem;
    background: ${props => props.theme.colors['base-card']};
    border-radius: 6px 44px;
    margin-left: 2rem;
`;