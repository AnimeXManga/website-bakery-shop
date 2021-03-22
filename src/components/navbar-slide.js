import React, { Component, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./navbar-slide.css";
import $ from 'jquery';

export class NavbarSlide extends Component {
  render() {
    return (
      <>
      <section class="navbar-slider">
        <div class="container-slide">
          <OwlCarousel items={1} margin={8} autoplay ={true} loop>
            <div class="mySlides">
              <img className="img" src={process.env.PUBLIC_URL + '/image/cake (1).jpg' } alt="cake"  />
            </div>
            <div class="mySlides">
              <img className="img" src={process.env.PUBLIC_URL + '/image/cake (2).jpg'} alt="cake"/>
            </div>
            <div class="mySlides">
              <img className="img" src={process.env.PUBLIC_URL + '/image/cake (3).jpg'} alt="cake" />
            </div>
            <div class="mySlides">
              <img className="img" src={process.env.PUBLIC_URL + '/image/cake (4).jpg'} alt="cake" />
            </div>
          </OwlCarousel>
        </div>
        <div class="navbar-slider__scrdown">
          <a href="#about">scroll down </a>
          <div class="navbar-slider__scrdown-line"></div>
        </div>
        </section>
      </>
    );
  }
}

export default NavbarSlide;
