import React from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Topbar';

function Layout({ children }: any) {
  return (
    <>
      <Header />
      {children}

      {/* <Footer /> */}
    </>
  );
}

export default Layout;
