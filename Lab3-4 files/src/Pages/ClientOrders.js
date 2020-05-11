import React, { Component } from "react";

import "./home.css";
import "./myorders.css";
import OurSeller from "../Components/OurSeller";

import UserCard from "../Components/UserCard";
import OrderInfo from "../Components/OrderInfo";

export default class ClientOrders extends Component {
  render() {
    return (
      <div class="clientOrderContainer cardSettings cA text-center">
        <div className="cardSettings">
          <h2 class="card-title mb-0 text-center">Client orders</h2>
        </div>
        <main>
          <h4 class="card-title mb-0 text-center">
            You have 4 orders on this account{" "}
          </h4>
          <ul class="list-group mb-3">
            <OrderInfo />
            <OrderInfo />
            <OrderInfo />
          </ul>
        </main>
      </div>
    );
  }
}
