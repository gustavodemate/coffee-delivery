import { Intro } from "./components/Intro";
import { HomeContainer } from "./styles";
import CoffeDelivery from '../../assets/coffe-delivery.svg'
import { Store } from "./components/Store";




export function Home() {
   
   return (
   
      <HomeContainer>
         <Intro/>
         <Store/>
      </HomeContainer>      
   )
}