import Card from "../card/Card";
import React from "react";
import Navbar from "../navbar/Navbar";
// import Search from '../search/Search'
import Sidebar from "../sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Sidebar className="" />
          <div className="homeContainer col-lg-10 col-md-8 col-4">
            <Navbar />
            <hr />

            <Card />
          </div>
    </div>
  );
};

export default Home;
