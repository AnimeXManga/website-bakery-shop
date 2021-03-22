import React, { useState } from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div class="footer">
        <div class="container">
          <div class="row justify-content-between pd-btm">
            <div class="col-lg-8 col-md-8 col-12 mg-btm txt-center">
              <div class="footer__content">
                <h3 class="title">Let's make something great together</h3>
                <span>
                  Get in touch with us and send some basic info for a quick
                  quote
                </span>
              </div>
            </div>
            <div class="col-lg-4 text-right col-md-4 col-12 txt-center mg-btm">
              <div class="footer__btn">
                <a class="btn btn-black" href="#">
                  {" "}
                  Start a project{" "}
                </a>
              </div>
            </div>
          </div>
          <div class="row align-items-center pd-top">
            <div class="col-lg-3 col-md-12 text-center mg-btm col-12 txt-center">
              <div class="footer__img">
                <img src="../assets/images/logo.png" alt="" />
              </div>
            </div>
            <div class="col-lg-4 col-md-5 col-12 txt-center mg-btm">
              <div class="footer__text">
                <span>
                  301 The Greenhouse,
                  <br />
                  Custard Factory, London, E2 8DY.
                </span>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-12 txt-center mg-btm">
              <div class="footer__text">
                <span>+44 (0) 123 456 7890</span>
                <a href="#">
                  <span>sales@domain.com</span>
                </a>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-12 txt-center mg-btm">
              <ul class="footer__icon d-flex justify-content-between jst-center">
                <li>
                  <a href="#">
                    {" "}
                    <i class="fab fa-facebook-f" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i class="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <i class="fab fa-instagram mr-0" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;