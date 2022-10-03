import { HeaderContainer, IconMap, IconShopping } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'
import LogoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg';
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useTheme } from "styled-components";
import { LocationType } from "../../pages/SucessOrder";

interface cityData{
    state: LocationType
}
export function Header(){
    const { cartQuantity } = useContext(CoffeeContext)
    const { colors  } = useTheme()
    const { state } = useLocation() as unknown as LocationType;

    return (
        <HeaderContainer>

            <NavLink to='/'> <img src={LogoCoffeeDelivery} alt="" /> </NavLink>

            <nav>
                <IconMap>  
                    <MapPin color={colors.purple} weight="fill" size={22}/>
                    {!state ? <p>Porto Alegre, RS</p> : <p>{state.city}, {state.uf}</p>}
                </IconMap>

                <NavLink to='/checkout'>
                    <IconShopping>
                        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                        <ShoppingCart color={colors["yellow-dark"]} weight="fill" size={22}/>
                    </IconShopping>
                </NavLink>    
            </nav>
        </HeaderContainer>
    )
     
}