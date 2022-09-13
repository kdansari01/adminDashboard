import Card from "../card/Card";
import React from "react";
import Navbar from "../navbar/Navbar";
// import Search from '../search/Search'
import Sidebar from "../sidebar/Sidebar";
import "./home.scss";
import Chart from "../chart/Chart";
import Featured from "../featured/Featured";

const Home = () => {
  return (
    <div className="home">
      <Sidebar className="" />
      <div className="homeContainer col-lg-10 col-md-8 col-4">
        <Navbar />
        <hr />

        <Card />

        <div className="row">
          <div className="col-lg-12 d-flex p-4 m-4">
            <div className="col-4">
              <Featured/>
            </div>
            <div className="col-lg-8 chart">
              <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
