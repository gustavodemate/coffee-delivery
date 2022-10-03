import { Repeat } from "phosphor-react";
import styled from "styled-components";
import Background from '../../assets/Background.svg'
import { rgba } from 'polished'


export const IntroContainer = styled.div`
    width: 100%;
   display: flex;
   justify-content: space-between; 
`

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;


export const SidebarContainer = styled.div`
    max-width: 36.75rem;
    height: 12rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 4.12rem;

    h1{
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 3rem;
        line-height: 3.9rem;
        color: ${props => props.theme.colors['base-title']};
        
    }

    p{
        font-size: 1.25rem;
    }

`;

export const SidebarIconsContainer = styled.div`
    max-width: 36.75rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;   
`;





    



