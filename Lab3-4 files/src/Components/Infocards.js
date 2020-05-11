/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";

import "./infocards.css";

export default class Infocards extends Component {
  render() {
    return (
      <div>
        <div class="content">
          <div class="card">
            <div class="icon">
              <i class="material-icons md-36">attach_money</i>
            </div>
            <p class="title">Sell</p>
            <a href="#" class="text">Make your own product</a>
          </div>
          <div class="card">
            <div class="icon">
              <i class="material-icons md-36">storefront</i>
            </div>
            <p class="title">Buy</p>
            <a href="/sellers" class="text">Find any product</a>
          </div>
          <div class="card">
            <div class="icon">
              <i class="material-icons md-36">whatshot</i>
            </div>
            <p class="title">Create</p>
            <a href="#" class="text">Become the top seller</a>
          </div>
          <div class="card">
            <div class="icon">
              <i class="material-icons md-36">explore</i>
            </div>
            <p class="title">Explore</p>
            <a href="/sellers" class="text">Explore the sea of products</a>
          </div>
        </div>
      </div>
    );
  }
}
