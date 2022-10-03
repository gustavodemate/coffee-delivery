import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { AdressTitle } from "../SectionTitle";
import { SelectPayment } from "../SelectPayment";
import { AdressContainer, FormContainer, FormOfPaymentContainer, OrderContainer, PayContainer } from "./styles";
import { useForm, useFormContext } from 'react-hook-form'


export const paymentMethods = {
    credit: {
        label: 'Cartão de Crédito',
        icon: <CreditCard size={16}/>,
    },

    debit: {
        label: 'Cartão de Débito',
        icon: <Bank size={16}/>,
    },

    money: {
        label: "Dinheiro",
        icon: <Money size={16}/>,
    }
}


export function Adress(){
    const { colors  } = useTheme()
    const { register } = useFormContext();
     
    
    return(
    <div>
        <OrderContainer>
        <h1>Complete seu pedido</h1>
        </OrderContainer>     
        <FormContainer>
            
            <AdressTitle
            icon={<MapPinLine size={22} color={colors["yellow-dark"]}/>}
            title='Endereço de entrega'
            subtitle="Informe o endereço onde deseja receber seu pedido"
            />

            <AdressContainer>
                <input 
                    type="text"
                    placeholder="CEP"
                    {...register('cep')}
                 />

                <input 
                    type="text" 
                    placeholder="Rua" 
                    {...register('street')}

                />

                <input 
                    type="text" 
                    placeholder="Número" 
                    {...register('number')}
                />

                <input 
                    type="text" 
                    placeholder="Complemento" 
                    {...register('complement')}

                />
                
                <input 
                    type="text" 
                    placeholder="Bairro" 
                    {...register('district')}
                />

                <input 
                    type="text" 
                    placeholder="Cidade" 
                    {...register('city')}
                />

                <input 
                    type="text" 
                    placeholder="UF" 
                    {...register('uf')}
                />

            </AdressContainer>

            
            
            
        </FormContainer>

        <PayContainer>
        <AdressTitle
            icon={<CurrencyDollar size={22} color={colors.purple}/>}
            title='Pagamento'
            subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        <FormOfPaymentContainer>
            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
                <SelectPayment
                key={label}
                icon={icon}
                label={label}
                value={key}
                id={key}
                {...register('paymentMethod')}
                
                />
            ))}
        </FormOfPaymentContainer>
        </PayContainer>
        
    </div>

       
    )
}