import React from 'react';
import "./CreatorsBanner.css"


function CreatorsBanner() {
    return (
      <div className="banner-main-container">
        <div className="picture-container">
          <div className="picture-left-container">
            <img
              className="picture-left"
              src={require("../images/alex.jpg")}
              alt="photo"
            />
            <h1 className="picture-left-text">Adelina</h1>
            <p className="picture-left-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book......
            </p>
            <div className="socials-home">
              <a href="https://facebook.com" target="_blank">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://instagram.com" target="_blank">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="picture-middle-container">
            <img
              className="picture-middle"
              src={require("../images/alex.jpg")}
              alt="photo"
            />
            <h1 className="picture-middle-text">Sergiu</h1>
            <p className="picture-middle-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book......
            </p>
            <div className="socials-home">
              <a href="https://facebook.com" target="_blank">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://instagram.com" target="_blank">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="picture-right-container">
            <img
              className="picture-right"
              src={require("../images/alex.jpg")}
              alt="photo"
            />
            <h1 className="picture-right-text">Alex</h1>
            <p className="picture-right-paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book......
            </p>
            <div className="socials-home">
              <a href="https://facebook.com" target="_blank">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://instagram.com" target="_blank">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CreatorsBanner;