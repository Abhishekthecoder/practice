import React from "react";
import Layout from "../components/Layout";
import { menudata } from '../data/menudata'

const Menu = () => {

  console.log(menudata);
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Menu</h1>

            <div className="card card-compact bg-base-100 w-full shadow-xl ">
               
              <div className="flex gap-8 content-start place-content-stretch w-full flex-wrap ">
                {menudata.map((item, index) => (
                  <li key={index} className="card card-compact bg-base-100 shadow-xl w-[200px] h-[450px] ">
                    <figure className="flex flex-col justify-between  h-full">
                      
                      <img src={item.image} alt="images" className=""/>
                      <div className="card-body">
                        <h2 className="card-title">{item.name}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <div className="card-actions justify-end">
                          <button className="btn btn-primary">Buy Now</button>
                        </div>
                      </div>
                    </figure>
                  </li>
                ))}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Menu;
