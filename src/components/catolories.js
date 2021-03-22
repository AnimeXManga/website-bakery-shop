import React, { Component, useState } from "react";
import "./catolories.css";
function catolories() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <a href="www.cheesecakengon.html">
            <h2 className="border_heading">POPULAR PRODUCTS</h2>
          </a>
        </div>
      <div className="products">
          <div style={{padding: 0}}>
              <div style={{padding: 10}}>
                  <ul class="nav" >
                      <li className="nav-item">
                      <a class="nav-link" >All</a> 
                      </li>
                      <li className="nav-item">
                      <a class="nav-link" >Chese cake</a> 
                      </li>
                      <li className="nav-item">
                      <a class="nav-link" >Brownie</a> 
                      </li>
                      <li className="nav-item">
                      <a class="nav-link" >Cupcake</a> 
                      </li>
                      <li className="nav-item">
                      <a class="nav-link" >Bread</a> 
                      </li>
                      <li className="nav-item">
                      <a class="nav-link" >Chocolate</a> 
                      </li>
                  </ul>
              </div>
              <div  className="productsItems" style={{padding: 10}}>
              <div class="productsItemBoxOutside">
                <div class="productsItemBox">
                  <a href="/product/original-cheesecake">
                    <div><div>
                      <div>&nbsp;</div>
                      </div></div></a>
                      <div></div>
                      <div><div>
                        <a href="/product/original-cheesecake">
                        <div>Original Cheesecake</div></a>
                        <div>
                          <a><span >American, </span></a>
                          <a><span >Cafe, </span></a>
                          <a><span >Coffee And Tea, </span></a>
                          <a><span >Desserts, </span></a>
                        </div>
                          </div>
                          <div>The Original Cheesecake is where it all began, the perfect combination of creamcheese, sugar and van</div>
                          <a href="/product/original-cheesecake">
                            <span>
                              <img src="https://static.thaodien.me/images/fontawesome/search-light.svg" alt="" ></img>
                            </span>
                          </a>
                          <a><span><img src="https://static.thaodien.me/images/fontawesome/heart-light.svg" alt="" ></img></span></a></div>
                          <div>
                            <div><a href="/product/original-cheesecake">
                            <button class="btn btn-secondary">
                            <div>
                          <span class="prdPrice price_original-cheesecake">75.000&nbsp;vnd
                          <span>&nbsp;-&nbsp;649.000&nbsp;vnd</span>
                          </span></div></button></a></div></div>
                          </div>
                          </div>
      
                          
              </div>
          </div>
      </div>
      </div>
    </>
  );
}
export default catolories;
