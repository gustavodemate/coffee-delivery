import { ReactNode } from "react";
import { IconContainer, InfoIconContainer } from "./styles";



interface InfoIconProps {   
    icon: ReactNode;
    text: string | ReactNode;
    bg?: string;
}




export function InfoIcon({icon, text, bg}: InfoIconProps){
    return(
        <InfoIconContainer bg={bg}> 
            <IconContainer>{icon} <p>{text}</p></IconContainer>
        </InfoIconContainer>
        
    )
}