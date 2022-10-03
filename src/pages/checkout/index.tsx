import { Adress } from "./components/adress";
import { CoffeeOrder } from "./components/CoffeeOrder";
import { CheckoutContainer } from "./styles";
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

enum PaymentMethods {
   credit = 'credit',
   debit = 'debit',
   money = 'money',
}

const confirmOrderSchema = zod.object({
   cep: zod.string().min(1, 'Informe o CEP'),
   street: zod.string().min(1, 'Informe a Rua'),
   number: zod.string().min(1, 'Informe o Número'),
   complement: zod.string(),
   district: zod.string().min(1, 'Informe o Bairro'),
   city: zod.string().min(1, 'Informe a Cidade'),
   uf: zod.string().min(1, 'Informe o seu Estado'),
   paymentMethod: zod.nativeEnum(PaymentMethods, )
})

export type confirmOrderData = zod.infer<typeof confirmOrderSchema>


export function Checkout() {
   const { cleanCart } = useContext(CoffeeContext)
   const confirmOrderForm = useForm<confirmOrderData>({
      resolver: zodResolver(confirmOrderSchema),
   })

   const { handleSubmit, reset } = confirmOrderForm;
   const navigate = useNavigate()

   function handleSubmitAdress(data: confirmOrderData) {
      navigate('/success', {state: data})
      reset();
      cleanCart();

  }

   return(
      <FormProvider {...confirmOrderForm}>
         <CheckoutContainer onSubmit={handleSubmit(handleSubmitAdress)}>
            <Adress/>
            <CoffeeOrder/>
         </CheckoutContainer>
      </FormProvider>   
   )
      
   
}