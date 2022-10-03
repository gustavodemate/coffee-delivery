import { SuccessOrderContainer, TitleSucessOrderContainer, OrderInfoContainer } from "./styles";
import ImgSuccessOrder from '../../assets/ImgSuccessOrder.svg'
import { InfoIcon } from "../../components/Icon";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { confirmOrderData } from "../checkout";
import { paymentMethods } from "../checkout/components/adress";
import { useEffect } from "react";


export interface LocationType{
    state: confirmOrderData;
}

export function SuccessOrder() {
    const { colors  } = useTheme()
    const { state } = useLocation() as unknown as LocationType;
    const navigate = useNavigate()
    

    useEffect(() => {
        if(!state) {
            navigate('/')
        }
    }, []);

    if(!state) return <></>;

    console.log(state)

    return (
        <SuccessOrderContainer>
            <div>

            <TitleSucessOrderContainer>
                <h1>Uhu! Pedido confirmado</h1>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </TitleSucessOrderContainer>

            <OrderInfoContainer>
            <InfoIcon
            icon={<MapPin weight="fill" size={16}/>}
            text={<span>Entrega em <strong>{state.street}, {state.number}</strong>
            <br />
            {state.district} - {state.city}, {state.uf}</span>}
            bg={colors.purple}
            />

            <InfoIcon
            icon={<Timer weight="fill" size={16}/>}
            text={<span> Previsão de entrega 
                <br />
               <strong> 20 min - 30 min </strong> </span>}
            bg={colors.yellow}
            />

            <InfoIcon
            icon={<CurrencyDollar weight="fill" size={16}/>}
            text={<span> Pagamento na entrega
                <br />
               <strong>{paymentMethods[state.paymentMethod].label}</strong> </span>}
            bg={colors["yellow-dark"]}
            />
            </OrderInfoContainer>

            </div>   
            

            <img src={ImgSuccessOrder} alt="" />

        </SuccessOrderContainer>
    )
 }