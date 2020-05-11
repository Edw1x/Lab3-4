import React, { Component } from "react";

import "./home.css";
import "./myorders.css";
import OurSeller from "../Components/OurSeller";

import UserCard from "../Components/UserCard";

export default class MyOrders extends Component {
  render() {
    return (
      <div class="cnt cardSettings cA text-center">
        <div className="cardSettings">
          <h2 class="card-title mb-0 text-center">My orders</h2>
        </div>
        <main>
          <h4 class="card-title mb-0 text-center">
            You have 4 orders on this account{" "}
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item text-left  mb-2 mt-4">
              <div>
                <h5 class="my-0 red productNameOfOrder">
                  Status{" "}
                  <span class="badge border grey orderStatus">
                    {" "}
                    InProcess
                    <i class="fa fa-check whiteIcon" aria-hidden="true"></i>
                  </span>
                </h5>

                <div className="border border-dark row mt-2 mb-2"></div>

                <h5 class="my-0 red productNameOfOrder">Order name </h5>
                <p class="text-white">Order description</p>
                <h5 class="my-0 red productNameOfOrder mt-4">Seller</h5>
                <OurSeller />
                <h5 class="my-0 red productNameOfOrder mt-4">Price</h5>
                <p className="moneySize">12$</p>

                <div className="border border-dark row mt-2 mb-2"></div>

                <button>Check Order</button>

                <button className="button-order-margin">
                  Close this order
                </button>
                <button
                  type="submit"
                  onClick={(event) => (window.location.href = "/reportForm")}
                  className="button-order-margin"
                >
                  Report
                </button>
              </div>
            </li>

            <li class="list-group-item text-left  mb-2 mt-4">
              <div>
                <h5 class="my-0 red productNameOfOrder">
                  Status{" "}
                  <span class="badge border grey orderStatus">
                    {" "}
                    InProcess
                    <i class="fa fa-check whiteIcon" aria-hidden="true"></i>
                  </span>
                </h5>

                <div className="border border-dark row mt-2 mb-2"></div>

                <h5 class="my-0 red productNameOfOrder">Order name </h5>
                <p class="text-white">Order description</p>
                <h5 class="my-0 red productNameOfOrder mt-4">Seller</h5>
                <OurSeller />
                <h5 class="my-0 red productNameOfOrder mt-4">Price</h5>
                <p className="moneySize">12$</p>

                <div className="border border-dark row mt-2 mb-2"></div>

                <button>Check Order</button>

                <button className="button-order-margin">
                  Close this order
                </button>
                <button
                  type="submit"
                  onClick={(event) => (window.location.href = "/reportForm")}
                  className="button-order-margin"
                >
                  Report
                </button>
              </div>
            </li>

            <li class="list-group-item text-left  mb-2 mt-4">
              <div>
                <h5 class="my-0 red productNameOfOrder">
                  Status{" "}
                  <span class="badge border grey orderStatus">
                    {" "}
                    InProcess
                    <i class="fa fa-check whiteIcon" aria-hidden="true"></i>
                  </span>
                </h5>

                <div className="border border-dark row mt-2 mb-2"></div>

                <h5 class="my-0 red productNameOfOrder">Order name </h5>
                <p class="text-white">Order description</p>
                <h5 class="my-0 red productNameOfOrder mt-4">Seller</h5>
                <OurSeller />
                <h5 class="my-0 red productNameOfOrder mt-4">Price</h5>
                <p className="moneySize">12$</p>

                <div className="border border-dark row mt-2 mb-2"></div>

                <button>Check Order</button>

                <button className="button-order-margin">
                  Close this order
                </button>
                <button
                  type="submit"
                  onClick={(event) => (window.location.href = "/reportForm")}
                  className="button-order-margin"
                >
                  Report
                </button>
              </div>
            </li>

            <li class="list-group-item text-left  mb-2 mt-4">
              <div>
                <h5 class="my-0 red productNameOfOrder">
                  Status{" "}
                  <span class="badge border grey orderStatus">
                    {" "}
                    InProcess
                    <i class="fa fa-check whiteIcon" aria-hidden="true"></i>
                  </span>
                </h5>

                <div className="border border-dark row mt-2 mb-2"></div>

                <h5 class="my-0 red productNameOfOrder">Order name </h5>
                <p class="text-white">Order description</p>
                <h5 class="my-0 red productNameOfOrder mt-4">Seller</h5>
                <OurSeller />
                <h5 class="my-0 red productNameOfOrder mt-4">Price</h5>
                <p className="moneySize">12$</p>

                <div className="border border-dark row mt-2 mb-2"></div>

                <button>Check Order</button>

                <button className="button-order-margin">
                  Close this order
                </button>
                <button
                  type="submit"
                  onClick={(event) => (window.location.href = "/reportForm")}
                  className="button-order-margin"
                >
                  Report
                </button>
              </div>
            </li>
          </ul>
        </main>
      </div>
    );
  }
}
