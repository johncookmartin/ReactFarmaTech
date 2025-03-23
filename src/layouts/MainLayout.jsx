import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import farmaTechLogo from '../assets/logos/cropped-cropped-Logo-See-Thru-1.png';

const MainLayout = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src={farmaTechLogo} alt="Farma Tech Logo" />
        </Link>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
