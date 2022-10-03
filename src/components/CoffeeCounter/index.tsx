import { Minus, Plus } from "phosphor-react";
import { CoffeCounterContainer } from "./styles";


interface CoffeeConterProps{
    onIncrease: () => void;
    onDecrease: () => void;
    quantity: number;
}

export function CoffeeCounter({ onIncrease, onDecrease, quantity }: CoffeeConterProps){
    return (
        <CoffeCounterContainer>
            <button onClick={onDecrease} disabled={quantity <= 1}> <Minus weight="bold" size={14} /> </button>
            <input type="number" readOnly value={quantity} />
            <button onClick={onIncrease}> <Plus weight="bold" size={14}/> </button>
        </CoffeCounterContainer>
    )
}