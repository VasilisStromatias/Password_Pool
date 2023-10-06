import React from "react";
import "./index.css";

import indexImage from "../../assets/index-image.jpg";

function Index() {
  return (
    <>
      <div className="index-page">
        <div className="index-wrapper">
          <div className="index-inner">
            <div className="left-wrapper">
              <div className="left-inner">
                <img src={indexImage} alt="index" height="850" />
              </div>
            </div>
            <div className="right-wrapper">
              <div className="right-inner">
                <div className="container-wrapper">
                  <div className="container-inner">
                    <div className="title">
                      <h1>Welcome</h1>
                    </div>
                    <div className="short-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed dignissim purus orci, eu dictum ante finibus vel.
                        Aenean interdum neque nec malesuada tincidunt.{" "}
                      </p>
                      <p>
                        et malesuada fames ac ante ipsum primis in faucibus.
                        Integer vel nunc eget quam euismod egestas ut quis
                        magna. Vestibulum feugiat consequat volutpat.{" "}
                      </p>
                    </div>
                    <div className="buttons">
                      <a href="/login">
                        <span>Login</span>
                      </a>
                      <a href="/register">
                        <span>Register</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
