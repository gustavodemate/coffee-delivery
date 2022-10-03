import styled from "styled-components";

export const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 130%;

    h1{
        font-size: 1.125rem;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        margin-bottom: 0.9375rem ;
    }
    

`;


export const FormContainer = styled.div`
    width: 40rem;
    height: 23.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: ${props => props.theme.colors['base-card']};
    padding: 2.5rem;
    border-radius: 6px;
    
`;

export const AdressContainer = styled.div`
    width: 100%;
    display: grid;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    margin-top: 2rem;
    

    input {
        max-width: 35rem;
        border: 1px solid ${props => props.theme.colors["base-button"]};
        background: ${props => props.theme.colors["base-input"]};
        padding: 0.75rem 0 0.75rem 0;
        border-radius: 4px;
        line-height: 130%;
        outline-color: ${props => props.theme.colors['yellow-dark']};
        color: ${props => props.theme.colors['base-text']};
        font-size: 0.875rem;
    }

   
    input::placeholder{
        color: ${props => props.theme.colors['base-label']};
        font-size: 0.875rem;
        
    }
    
    input:nth-child(1) {
        grid-column-start: 1 / 2;
    }
    input:nth-child(2) {
        grid-column: 1 / 6;
        width: 100%;
        
    }
    input:nth-child(3) {
        grid-column: 1 / 2; 
    }
    input:nth-child(4) {
        grid-column: 2 / 6;
        width: 21.75rem;
        
        
    }
    input:nth-child(5) {
        grid-column: 1 / 2;
    }
    input:nth-child(6) {
        width: 17.25rem;
        
    }
    input:nth-child(7) {
        width: 3.75rem;
    }
`;

export const PayContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40rem;
    height: 12.9375rem;
    background: ${props => props.theme.colors['base-card']} ;
    margin-top: 0.75rem;
    gap: 2rem;
    padding: 2.5rem;

`;


export const FormOfPaymentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    

`;
