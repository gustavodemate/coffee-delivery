import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home';
import { Checkout } from './pages/checkout'
import { SuccessOrder } from './pages/SucessOrder';
import { DefaultLayout } from './layouts/DefaultLayout';



export function Router() {
    return(
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home/>} />
                <Route path='/checkout' element={<Checkout />}/>
                <Route path='/success' element={<SuccessOrder />}/>
            </Route>
            
        </Routes>
    );

}