import { ActionsContainer, ButtonRemoveContainer, CoffeeCartContainer, SelectedCoffeeInfoContainer } from "./styles";
import { CoffeeCounter } from "../../../../components/CoffeeCounter";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import { CartItem, CoffeeContext } from "../../../../contexts/CoffeeContext";
import { useContext } from "react";


interface CoffeeCardCartProps {
    coffee: CartItem;
}

export function CoffeeCart({ coffee }: CoffeeCardCartProps){
    const { colors  } = useTheme()
    const { changeCartItemQuantity, deleteFromCart } = useContext(CoffeeContext)
    const FormattedPrice = coffee.price.toLocaleString('pt-BR', {minimumFractionDigits:2});
    const coffeeTotal = coffee.price * coffee.quantity

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, 'increase')
    }

    function handleDecrease() {
        changeCartItemQuantity(coffee.id, 'decrease')
    }

    function handleRemove() {
        deleteFromCart(coffee.id);
    }

    return(
        <CoffeeCartContainer>
            <img src={`/coffees/${coffee.photo}`} alt="" />
            <SelectedCoffeeInfoContainer>
            
                <p>{coffee.name}</p>
                <ActionsContainer>
                    <CoffeeCounter onIncrease = {handleIncrease} onDecrease = {handleDecrease}quantity={coffee.quantity}/>
                    <ButtonRemoveContainer onClick={handleRemove}> <Trash size={16} color={colors.purple}/> REMOVER</ButtonRemoveContainer>
                </ActionsContainer>
                
            </SelectedCoffeeInfoContainer>

            <span>R$ {coffeeTotal.toLocaleString('pt-BR', {minimumFractionDigits:2})}</span>
        </CoffeeCartContainer>
    )
}