import { useContext } from "react";
import { CoffeeContext } from "../../../../contexts/CoffeeContext";
import { ButtonConfirmOrderContainer, ConfirmationSectionContainer, TotalTextContainer } from "./styles";




export function ConfirmationSection(){
    const { cardPriceTotal, cartQuantity } = useContext(CoffeeContext)
    const deliveryPrice = 3.5;
    const cartTotal = cardPriceTotal + deliveryPrice;

    const FormattedItems = cardPriceTotal.toLocaleString('pt-BR', {minimumFractionDigits:2});
    const FormattedCartTotal = cartTotal.toLocaleString('pt-BR', {minimumFractionDigits:2});
    const FormattedDeliveryPrice = deliveryPrice.toLocaleString('pt-BR', {minimumFractionDigits:2});

    

    return(
        <ConfirmationSectionContainer>
            <div>
                <p>Total de itens</p>
                <span>R$ {FormattedItems}</span>
            </div>

            <div>
               <p>entrega</p>
               {cartQuantity <= 0 ? <span>R$ 0,00</span>: <span>R$ {FormattedDeliveryPrice}</span>}
            </div>

            <TotalTextContainer>
                <p>Total</p>
                
                {cartQuantity <= 0 ? <span>R$ 0,00</span>: <span>R$ {FormattedCartTotal}</span>}
                    
                
            </TotalTextContainer>

            
            <ButtonConfirmOrderContainer  type="submit" disabled={cartQuantity <= 0}>
                CONFIRMAR PEDIDO
            </ButtonConfirmOrderContainer>
            
            
            

        </ConfirmationSectionContainer>
    )
}