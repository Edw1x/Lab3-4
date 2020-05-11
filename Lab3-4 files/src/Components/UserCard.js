import React, { Component } from "react";
import Ourseller from "./OurSeller";
import Adminpanel from "./AdminPanel";

import "./userCard.css";

export default class UserCard extends Component {
  render() {
    return (
      <div class="userCardContainer">
      <div class="rightGradientAfterFlip">
        <div class="flip">
          <div class="front">
            <img
              class="userCardImage"
              src={this.props.serviceimage?this.props.serviceimage:"https://images.pexels.com/photos/3694706/pexels-photo-3694706.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
            ></img>
          </div>
          <div class="back text-center">
            <div className="margin-top">
              {this.props.token?  <Adminpanel
              id = {this.props.id}/>
              :<div>
              <h2>User menu</h2>
              <p className="text-white text-center">Clicking on the button below will move you to the current product.</p>
              <div className="cA">
                <button type="submit" onClick={event =>  window.location.href=`/sellerspage/${this.props.id}`}>Buy this product</button>
              </div>
              </div>}
            
            </div>
          </div>
        </div>
        <div class="text-card-cont">
          <div class="mr-grid">
            <div class="col1">
                <h1>{this.props.title}</h1>
              <Ourseller
              id = {this.props.userid}
              username = {this.props.username}
              image = {this.props.userimage} />
              <hr className="white" />
            </div>
          </div>
          <div class="mr-grid rating-margin">
            <div class="col2">
              <h5>Rating</h5>
            </div>
            <div class="col2">
              <ul class="userRating">
                <li>
                  <i class="material-icons">&#128970;</i>
                  <i class="material-icons">&#128970;</i>
                  <i class="material-icons">&#128970;</i>
                  <i class="material-icons">&#128970;</i>
                  <i class="material-icons">&#10032;</i>
                </li>
                <li>4</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid">
            <div class="col1 ">
              <p class="userCardDescription module">
               {this.props.description?this.props.description.slice(0,100):""}
              </p>
            </div>
          </div>
          <div>
            
          </div>
          <div class="mr-grid">
              <div class="col1">
                <p class="userCardReviews">15 reviews on this product</p>
              </div>
            </div>
            <div class="mr-grid">
              <div class="">
                <div class="priceBorder">
                  <h3>
                    <i class="material-icons">&#xE037;</i> PRICE:
                  </h3>
                </div>
              </div>
              <div class="priceSection">
                <h6>
                {this.props.price}
                  <i class="material-icons"> &#x24;</i>
                </h6>
              </div>
            </div>
        </div>
      </div>
    </div>
    );
  }
}