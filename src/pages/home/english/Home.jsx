import './home.scss';
import Header from '../../../components/header';
import ImageFrame from '../imageframe';
import React, { Component }  from 'react';

const Home = () => {
  return (
    <div className="home-english">
      <Header />
      <ImageFrame />
    </div>
  );
};

export default Home;
