import styled from "styled-components";


export const CoffeCounterContainer = styled.div`
        width: 4.5rem;
        height: 2.375rem;
        background: ${props => props.theme.colors['base-button']};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        gap: 0.25rem;
        


       
        
        input{
            width: 1.25rem;
            height: 1.3125rem;
            border: none;
            color: ${props => props.theme.colors['base-title']};
            text-align: center;
            background: ${props => props.theme.colors['base-button']};
            

           
        }

        button{
            color: ${props => props.theme.colors['purple']};
            border: none;
            cursor: pointer;
            background: ${props => props.theme.colors['base-button']};
        }
    
    

`;


