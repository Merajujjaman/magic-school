import React from 'react';
import NavBar from '../pages/shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className=' min-h-[calc(100vh-178px)] pt-[68px] px-4'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;