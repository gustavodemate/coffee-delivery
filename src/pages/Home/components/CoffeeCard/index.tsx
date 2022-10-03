import { CoffeeListContainer, TagCoffeeContainer, BuyCoffeeContainer, ButtonBuyContainer, PriceContainer } from "./styles";
import { CoffeeCounter } from "../../../../components/CoffeeCounter";
import { Coffee, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeeProps {
    coffee: Coffee;
}


export function CoffeeCard({ coffee }: CoffeeProps) {
    const [quantity, setQuantity] = useState(1);
    const { addCoffee } = useContext(CoffeeContext)

    function handleIncrease() {
        setQuantity(state => state + 1);
    }

    function handleDecrease() {
        setQuantity(state => state - 1);
    }

    function handleAddToCart() {
        const coffeeToAdd = {
            ...coffee,
            quantity,
        }
        addCoffee(coffeeToAdd)
    }

    const FormattedPrice = coffee.price.toLocaleString('pt-BR', {minimumFractionDigits:2});

    return(
        <CoffeeListContainer>
           <img src={`/coffees/${coffee.photo}`}/> 

           { <TagCoffeeContainer>{coffee.tags.map((tag, index) => (
            <span key={`${coffee.tags}_${index}`}>{tag.toUpperCase()}</span>
           ))}</TagCoffeeContainer>}
           
           <h2>{coffee.name}</h2>        
           <p>{coffee.description}</p>

           <BuyCoffeeContainer>

            <PriceContainer>
                <span>{FormattedPrice}</span>
            </PriceContainer>   

            <CoffeeCounter
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={quantity}
            />

           <ButtonBuyContainer onClick={handleAddToCart}>
                <ShoppingCart weight="fill" size={22}/>
            </ButtonBuyContainer>
           </BuyCoffeeContainer>
        </CoffeeListContainer>
    )
}