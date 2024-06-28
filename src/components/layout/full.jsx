import React from 'react';

import Header from '../header';
import Footer from '../footer';
import Copyright from '../copyright';

export default ({children}) => {
  return (
    <>
      <Header />
      
      {children}

      <Footer />
      <Copyright />
    </>
  );
};
