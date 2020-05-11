import React, { Component } from "react";

import "./home.css";
import "./myorders.css";
import OurSeller from "../Components/OurSeller";

import UserCard from "../Components/UserCard";
import OrderInfo from "../Components/OrderInfo";
import ImageUploader from "../Components/ImageUploader";

const token = localStorage.getItem("Token");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media";

export default class UploadProductPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
    id: null,
       title: null,
      description: null,
      price: null,
      date: null,
      category: {
        name: null,
        description: null,
      },
      owner: null,
      fetched: false
    };
  }

  componentDidMount() {
    if (isLogined) {

      const { id } = this.props.match.params
      fetch(`http://localhost:8000/services/${id}/`, {
        method: "GET",
        headers: {
          Authorization: `Token ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState(data);
          console.log(this.state);
          this.setState({ fetched: true })
        });

    }
  }
  render() {
    return (
      <div class="clientOrderContainer cardSettings cA text-center">
        <div className="cardSettings">
          <h2 class="card-title mb-0 text-center">Product photos</h2>
        </div>
        <main>
          <div className="text-center col-12">
            <h2 class="card-title mb-0 text-center">Title photo</h2>
            <div className="flex">
              <UserCard
                title={this.state.title}
                description={this.state.description}
                price={this.state.price}
                username={this.state.owner ? this.state.owner.username : ""}
                userimage={this.state.owner ? url + this.state.owner.image[this.state.owner.image.length - 1].image : ""}
              />
            </div>
            <div>
              {/* <img
                class="mt-3 col-md-6"
                src={this.state.owner ?url + this.state.owner.image[this.state.owner.image.length - 1].image : ""}
                width="100%"
                height="100%"
              /> */}
              <div class="mt-2">
                <p className="text-white">Choose title photo</p>
              </div>
              <ImageUploader
                urlProps={this.props.match.path}
                image={this.state.owner ? this.state.owner.image[this.state.owner.image.length - 1].image : ""}
                service= {this.state.id} />
            </div>
          </div>
        </main>
        <div className="text-center col-md-12">
          <div className="border border-dark row mt-2 mb-2"></div>
          <h2 class="card-title mb-0 text-center">Product photo</h2>
          <div>
            {/* <img
                class="mt-3"
                src={this.state.owner ?url + this.state.owner.image[this.state.owner.image.length - 1].image : ""}
                width="100%"
                height="100%"
              /> */}
            <div class="mt-2">
              <p className="text-white">Choose product photo</p>
              <ImageUploader
                image={this.state.owner ? this.state.owner.image[this.state.owner.image.length - 1].image : ""}
                service= {this.state.id} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
