import React from "react";
import TopBar from "./TopBar/TopBar";
import "./Login.scss";
import LoginBox from "./LoginBox/LoginBox";
import ScrollingFeatures from "./ScrollingFeatures/ScrollingFeatures";

export default function Login() {
  return (
    <div className="Login">
      <div className="background">
        <TopBar></TopBar>
        <div className="LoginBody">
          {/* <div className="empty"></div> */}
          <ScrollingFeatures />
          <LoginBox />
        </div>
      </div>
    </div>
  );
}
