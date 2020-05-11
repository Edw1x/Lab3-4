/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import Infocards from "../Components/Infocards";
import Ourseller from "../Components/OurSeller";
import Categories from "../Components/Categories";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import CarouselBox from "../Components/CarouselBox";

import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="css/style.css" />
        <title>Welcome to myTunes</title>

        {/* Showcase & Nav */}
        <div id="showcase">
          <div className="section-main container">
            <h1 className="projectName">WanderLance</h1>
            <h2 className="titleUnderName">
              Site for people that want to become a freelancer or make an order.
            </h2>
            <p className="hide-on-small red">Enjoy the time you spend here</p>
          </div>
        </div>
        <section class="hero">
          <div class="hero-one">
            <h1-1>BUY</h1-1>
            <ul className="white-text">
              <li>1 million orders sold</li>
              <li>25 million people with us</li>
              <li>5 thound world wide partners</li>
            </ul>
            <img
              className="imageOnHeroSize"
              src="https://icons.iconarchive.com/icons/inipagi/business-economic/1024/graph-icon.png"
            />
          </div>
          <div class="hero-two">
            <h1-1>SELL</h1-1>
            <ul className="white-text">
              <li>1 million orders sold</li>
              <li>25 million people with us</li>
              <li>5 thound world wide partners</li>
            </ul>
            <img
              className="imageOnHeroSize"
              src="https://icons.iconarchive.com/icons/inipagi/business-economic/1024/graph-icon.png"
            />
          </div>
        </section>

        {/* Sellers Section */}
        <section id="sellers" className="section back">
          <div class="container col">
            <h2 className="section-head text-center">Sellers</h2>
            <h4 className="text-center text">
              45 million sellers with us now. Zero ads.
            </h4>
            <CarouselBox />
          </div>
        </section>

        {/* Categories Section */}
        <section id="categories" className="section bg-grey">
          <h1-1>Categories</h1-1>
          <Categories />
          <div className="cA">
            <button type="submit">Check all hot deals</button>
            <div className="grey">
              <a href="#">Want to look for all the sellers, click here.</a>
            </div>
          </div>
        </section>

        {/* Browse Section */}
        <section id="browse" className="section">
          <div className="container">
            <h1 className="text-center text">Make your own choise.</h1>
            <Infocards />
            <p className="white-text text-center">
              take your time and think about
            </p>
          </div>
        </section>

        {/* F.A.Q section*/}
        <section id="F.A.Q" className="section bg-grey">
          <div className="container">
            <h2> F. A. Q. </h2>
            <Accordion />
            <div>
              <div>
                <div>
                  <img
                    id="corona"
                    src="https://images.pexels.com/photos/4031867/pexels-photo-4031867.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="domoi"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}
