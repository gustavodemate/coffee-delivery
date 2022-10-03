import { ReactNode } from "react";
import { AdressTitleContainer } from "./styles";


interface AdressTitlePros{
    icon: ReactNode;
    title: string;
    subtitle: string;
}

export function AdressTitle({icon, title, subtitle}: AdressTitlePros) {
    return(
        <AdressTitleContainer>
            {icon}
            <div>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </AdressTitleContainer>
    )
}