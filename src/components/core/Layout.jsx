import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Topbar from './Topbar';
import Menu from './Menu';
import HomeHeroWrapper from './HomeHeroWrapper';
import HeroWrapper from './HeroWrapper';
import Footer from './Footer';

import '../../styles.css';

const Layout = ({
  title = 'Title',
  description = 'Description',
  className,
  children,
  home = false,
}) => {
  return (
    <React.Fragment>
      <Topbar />
      <Menu />
      {home ? <HomeHeroWrapper /> : <HeroWrapper title={title} />}
      <ToastContainer />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
