import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { useTheme } from "styled-components";
import { InfoIcon } from "../../../../components/Icon";
import { IntroContainer, IntroWrapper, SidebarContainer, SidebarIconsContainer } from "./styles";
import CoffeDelivery from '../../../../assets/coffee-delivery.svg'


export function Intro(){
    const { colors  } = useTheme()

    return(
      <IntroContainer>
      
         <IntroWrapper>
            <SidebarContainer>
               <h1>Encontre o café perfeito para qualquer hora do dia </h1>
               <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </SidebarContainer>

            <SidebarIconsContainer>
            <InfoIcon
               icon={<ShoppingCart weight="fill"/>}
               text='Compra simples e segura'
               bg={colors["yellow-dark"]}
            />
            

            <InfoIcon
               icon={<Package weight="fill"/>}
               text='Embalagem mantém o café intacto'
               bg={colors["base-text"]}
            />
            

            <InfoIcon
               icon={<Timer weight="fill"/>}
               text='Entrega rápida e rastreada'
               bg={colors.yellow}
            />
            

            <InfoIcon
               icon={<Coffee weight="fill"/>}
               text='O café chega fresquinho até você'
               bg={colors.purple}
            />
            </SidebarIconsContainer>
         </IntroWrapper>
         
            <img src={CoffeDelivery} alt="" />

      </IntroContainer>        
    )
}