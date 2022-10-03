import styled from "styled-components";



export const ConfirmationSectionContainer = styled.div`
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        
        > div{
            display: flex;
            align-items: center;
            justify-content: space-between;            
        }
`

export const TotalTextContainer = styled.div`
        font-weight: 700;
        font-size:  1.25rem;
        line-height: 130%;
    
`;


export const ButtonConfirmOrderContainer = styled.button`
    padding: 0.75rem 2.8rem;
    margin-top: 1.5rem;
    width: 23rem;
    background: ${props => props.theme.colors['yellow']};
    color: ${props => props.theme.colors['white']};
    border-radius: 6px;
    border: none;
    font-size: 0.875rem;
    align-items: center;
    cursor: pointer;

    &:hover{
        background: ${props => props.theme.colors['yellow-dark']};
        transition: 0.1s;
    }
`