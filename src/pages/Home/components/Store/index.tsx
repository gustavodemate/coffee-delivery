import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeContainer, StoreContainer } from "./styles";


export function Store(){
    return(
        <div>
            <StoreContainer> 
                <h1>Nossos Cafés</h1>
            </StoreContainer>

            <CoffeContainer>
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee}/>
                ))}
                
            </CoffeContainer>

        </div>
       
        
    )
}