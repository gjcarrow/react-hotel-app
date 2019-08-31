import React, { Component } from 'react';
import defaultBkg from '../images/room-1.jpeg';
// import Hero from '../components/Hero';
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../Context";
import StyledHero from "../components/StyledHero";


export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: props.match.params.slug,
      defaultBkg
    }
  }

  static contextType = RoomContext;
  
  // componentDidMount() {}
    
  
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if(!room) {
      return (
        <div className="error">
          <h3>
            It appears as though there is no room here ...
          </h3>
          <Link to="/rooms" className="btn-primary">
            Back to Safety
          </Link>
        </div>
        )
    }else {
      const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
      const [mainImg, ...defaultImg] = images;
      
      return (
        <>
          <StyledHero img={mainImg || this.state.defaultBkg}>
            <Banner title={`${name} room`}>
              <Link to="/rooms" className="btn-primary">
                Back to rooms
              </Link>
            </Banner>
          </StyledHero>
          <section className="single-room">
            <div className="single-room-images">
              {defaultImg.map((item, i)=>{
                return (
                  <img key={i} src={item} alt={name} />
                )
              })}
              
            </div>
            <div className="single-room-info">
              <article className="desc">
                <h3>
                  details
                </h3>
                <p>
                  {description}
                </p>
              </article>
              <article className="info">
                <h3>
                  info
                </h3>
                <h3>
                  price: ${price}
                </h3>
                <h3>
                  size: {size}
                </h3>
                <h6>
                  max capacity: {" "}
                  {capacity>1?`${capacity} people`:`${capacity} person`}
                </h6>
                <h6>Pets Allowed?{ pets?" Yes": " No"}</h6>
                <h6>{breakfast?"Breakfast Included":""}</h6>
              </article>
            </div>
          </section>
          <section className="room-extras">
            <h6>
              extras
            </h6>
            <ul className="extras">
              {extras.map((item, i)=>{
                return (
                  <li key={i}> - {item}</li>
                )
              })}
              
            </ul>
          </section>
        </>
    );
  }
  }
}