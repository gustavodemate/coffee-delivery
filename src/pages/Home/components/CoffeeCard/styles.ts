import styled from "styled-components";

export const CoffeeListContainer = styled.div`
    max-width: 16rem;
    max-height: 19.375rem;
    background: ${props => props.theme.colors['base-card']};
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 130%;
    text-align: center;
    

    img{
        width: 7.5rem;
        height: 7.5rem;
    }

    h2{
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    p{
        font-size: 0.875rem;
        color: ${props => props.theme.colors['base-label']};
        margin: 0 1.25rem 2.0625rem 1.25rem;
        
    }
    
`;

export const PriceContainer = styled.div`
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    margin-right: 0.9375rem;
    line-height: 1.125rem;
    color: ${props => props.theme.colors['base-text']};
    font-weight: 700;
    
    
    
    span::before{
        content: 'R$';
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        color: ${props => props.theme.colors['base-text']};
        margin-right: 0.25rem;
        

    }
`;


export const TagCoffeeContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    margin: 0.75rem 0 1rem 0;
    align-items: center;
    justify-content: center;
    

    span{
        width: 4.3rem;
        height: 1.312rem;
        background: ${props => props.theme.colors['yellow-light']};
        border-radius: 100px;
        font-size: 0.625rem;
        font-weight: 700;
        color: ${props => props.theme.colors['yellow-dark']};                
    }
       
`;


export const BuyCoffeeContainer = styled.div`
    width: 13rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
`;

export const ButtonBuyContainer = styled.button`
    width: 2.375rem;
    height: 2.375rem;
    background: ${props => props.theme.colors['purple-dark']};
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    color: ${props => props.theme.colors['base-card']};
    margin-left: 0.5rem;
    cursor: pointer;

    &:hover{
        background: ${props => props.theme.colors['purple']};
        transition: 0.1s;
        
    }
`;
