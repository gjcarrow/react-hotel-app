import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from '../components/RoomsContainer';

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner
          title="our rooms"
          subtitle="choose from our selection of quality rooms"
        >
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;