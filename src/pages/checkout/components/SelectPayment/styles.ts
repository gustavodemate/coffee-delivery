import styled from "styled-components";


export const SelectPaymentContainer = styled.div`
    

    input{
        visibility: hidden;
        appearance: none;
        
    }

    input:checked + label div{
        background: ${props => props.theme.colors['purple-light']};
        border: 1px solid  ${props => props.theme.colors['purple-dark']};
        

        svg{
            color: ${props => props.theme.colors['purple']};;
        }
       
    }
    
`
export const ContentContainer = styled.div`
    width: 11.166rem;
    height: 3.18rem;
    background: ${props => props.theme.colors['base-button']};
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    color: ${props => props.theme.colors['base-text']};
    text-transform: uppercase;
    gap: 0.75rem;
    cursor: pointer;
    

    &:hover{
            background: ${props => props.theme.colors['purple-light']};
            border: 1px solid  ${props => props.theme.colors['purple-dark']};
        }   
`;