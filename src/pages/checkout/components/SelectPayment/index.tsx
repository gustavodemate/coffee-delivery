import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { useTheme } from "styled-components";
import { SelectPaymentContainer, ContentContainer } from "./styles";


type PaymentProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
    label: string;
}

export const SelectPayment = forwardRef<HTMLInputElement, PaymentProps>(({ id, icon, label, ...props }, ref) => {
    return(
        <SelectPaymentContainer>
            <input id={id} type="radio" {...props} name="paymentMethod" ref={ref}/>
            <label htmlFor={id}>
                <ContentContainer>
                    {icon}
                    {label}
                </ContentContainer>
            </label>
        </SelectPaymentContainer>
    )
})