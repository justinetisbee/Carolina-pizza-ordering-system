import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to Carolina pizza house, where passion meets flavor in the perfect pizza experience!
        Our journey began with a simple idea: to create the finest pizzas using the freshest, high-quality ingredients. From classic Margheritas to unique toppings, our pizzas are a symphony of flavors crafted with precision.
        More than just a pizza brand, we're a community of enthusiasts who believe in sharing good times. Step into our inviting pizzerias where laughter flows as freely as our signature marinara sauce.
        Committed to both taste and sustainability, we source locally, minimize our carbon footprint, and give back to the communities we serve.
        Thank you for being part of the Carolina pizza house family. Join us in savoring the passion and perfection that goes into every pizza. Welcome to a world of flavor and community!
        </p>
      </div>
    </div>
  );
}

export default About;
