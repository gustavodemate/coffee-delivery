import styled from "styled-components";

export const HeaderContainer = styled.header `
    max-width: 70rem;
    height: 6.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 2rem 0;

    nav{
        display: flex;
        gap: 0.75rem;     
    }

    
`;

export const IconMap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 8.937rem;
    height: 2.375rem;
    background: ${props => props.theme.colors['purple-light']};
    gap: 0.25rem;
    padding: 0.5rem;
    border-radius: 6px;

    p {
        font-size: 0.875rem;
        color: ${props => props.theme.colors['purple-dark']};
    }

`

export const IconShopping = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    width: 2.375rem;
    height: 2.375rem;
    background: ${props => props.theme.colors['yellow-light']};
    border-radius: 6px;
    position: relative;

    span{
        position: absolute;
        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;
        top: calc(-1.25rem / 2);
        right: calc(-1.25rem / 2);
        color: ${props => props.theme.colors['background']};

        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: 700;
        background: ${props => props.theme.colors['yellow-dark']};
    }

`