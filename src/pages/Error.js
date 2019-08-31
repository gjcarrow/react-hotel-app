import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <Hero hero="errorPage">
      <Banner
        title="oops. Made a wrong turn"
        subtitle="No rooms found here. Please return to our selection of rooms"
      >
        
        <Link to="/" className="btn-primary">Return to Rooms</Link>
        </Banner>
    </Hero>
  );
};

export default Error;