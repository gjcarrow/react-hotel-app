import React, { Component } from 'react';
import Title from "./Title"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

class Services extends Component {
  state={
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        key: "a1",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reiciendis error fugit eaque tempore quia veritatis odio accusantium, porro nisi, ab consequatur inventore maiores sequi magni magnam obcaecati quam dolorem."
      },
      {
        icon: <FaHiking />,
        title: "scenic trails",
        key: "a2",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reiciendis error fugit eaque tempore quia veritatis odio accusantium, porro nisi, ab consequatur inventore maiores sequi magni magnam obcaecati quam dolorem."
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        key: "a3",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reiciendis error fugit eaque tempore quia veritatis odio accusantium, porro nisi, ab consequatur inventore maiores sequi magni magnam obcaecati quam dolorem."
      },
      {
        icon: <FaBeer />,
        title: "lounge with sports",
        key: "a4",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reiciendis error fugit eaque tempore quia veritatis odio accusantium, porro nisi, ab consequatur inventore maiores sequi magni magnam obcaecati quam dolorem."
      },
    ]
  }
  render() {
    return (
      <section className="services">
        <Title title="services">
        </Title>
        <div className="services-center">
          {this.state.services.map((el) => {
            return (
              <article key={el.key} className="service">
                <span>{el.icon}</span>
                <h6 className="service-title">
                  {el.title}
                </h6>
                <p className="service-info">
                  {el.info}
                </p>
              </article>
            )
          })}

        </div>
      </section>
    );
  }
}

export default Services;