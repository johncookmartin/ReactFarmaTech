import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ContactUsFooter from '../components/ContactUsFooter';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ContactUsFooter />
    </>
  );
};

export default MainLayout;
