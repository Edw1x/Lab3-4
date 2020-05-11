import React, { Component } from "react";
import "./footer.css";
export default class Footer extends Component {
    render() {
      return (
        <footer className="back FooterGrey">
        <div className="container grey">
          <div className="footer-cols">
            <ul>
              <li>Make your choise</li>
              <li>
                <a href="#">Explore the sea of products</a>
              </li>
              <li>
                <a href="#">Make your own product</a>
              </li>
              <li>
                <a href="#">Find any proposition</a>
              </li>
              <li>
                <a href="#">Communicate with sellers</a>
              </li>

            </ul>
            
            <ul>
              <li>Community</li>
              <li>
                <a href="#">Our blog</a>
              </li>
              <li>
                <a href="#">Last news</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>

            </ul>
            <ul>
              <li>About us</li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Usefull links</a>
              </li>
              <li>
                <a href="#">Support us</a>
              </li>
              <li>
                <a href="#">F.A.Q.</a>
              </li>
            </ul>

            <ul>
              <li>Others</li>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Accessibility</a>
              </li>

            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center white-text grey">
          Copyright © 2020 WanderLance Team
        </div>
      </footer>
      );
    }
}