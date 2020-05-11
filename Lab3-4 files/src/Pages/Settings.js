import React, { Component } from "react";
import "./settings.css";
import ImageUploader from "../Components/ImageUploader";

const token = localStorage.getItem("Token");
const user = localStorage.getItem("User");
let isLogined = token ? true : false;
const url = "http://localhost:8000/media";

export default class Settings extends Component {
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
      old_password: "",
      new_password1: "",
      new_password2: "",
    };
  }

  componentWillMount() {
    if (!isLogined) {
      this.props.history.push("/");
    }
  }
  componentDidMount() {
    if (!user)
      fetch('http://localhost:8000/users/me/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        }
      }).then(res => res.json()).then(data => {
        console.log(data);
        this.setState(data);
        localStorage.setItem('id', this.state.id);
        this.setState({ fetched: true });
        this.setState({ image: data.image[data.image.length - 1].image });
        localStorage.setItem("User", JSON.stringify(this.state));
        console.log(this.state);
      })
    else {
      this.setState(JSON.parse(user));
    }
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
    console.log(this.props);
  };

  nameChange = (e) => {
    e.preventDefault();

    let fd = new FormData();
    fd.append("first_name", this.state.first_name);
    fd.append("last_name", this.state.last_name);

    fetch("http://localhost:8000/users/edit/", {
      method: "PATCH",
      headers: {
        Authorization: `Token ${token}`,
      },
      body: fd,
    }).then((res) => {
      window.location.reload(false);
      // localStorage.removeItem('User')
      // console.log(this.state);
      return res.json();
    });
  };

  passwordChange = (e) => {
    e.preventDefault();

    let fd = new FormData();
    fd.append("old_password", this.state.old_password);
    fd.append("new_password1", this.state.new_password2);
    fd.append("new_password2", this.state.new_password2);

    fetch("http://localhost:8000/auth/change_password/", {
      method: "POST",
      headers: {
        Authorization: `Token ${token}`,
      },
      body: fd,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        localStorage.removeItem("Token", data.Token);
        localStorage.setItem("Token", data.Token);
        window.location.reload(false);
        console.log(this.state);
      });
  };

  render() {
    return (
      <div class="container p-0 white-text cA">
        <h1 class="h3 mb-3">Settings</h1>

        <div class="row">
          <div class="col-md-5 col-xl-4">
            <div class="cardSettings">
              <div class="card-headerSettings">
                <h5 class="card-title mb-0">Profile Settings</h5>
              </div>

              <div class="list-group list-group-flush" role="tablist">
                <a
                  class="list-group-item list-group-item-action active text-white"
                  data-toggle="list"
                  href="#account"
                  role="tab"
                >
                  Account
                </a>
                <a
                  class="list-group-item list-group-item-action text-white"
                  data-toggle="list"
                  href="#password"
                  role="tab"
                >
                  Password
                </a>
                <a
                  class="list-group-item list-group-item-action text-white"
                  data-toggle="list"
                  href="#login"
                  role="tab"
                >
                  Login
                </a>
                <a
                  class="list-group-item list-group-item-action text-white"
                  data-toggle="list"
                  href="#delete"
                  role="tab"
                >
                  Delete account
                </a>
              </div>
            </div>
          </div>

          <div class="col-md-7 col-xl-8">
            <div class="tab-content">
              <div
                class="tab-pane fade show active"
                id="account"
                role="tabpanel"
              >
                <div class="cardSettings">
                  <div class="card-headerSettings">
                    <div class="card-actions float-right">
                      <div class="dropdown show">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          data-display="static"
                        ></a>
                      </div>
                    </div>
                    <h5 class="card-title mb-0">Public info</h5>
                  </div>
                  <div class="card-body">
                    <form>
                      <div class="row">
                        <div class="col-md-8">
                          <div class="form-group">
                            <label for="inputUsername">Biography</label>
                            <textarea
                              rows="2"
                              class="form-control"
                              id="inputBio"
                              placeholder="Tell something about yourself"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col">
                          <div class="text-center">
                            <div class="mt-2">
                              <ImageUploader
                                image={this.state.image}
                                urlProps = {this.props.match.path}
                              />
                            </div>
                            <small>
                              For best results, use an image at least 128px by
                              128px in .jpg format
                            </small>
                          </div>
                        </div>
                      </div>

                      <button type="submit" class="">
                        Save changes
                      </button>
                    </form>
                  </div>
                </div>

                <div class="cardSettings">
                  <div class="card-headerSettings">
                    <div class="card-actions float-right">
                      <div class="dropdown show">
                        <a
                          href="#"
                          data-toggle="dropdown"
                          data-display="static"
                        ></a>
                      </div>
                    </div>
                    <h5 class="card-title mb-0">Private info</h5>
                  </div>
                  <div class="card-body">
                    <form onSubmit={this.nameChange}>
                      <div class="form-row">
                        <div class="form-group col-md-6">
                          <label for="inputFirstName">First name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputFirstName"
                            name="first_name"
                            placeholder="First name"
                            onChange={this.handleChange}
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputLastName">Last name</label>
                          <input
                            type="text"
                            class="form-control"
                            id="inputLastName"
                            name="last_name"
                            placeholder="Last name"
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <button type="submit">Save changes</button>
                    </form>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="password" role="tabpanel">
                <div class="cardSettings">
                  <div class="card-body">
                    <h5 class="card-title">Password</h5>

                    <form onSubmit={this.passwordChange}>
                      <div class="form-group">
                        <label for="inputPasswordCurrent">
                          Current password
                        </label>
                        <input
                          type="password"
                          class="form-control"
                          id="inputPasswordCurrent"
                          name="old_password"
                          onChange={this.handleChange}
                        />
                        <div className="grey">
                          <a href="/ResetPassword">Forgot password?</a>
                        </div>
                      </div>
                      <div class="form-group">
                        <label for="inputPasswordNew">New password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="inputPasswordNew"
                          name="new_password1"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div class="form-group">
                        <label for="inputPasswordNew2">Verify password</label>
                        <input
                          type="password"
                          class="form-control"
                          id="inputPasswordNew2"
                          name="new_password2"
                          onChange={this.handleChange}
                        />
                      </div>
                      <button type="submit">Save changes</button>
                    </form>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="login" role="tabpanel">
                <div class="cardSettings">
                  <div class="card-body">
                    <h5 class="card-title">Login</h5>

                    <form>
                      <div class="form-group">
                        <label for="inputLoginNew">New login</label>
                        <input
                          type="login"
                          class="form-control"
                          id="inputLoginNew"
                        />
                      </div>
                      <button type="submit">Save changes</button>
                    </form>
                  </div>
                </div>
              </div>

              <div class="tab-pane fade" id="delete" role="tabpanel">
                <div class="cardSettings">
                  <div class="card-body">
                    <h5 class="card-title">Delete Account</h5>

                    <form>
                      <div class="form-group">
                        <label for="inputLoginCurrent">Login</label>
                        <input
                          type="login"
                          class="form-control"
                          id="inputLoginCurrent"
                        />
                        <p>
                          Input your login here if you want to delete your
                          account
                        </p>
                      </div>
                      <button type="submit">Delete</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
