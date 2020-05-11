import React, { Component } from "react";

import OurSeller from "../Components/OurSeller";

import UserCard from "../Components/UserCard";

export default class ClientOrders extends Component {
  render() {
    return (
      <li class="list-group-item text-left  mb-2 mt-4">
        <div>
          <h5 class="my-0 red productNameOfOrder">
            Status{" "}
            <span class="badge border grey orderStatusNotDone">
              {" "}
              Not done
              <i class="fa fa-times whiteIcon" aria-hidden="true"></i>
            </span>
          </h5>

          <div className="border border-dark row mt-2 mb-2"></div>

          <h5 class="my-0 red productNameOfOrder">Order</h5>
          <div className="flex col-md-6">
            <UserCard
              title="Template title"
              description="Hi, we are Wanderlance team, thanks for coming today here, have a nice day. Here is a template description"
              price="100000"
            />
          </div>
          <div className="col-md-12 margin-right">
            <h5 class="my-0 red productNameOfOrder mt-4 margin-right">
              Client name
            </h5>
            <OurSeller />
            <h5 class="my-0 red productNameOfOrder mt-4">Price</h5>
            <p className="moneySize">120$</p>
            <h5 class="my-0 red productNameOfOrder mt-4 margin-right">
              Description
            </h5>
            <p className="text-white">
              Hi, i want to make my school project, please do...
            </p>
            <h5 class="my-0 red productNameOfOrder mt-4 margin-right">
              Attached files
            </h5>
            <p className="text-white">project.doc</p>
            <p className="text-white">project.png</p>
            <div className="border border-dark row mt-2 mb-2"></div>

            <button>Check Order</button>

            <button className="">Close this order</button>
            <button
              type="submit"
              onClick={(event) => (window.location.href = "/reportForm")}
              className=""
            >
              Report
            </button>
          </div>
        </div>
      </li>
    );
  }
}
