import React, { Component } from "react";
import "./home.css";
import SearchBox from "../Components/SearchBox";
import CarouselBox from "../Components/CarouselBox";
import Ourseller from "../Components/OurSeller";
import Categories from "../Components/Categories";
import Footer from "../Components/Footer";

export default class Sellers extends Component {
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
        <section class="hero backImage">
          <h1 class="hero-title"> Wow, u have a nice search<SearchBox/> </h1>
        </section>
        <section id="music" className="section back">
          <div className="accordion">
            <div className="white-text bg-red" id="accordion">
              <div class="faqStorage">
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0 cA text-center">
                    <button
                      className="btn btn-link accordionLink"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Categories
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseOne"
                  class="collapse"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <Categories />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="">
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Graphics & Design</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Digital Marketing</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Writing & Translation</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Video & Animation</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Music & Audio</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Programming & Tech</h1-1>
            </section>
            <CarouselBox />
            <section id="video" className="section bg-grey mg-top">
              <h1-1>Best sellers in Business</h1-1>
            </section>
            <CarouselBox />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
