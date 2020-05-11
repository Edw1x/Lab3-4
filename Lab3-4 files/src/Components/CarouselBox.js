import React, { Component } from "react";
import UserCard from "./UserCard";


export default class CarouselBox extends Component {
  render() {
    return (
      <section className="container row col">
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
      </section>
    );
  }
}
