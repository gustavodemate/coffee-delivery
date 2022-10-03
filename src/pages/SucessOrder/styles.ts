import styled from "styled-components";


export const SuccessOrderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70rem;
    height: 100%;
    margin: 5rem auto;
    
    img{
        width: 30.75rem;
        height: 18.3125rem;
        margin-top: 6.25rem;
    }
`;


export const TitleSucessOrderContainer = styled.div`
    gap: 0.25rem;

    h1{
        color: ${props => props.theme.colors['yellow-dark']};
        font-size: 2rem;
        font-weight: 800;
        font-family: 'Baloo 2', sans-serif;
        line-height: 130%;
        font-style: normal;
    }

    p{
        line-height: 130%;
        font-style: normal;
        font-size: 1.25rem;
    }   
`

export const OrderInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    width: 32.875rem;
    height: 16.875rem;
    gap: 2rem;
    border-radius: 6px 36px;
    padding: 2.5rem;
    position: relative;
    background: ${props => props.theme.colors['background']};

    &::before{
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: 7px 37px;
        background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
        z-index: -1;

    }
    
    span{
        color: ${props => props.theme.colors['base-text']}
    }

`




