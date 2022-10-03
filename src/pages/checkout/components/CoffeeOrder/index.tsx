import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { CoffeeCart } from "../CoffeeCart";
import { ConfirmationSection } from "../ConfirmationSection";
import { SelectCoffeesContainer, TitleSelectCoffeesContainer } from "./styles";

export function CoffeeOrder(){
    const { cartItems } = useContext(CoffeeContext)
    return(
        <div>
            
            <TitleSelectCoffeesContainer>Cafés selecionados</TitleSelectCoffeesContainer>
            <SelectCoffeesContainer>
                {cartItems.map(item => (
                    <CoffeeCart key={item.id} coffee={item}/>
                ))}
                <ConfirmationSection/>
            </SelectCoffeesContainer>
        </div>
        
    )
}