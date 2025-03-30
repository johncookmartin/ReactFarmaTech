import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ContactUsFooter from '../components/ContactUsFooter';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
      <ContactUsFooter />
    </>
  );
};

export default MainLayout;
