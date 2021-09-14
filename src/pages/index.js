import React from "react";
import "../styles/style.css";
import Navbar from "../components/navbar";

export default function HomePage() {
  return (
    <>
      <div></div>
      <Navbar></Navbar>
      <br />
      <h1>Monster Hunter Wiki</h1>
      <p>
        Welcome to this wiki! This wiki is a personal project which I am trying
        to fulfill during my free time. I hope you find it useful and
        entertaining!
      </p>
      <img
        class="center"
        src="https://www.gannett-cdn.com/presto/2019/10/08/PREN/c56fccbd-e0fd-47fa-a2f6-ebe2e1330103-Rajang_Golden.jpg"
      />
    </>
  );
}
