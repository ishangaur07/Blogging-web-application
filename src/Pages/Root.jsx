import MainNavigation from './../Components/MainNavigation';
import { Outlet } from 'react-router-dom';
const RootLayout = ()=>{
    return <>
    <MainNavigation></MainNavigation>
    <Outlet></Outlet>
    </>
}

export default RootLayout;