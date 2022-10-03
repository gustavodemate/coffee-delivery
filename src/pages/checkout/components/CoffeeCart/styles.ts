import styled from "styled-components";



export const CoffeeCartContainer = styled.div`
    display: flex;
    width: 23rem;
    border-bottom: 1px solid ${props => props.theme.colors['base-button']};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    
    

    img{
        width: 4rem;
        height: 4rem;
        margin-right: 1.25rem;
    }

    span{
        color: ${props => props.theme.colors['base-text']};
        font-weight: 700;
        line-height: 130%;
    }

    
`;

export const SelectedCoffeeInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-right: 3.125rem;
    
    

`;

export const ActionsContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    
`;


export const ButtonRemoveContainer = styled.button`
    width: 5.68rem;
    height: 2rem;
    font-size: 0.75rem;
    line-height: 160%;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    border-radius: 6px;
    background: ${props => props.theme.colors['base-button']};
    border: none;
    color: ${props => props.theme.colors['base-text']};
    cursor: pointer;


    &:hover{
        background: ${props => props.theme.colors['base-hover']};
        transition: 0.1s;
    }
`;
