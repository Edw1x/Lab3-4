import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import "./userprofile.css";
import UserCard from "../Components/UserCard";
import ImageUploader from "../Components/ImageUploader";
import Review from "../Components/Review.js";

const token = localStorage.getItem("Token");
const user = localStorage.getItem("User");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media";

export default class userProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      username: "",
      first_name: "",
      last_name: "",
      last_login: null,
      date_joined: null,
      fetched: false,
      image: null,
    };
  }

  componentWillMount() {
    if (!isLogined) {
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    if (!id) {
      if (!user)
        fetch("http://localhost:8000/users/me/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            this.setState(data);
            this.setState({ fetched: true });
            this.setState({ image: data.image[data.image.length - 1].image });
            console.log(this.state);
          });
      else {
        this.setState(JSON.parse(user));
      }
    }
    else {
      fetch(`http://localhost:8000/users/${id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.setState(data);
          this.setState({ fetched: true });
          this.setState({ image: data.image[data.image.length - 1].image });
          console.log(this.state);
        });
    }
  }

  render() {
    return (
      <div class="cnt cardSettings container">
        <header>
          <div className="report right">
            <button
              type="submit"
              onClick={(event) => (window.location.href = "/reportForm")}
            >
              Report
            </button>
          </div>
        </header>
        <main>
          <div class="">
            <div class="left">
              <div class="photo-left">
                <img
                  class="photo"
                  src={this.state.image ? url + this.state.image : ""}
                />
              </div>
              <div>
                <h4 class="name white-text">
                  {" "}
                  {this.state.first_name} {this.state.last_name}
                </h4>
              </div>
              <p class="desc white-text">I am the best</p>
              <div class="icon-container iconLink">
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-facebook fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-twitter fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-google fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-github fa-2x icon-3d iconLink"
                ></a>
                <a
                  href="https://www.youtube.com/watch?v=ZVVWuPMWc5U"
                  class="fa fa-telegram fa-2x icon-3d iconLink"
                ></a>
              </div>
              <div class="list-group list-group-flush row col" role="tablist">
                <a
                  class="list-group-item list-group-item-action active text-white"
                  data-toggle="list"
                  href="#UserProducts"
                  role="tab"
                >
                  User products
                </a>
                <a
                  class="list-group-item list-group-item-action text-white"
                  data-toggle="list"
                  href="#Reviews"
                  role="tab"
                >
                  Reviews
                </a>
              </div>

              <div class="mt-3">
                <div class="tab-content">
                  <div
                    class="tab-pane fade show active"
                    id="UserProducts"
                    role="tabpanel"
                  >
                    <div class="cardSettings">
                      <div class="row">
                        <UserCard
                          title="Template title"
                          description="Hi, we are Wanderlance team, thanks for coming today here, have a nice day. Here is a template description"
                          price="100000"
                        />
                        <UserCard
                          title="Template title"
                          description="Hi, we are Wanderlance team, thanks for coming today here, have a nice day. Here is a template description"
                          price="100000"
                        />
                        <UserCard
                          title="Template title"
                          description="Hi, we are Wanderlance team, thanks for coming today here, have a nice day. Here is a template description"
                          price="100000"
                        />
                        <UserCard
                          title="Template title"
                          description="Hi, we are Wanderlance team, thanks for coming today here, have a nice day. Here is a template description"
                          price="100000"
                        />
                        <UserCard
                          title="Template title"
                          description="Hi, we are Wanderlance team, thanks for coming today here, have a nice day. Here is a template description"
                          price="100000"
                        />
                        <UserCard
                          title="Template title"
                          description="Hi, we are Wanderlance team, thanks for coming today here, have a nice day. Here is a template description"
                          price="100000"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade"
                    id="Reviews"
                    role="tabpanel"
                  >
                    <div className="reviews">
                      <Review />
                      <Review />
                      <Review />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
