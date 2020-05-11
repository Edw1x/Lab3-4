import React, { Component } from "react";

import "./home.css";

import UserCard from "../Components/UserCard";

export default class ReportForm extends Component {
  render() {
    return (
      <div class="cnt cardSettings cA text-center">
        <div className="cardSettings">
          <h2 class="card-title mb-0 text-center">Report Form</h2>
        </div>
        <main>
          <div class="form-group text-left">
            <label for="inputUsername">Report description</label>
            <textarea
              rows="30"
              class="form-control"
              id="inputBio"
              placeholder="Report"
            ></textarea>
          </div>
          <button type="submit">Send report</button>
        </main>
      </div>
    );
  }
}
