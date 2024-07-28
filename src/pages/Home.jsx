import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpeg";

const Home = () => {
  return (
    <Layout>
      <div className=" ">
        <div className="relative bg-[url(D:\Frontend\practice\src\assets\banner.jpeg)] bg-cover bg-center h-[800px] w-full">
          {/* <div src={banner} className="h-full w-full " > */}
          <div className="">
            <h1 className="absolute bottom-0 right-0 ">Food website</h1>
            <div>
              <p>Best food in india</p>
              <div>
                <Link to="/menu">
                  <button>ORDER NOW</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
};

export default Home;
