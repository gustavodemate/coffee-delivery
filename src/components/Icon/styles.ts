import { ReactNode } from "react";
import styled, { ThemeConsumer } from "styled-components";


interface IconContainerProps{
    bg?: string;
    text?: string | ReactNode;
}

export const InfoIconContainer = styled.div<IconContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    gap: 0.75rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;


    
    background: ${({bg}) => bg};

    p{
        display: flex;
        flex-direction: row;
        position: absolute;
        margin-left: 2.18rem;
    }

`

export const IconContainer = styled.div`
    color: ${props => props.theme.colors['base-card']};
    display: flex;
    align-items: center;

    p{
        color: ${props => props.theme.colors['base-subtitle']};
    }
    `
