import React, { Component } from "react";

import "./review.css";
import "react-image-gallery/styles/css/image-gallery.css";


export default class Review extends Component {
    render() {
      return (
        <div class="container white border mgtop">
          <div className="fir-m">
            <figure class="fir-image-figure">
              <a
                class="fir-imageover"
                rel="noopener"
                target="_blank"
                href="/userProfile"
              >
                <img
                  class="fir-author-image fir-c"
                  src="https://picsum.photos/200/150/?random"
                />
                <div class="fir-imageover-color"></div>
                <img
                  class="fir-imageover-image fir-c"
                  src="https://picsum.photos/200/150/?random"
                />
              </a>
  
              <figcaption>
                <div class="fig-author-figure-title white-text red">
                  Igor Chaikovskiy
                </div>
                <div class="small grey">Last seen 10 min ago</div>
              </figcaption>
              <div className="iconsContainer">
                <a href="/" class="">
                  <i class="fa fa-envelope whiteIcon" aria-hidden="true"></i>
                </a>
                <a href="/" class="">
                  <i class="fa fa-link whiteIcon" aria-hidden="true"></i>
                </a>
                <a href="/reportForm" class="">
                  <i
                    class="fa fa-exclamation-triangle whiteIcon"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </figure>
          </div>
  
          <div className="badges">
            <span class="badge badge-info border">
              Verified user
              <i class="fa fa-check whiteIcon" aria-hidden="true"></i>
            </span>
            <span class="badge badge-info border">
              {" "}
              Wanderfull seller
              <i class="fa fa-shopping-cart whiteIcon" aria-hidden="true"></i>
            </span>
          </div>
  
          <div className="border fir-m row"></div>
  
          <div class="rating">
            <input type="radio" id="star1" name="rating" value="1" />
            <label for="star1"></label>
            <input type="radio" id="star2" name="rating" value="2" />
            <label for="star2"></label>
            <input type="radio" id="star3" name="rating" value="3" />
            <label for="star3"></label>
            <input type="radio" id="star4" name="rating" value="4" />
            <label for="star4"></label>
            <input type="radio" id="star5" name="rating" value="5" />
            <label for="star5"></label>
          </div>
  
          <div className="headReview">
            <h2>This product is ultra good</h2>
          </div>
  
          <div className="mainText">
            <h3>What do you like best?</h3>
            <p className="white-text">
              The best thing about using bootstrap is it saving the modern
              developer alot of time, its super easy to use and need only simple
              html knowledge to know how to setup and use it, as a web developer
              for 6 years bootstrap has helped me making more then 500 projects
              for customers and still helping me when it comes to web development,
              bootstrap is super light and has all the features to make your
              website more beautiful, for example the buttons or inputs or even
              the alerts look amazing and modern.
            </p>
  
            <h3>What do you dislike?</h3>
            <p className="white-text">
              I think that the designs can be redundant, however, I believe that
              the websites currently revolve around responsive design, so
              Bootstrap can be a takeoff tool for beginners.
            </p>
  
            <div className="showMore">
              <a
                class="red mgbottomshowMoreLink"
                data-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Show more <i class="fa fa-caret-down red" aria-hidden="true"></i>
              </a>
  
              <div class="collapse collapseMg" id="collapseExample">
                <h3>Recommendations to others considering the product:</h3>
                <p className="white-text">
                  Bootstrap provides a fascinating visual design, so receptivity
                  to your websites will not be necessary with this framework. My
                  recommendation is to use it and learn as much as possible to
                  customize templates.
                </p>
  
                <h3>
                  What problems are you solving with the product? What benefits
                  have you realized?
                </h3>
                <p className="white-text">
                  Bootstrap serves as a composition for testing changes on our
                  mobile websites. We can edit from colors, sizes and buttons of
                  the pages easily. In addition, it also allows us to visually
                  test the design of the page so that we can show the supervisors.
                </p>
              </div>
            </div>
          </div>
  
          <div className="border row"></div>
  
          <div className="btn btn-group cA row">
            <button className="" type="submit" onClick={event =>  window.location.href='/login'}>Add comment</button>
            <button className="" type="submit" onClick={event =>  window.location.href='/login'}>Share</button>
          </div>
        </div>
      );
    }
  }
  