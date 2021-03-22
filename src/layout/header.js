import React, { useState } from "react";
import { Link } from "react-router-dom";
import './header.css'

function Header() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <div class="header__navbar">
        <div class="container-fluid">
          <div class="row align-items-center">
            <div class="col-lg-2 col-xl-2 col-md-8 col-8">
              <a class="header__navbar-logo" href="#">
              <img src={process.env.PUBLIC_URL + '/image/logo-Bakery-01.png'}  alt="logo"></img>
              </a>
            </div>
            <div class="col-lg-8 col-xl-8 col-md-8 position-unset tablet-none">
              <ul class="header__navbar-list">
                <li>
                  {" "}
                  <a href="#">Home</a>
                  <div class="mega-menu">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a class="active" href="#">
                                Classic Corporates{" "}
                                <span class="item__new">New</span>
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a class="active" href="#">
                                Classic Corporates{" "}
                                <span class="item__new">New</span>
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporates</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="dropdown">
                  <a href="#">Pages</a>
                  <ul class="dropdown-menu dropdown-list">
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        About<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Services<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Contact<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Team<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Additional Pages<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Portfolio</a>
                  <div class="mega-menu tb-scroll">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left mg-bottom">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a class="active" href="#">
                                Classic Corporate
                                <span class="item__new">New</span>
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left mg-bottom">
                            <li class="mega-menu__list-item">
                              <a class="active" href="#">
                                Classic Corporate
                                <span class="item__new">New</span>
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left mg-bottom">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left mg-bottom">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a class="active" href="#">
                                Classic Corporate
                                <span class="item__new">New</span>
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left mg-bottom">
                            <li class="mega-menu__list-item">
                              <a class="active" href="#">
                                Classic Corporate
                                <span class="item__new">New</span>
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left mg-bottom">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left mg-bottom">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a class="active" href="#">
                                Classic Corporate
                                <span class="item__new">New</span>
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left mg-bottom">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <ul class="mega-menu__list text-left mg-bottom">
                            <li class="mega-menu__list-item">
                              <a class="pd-0" href="#">
                                <img
                                  src="http://www.themezaa.com/html/pofo/images/menu-banner-01.png"
                                  alt="mega-menu"
                                />
                              </a>
                            </li>
                          </ul>
                          <ul class="mega-menu__list text-left mg-bottom">
                            <li class="mega-menu__list-item">
                              <a class="pd-0" href="#">
                                <img
                                  src="http://www.themezaa.com/html/pofo/images/menu-banner-02.png"
                                  alt="mega-menu"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="dropdown">
                  <a href="#">Blog</a>
                  <ul class="dropdown-menu dropdown-list">
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Blog Standard<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Blog Classic<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Blog Grid<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Blog List<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Blog Simple<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Blog Mansory<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Blog Clean<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-list__item dropright">
                      <a
                        class="d-flex align-items-center justify-content-between"
                        href="#"
                      >
                        {" "}
                        Blog Layout<i class="fas fa-angle-right"></i>
                      </a>
                      <ul class="dropdown-menu dropdown-right">
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                        <li class="dropdown-right__item">
                          <a href="#">Classic Corporate</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">elements</a>
                  <div class="mega-menu">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-accordion-separated"></i>
                                Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-thought"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-mouse"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-user"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-slider-alt"></i>Classic
                                Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-slider"></i>Classic
                                Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-bookmark"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-headphone-alt"></i>Classic
                                Corporate
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-accordion-separated"></i>
                                Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-thought"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon active"
                                href="#"
                              >
                                <i class="ti-mouse"></i>Classic Corporate
                                <span class="item__new">New</span>
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-user"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-slider-alt"></i>Classic
                                Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-slider"></i>Classic
                                Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-bookmark"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-headphone-alt"></i>Classic
                                Corporate
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-accordion-separated"></i>
                                Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-thought"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-mouse"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-user"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-slider-alt"></i>Classic
                                Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-slider"></i>Classic
                                Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-bookmark"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon active"
                                href="#"
                              >
                                <i class="ti-headphone-alt"></i>Classic
                                Corporate<span class="item__new">New</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-accordion-separated"></i>
                                Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-thought"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-mouse"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-user"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-slider-alt"></i>Classic
                                Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-layout-slider"></i>Classic
                                Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-bookmark"></i>Classic Corporate
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a
                                class="d-flex align-items-center item__icon"
                                href="#"
                              >
                                <i class="ti-headphone-alt"></i>Classic
                                Corporate
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  {" "}
                  <a href="#">features</a>
                  <div class="mega-menu">
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a class="active" href="#">
                                Classic Corporate
                                <span class="item__new">New</span>
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a class="active" href="#">
                                Classic Corporate
                                <span class="item__new">New</span>
                              </a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                        </div>
                        <div class="col-lg-3">
                          <h4 class="mega-menu__title">Classic HomePage</h4>
                          <ul class="mega-menu__list text-left">
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                            <li class="mega-menu__list-item">
                              <a href="#">Classic Corporate</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="col-md-2 col-4 text-right menu-mobile position-unset">
              <div class="menu-mobile__btn">
                <a class="menu-mobile__btn-item" href="#">
                  {" "}
                  <i class="fas fa-bars"></i>
                </a>
                <div class="menu-mobile__overlay"></div>
                <ul class="menu-mobile__list">
                  <li class="menu-mobile__list-item">
                    <a class="item__link" href="#">
                      Home<i class="fas fa-angle-down"></i>
                    </a>
                    <ul class="submenu-mobile__list">
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-mobile__list-item">
                    <a class="item__link" href="#">
                      Home<i class="fas fa-angle-down"></i>
                    </a>
                    <ul class="submenu-mobile__list">
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-mobile__list-item">
                    <a class="item__link" href="#">
                      Home<i class="fas fa-angle-down"></i>
                    </a>
                    <ul class="submenu-mobile__list">
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-mobile__list-item">
                    <a class="item__link" href="#">
                      Home<i class="fas fa-angle-down"></i>
                    </a>
                    <ul class="submenu-mobile__list">
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-mobile__list-item">
                    <a class="item__link" href="#">
                      Home<i class="fas fa-angle-down"></i>
                    </a>
                    <ul class="submenu-mobile__list">
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                    </ul>
                  </li>
                  <li class="menu-mobile__list-item">
                    <a class="item__link" href="#">
                      Home<i class="fas fa-angle-down"></i>
                    </a>
                    <ul class="submenu-mobile__list">
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a class="active" href="#">
                          Classic Corporates <span class="item__new">New</span>
                        </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                      <li class="submenu-mobile__list-item">
                        <a href="#">Classic Corporates </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-xl-2 col-2 mobile-none">
              <div class="header__navbar-icon">
                <a
                  href="https://www.facebook.com/"
                  title="Facebook"
                  target="_blank"
                >
                  {" "}
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/" title="Twitter" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
                <a
                  href="https://dribbble.com/"
                  title="Dribbble"
                  target="_blank"
                >
                  <i class="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
