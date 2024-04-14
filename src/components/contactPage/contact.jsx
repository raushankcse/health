import React from 'react'
import '../../App.css'

// React Icons
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { HiOutlineLocationMarker } from "react-icons/hi";

const contact = () => {
  return (
    <>
      <div>contact</div>
      {/* Header Navbar */}
      <div className="header-topbar style-2">
        <div className="container padding-none">
          <div className="row">
            <div className="col-md-8 col-sm-6 welcome-top">
              <ul className="list-inline top-icon">
                <li className="hvr-rectangle-out"><a href=""><RiTwitterXFill/></a></li>
                <li className="hvr-rectangle-out"><a href=""><FaInstagram /></a></li>
                <li className="hvr-rectangle-out"><a href=""><FaLinkedin /></a></li>
                <li className="hvr-rectangle-out"><a href=""><MdOutlineMail /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div class="main-navbar conner-style style-2 position-fixed">
        <div class="container padding-none">
          <div class="row">
            <div class="col-md-12">
              <nav class="navbar navbar-default">
                <div class="navbar-header"></div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1" data-hover="dropdown" data-animations-delay="1.8s" data-animations="fadeInUp">
                  <ul className="nav navbar-nav bg-none navbar-right style-3">
                    <li className="dropdown active">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Home">Home <i className="fa fa-angle-down" aria-hidden="true" /></span> </a>
                      <ul className="dropdown-menu">
                        <li><a href="index-2.html">Home one</a>
                        </li>
                        <li><a href="index-3.html">Home two</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Depertment">Depertment <i className="fa fa-angle-down" aria-hidden="true" /></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="depertment-1.html">Cardilogists Depertment</a>
                        </li>
                        <li><a href="depertment-2.html">Orthopaedics Depertment</a>
                        </li>
                        <li><a href="depertment-3.html">Gastroenlogy Depertment</a>
                        </li>
                        <li><a href="depertment-4.html">Neuroscien Depertment</a>
                        </li>
                        <li><a href="depertment-5.html">Spine Depertment</a>
                        </li>
                        <li><a href="depertment-6.html">Cancer Depertment</a>
                        </li>
                        <li><a href="depertment-3.html">Colorectal Depertment</a>
                        </li>
                        <li><a href="depertment-4.html">Bariatric Depertment</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <span data-hover="Doctors">Doctors <i className="fa fa-angle-down" aria-hidden="true" /></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="team-col-3.html">Doctors style 1</a>
                        </li>
                        <li><a href="team-col-4.html">Doctors style 2</a>
                        </li>
                        <li><a href="team-details.html">Doctors details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Portfolio">Portfolio <i className="fa fa-angle-down" aria-hidden="true" /></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="portfolio-col-3.html">Portfolio 3 columns</a>
                        </li>
                        <li><a href="portfolio-col-4.html">Portfolio 4 columns</a>
                        </li>
                        <li><a href="portfolio-width.html">Portfolio Width</a>
                        </li>
                        <li><a href="portfolio-gutter.html">Portfolio Gutter Less</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Pages">Pages <i className="fa fa-angle-down" aria-hidden="true" /></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="shop-grid.html">Shop Grid</a>
                        </li>
                        <li><a href="shop-list.html">Shop List</a>
                        </li>
                        <li><a href="shop-single.html">Shop Single</a>
                        </li>
                        <li><a href="shop-cart.html">Shop Cart</a>
                        </li>
                        <li><a href="shop-checkout.html">Shop Checkout</a>
                        </li>
                        <li><a href="testimonials.html">Testimonials</a>
                        </li>
                        <li><a href="comming-soon.html">Comming Soon</a>
                        </li>
                        <li><a href="error.html">Error / 404 page</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Blog">Blog <i className="fa fa-angle-down" aria-hidden="true" /></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="blog-grid.html">Blog grid</a>
                        </li>
                        <li><a href="blog-single.html">Blog Single</a>
                        </li>
                        <li><a href="blog-no-sideber.html">Blog No Sideber</a>
                        </li>
                        <li><a href="blog-left.html">Blog Left Sidebar</a>
                        </li>
                        <li><a href="blog-right.html">Blog Right Sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span data-hover="Contact">Contact <i className="fa fa-angle-down" aria-hidden="true" /></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="contact-style-1.html">Contact One</a>
                        </li>
                        <li><a href="contact-style-2.html">Contact Two</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div className="dropdown-buttons">
                        <div className="btn-group menu-search-box">
                          <button type="button" className="btn dropdown-toggle" id="header-drop-3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon icon-Search" /></button>
                          <ul className="dropdown-menu dropdown-menu-right dropdown-animation" aria-labelledby="header-drop-3">
                            <li>
                              <form role="search" className="search-box">
                                <div className="form-group">
                                  <input type="text" className="form-control" placeholder="Search" />
                                  <i className="icon icon-Search form-control-feedback" />
                                </div>
                              </form>
                            </li>
                          </ul>
                        </div>
                        <div className="btn-group">
                          <button type="button" className="btn dropdown-toggle" id="header-drop-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="icon icon-ShoppingCart" /><span className="menu-cart">8</span></button>
                          <ul className="dropdown-menu dropdown-menu-right cart dropdown-animation" aria-labelledby="header-drop-4">
                            <li>
                              <table className="table table-hover">
                                <thead>
                                  <tr>
                                    <th className="quantity">QTY</th>
                                    <th className="product">Product</th>
                                    <th className="amount">Subtotal</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td className="quantity">2 x</td>
                                    <td className="product"><a href="shop-product.html">Android 4.4 Smartphone</a><span className="small">4.7" Dual Core 1GB</span></td>
                                    <td className="amount">$199.00</td>
                                  </tr>
                                  <tr>
                                    <td className="quantity">3 x</td>
                                    <td className="product"><a href="shop-product.html">Android 4.2 Tablet</a><span className="small">7.3" Quad Core 2GB</span></td>
                                    <td className="amount">$299.00</td>
                                  </tr>
                                  <tr>
                                    <td className="quantity">3 x</td>
                                    <td className="product"><a href="shop-product.html">Desktop PC</a><span className="small">Quad Core 3.2MHz, 8GB RAM, 1TB Hard Disk</span></td>
                                    <td className="amount">$1499.00</td>
                                  </tr>
                                  <tr>
                                    <td className="total-quantity" colSpan={2}><strong>Total 8 Items</strong></td>
                                    <td className="total-amount"><strong>$1997.00</strong></td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="panel-body text-right">
                                <a href="#" className="menu-shop-btn">View Cart</a>
                                <a href="#" className="menu-shop-btn">Checkout</a>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="inner-bg over-layer-black" style={{ backgroundImage: 'url("img/bg/4.jpg")' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="mini-title inner-style-2">
                <h3>Contact Us</h3>
                <p><a href="index-one.html">Home</a> <span className="fa fa-angle-right" /> <a href="#">Contact</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-content">
            <div className="row">
              <div className="col-md-7">
                <div className="section-title margin-left-20 ">
                  <h6>Contact</h6>
                  <h2>Get in Touch</h2>
                  <div className="small-line-border-2" />
                </div>
                <form id="ajax-contact" method="post" action="https://heatmaponline.com/html/medcative/php/contact.php">
                  <div className="col-md-6">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6">
                    <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" required />
                  </div>
                  <div className="col-md-12">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" id="subject" required />
                  </div>
                  <div className="col-md-12">
                    <div className="contact-textarea">
                      <textarea className="form-control" rows={6} placeholder="Wright Message" id="message" name="message" required defaultValue={""} />
                      <button className="btn btn-theme" type="submit" value="Submit Form">Send Message</button>
                    </div>
                  </div>
                  <div id="form-messages" />
                </form>
              </div>
              <div className="col-md-5 contact-info margin-top-60">
                <div className="service-item style-1 bg-f8">
                  <div className="service-icon">
                    <i className="pe-7s-map" />
                  </div>
                  <div className="content">
                    <h5><a href="#" className="color-333">Contact Info</a></h5>
                    <p>5B Streat, City 50987 New Town US, <br />Khulna, BD</p>
                  </div>
                </div>
                <div className="service-item style-1 bg-f8">
                  <div className>
                    <i className="pe-7s-clock" />
                  </div>
                  <div className="content">
                    <h5><a href="#" className="color-333">Business Hours</a></h5>
                    <p>Monday-Friday: 10am to 8pm <br />Saturday: 11am to 3pm</p>
                  </div>
                </div>
                <div className="service-item style-1 bg-f8">
                  <div className>
                    <i className="pe-7s-mail-open" />
                  </div>
                  <div className="content">
                    <h5><a href="#" className="color-333">Email</a></h5>
                    <p>info@bdcoder.com <br /> set-info@bdcoder.com </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="map" /> */}
      </section>

      <section className="service-area over-layer-default" style={{ backgroundImage: 'url(img/bg/5.jpg)' }}>
        <div className="container padding-bottom-none padding-top-40">
          <div className="section-content">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="service-item style-1 text-white border-right">
                  <div className="service-icon">
                    <IoCallOutline />
                  </div>
                  <div className="content">
                    <h5><a href="#">Give us a Call</a></h5>
                    <p>+970-438-3258</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="service-item style-1 text-white border-right">
                  <div className>
                    <MdOutlineMail />
                  </div>
                  <div className="content">
                    <h5><a href="#">Send us a Message</a></h5>
                    <p>Your_malil@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="service-item style-1 text-white">
                  <div className>
                    <HiOutlineLocationMarker />
                  </div>
                  <div className="content">
                    <h5><a href="#">Visit our Location</a></h5>
                    <p>12 New york, USA </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-faded">
        <div className="container">
          <div className="section-content">
            <div className="row margin-top-30">
              <div className="col-md-3">
                <div className="footer-item footer-widget-one">
                  <img alt="" src="img/logo.png" className="footer-logo" />
                  <p>Voluptate porro esse repellat quo exercitationem debitis incidunt.</p>
                  <ul className="address">
                    <li><i className="pe-7s-call" />Phone: 001 (407) 901-6400</li>
                    <li><i className="pe-7s-mail" /><a href="mailto:">Email: info@bdcoder.com</a></li>
                  </ul>
                  <hr />
                  <ul className="social-icon bg-theme">
                    <li><a href="#"><RiTwitterXFill className='icons'/></a></li>
                    <li><a href="#"><FaInstagram className='icons'/></a></li>
                    <li><a href="#"><FaLinkedin className='icons'/></a></li>
                    <li><a href="#"><MdOutlineMail className='icons'/></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-item">
                  <div className="footer-title">
                    <h4>Our Peges </h4>
                    <div className="border-style-2" />
                  </div>
                  <ul className="footer-list border-deshed color-icon">
                    <li><i className="pe-7s-angle-right" /><a href="#">About Us</a></li>
                    <li><i className="pe-7s-angle-right" /><a href="#">Services</a></li>
                    <li><i className="pe-7s-angle-right" /><a href="#">Gallery</a></li>
                    <li><i className="pe-7s-angle-right" /><a href="#">Blog</a></li>
                    <li><i className="pe-7s-angle-right" /><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-item">
                  <div className="footer-title">
                    <h4>Our Services </h4>
                    <div className="border-style-2" />
                  </div>
                  <ul className="footer-list border-deshed color-icon">
                    <li><i className="pe-7s-angle-right" /><a href="#">Transplants</a></li>
                    <li><i className="pe-7s-angle-right" /><a href="#">Gastroenterology</a></li>
                    <li><i className="pe-7s-angle-right" /><a href="#">Orthopaedics</a></li>
                    <li><i className="pe-7s-angle-right" /><a href="#">Spine Care</a></li>
                    <li><i className="pe-7s-angle-right" /><a href="#">Cancer Care</a></li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-md-3">
                <div className="footer-item">
                  <div className="footer-item clearfix">
                    <div className="footer-title">
                      <h4>Fliker Feed</h4>
                      <div className="border-style-1" />
                    </div>
                    <div className="flicker-feed gutter">
                      <a href="img/flicker/1.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/1.jpg" alt="" /></a>
                      <a href="img/flicker/2.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/2.jpg" alt="" /></a>
                      <a href="img/flicker/3.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/3.jpg" alt="" /></a>
                      <a href="img/flicker/4.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/4.jpg" alt="" /></a>
                      <a href="img/flicker/5.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/5.jpg" alt="" /></a>
                      <a href="img/flicker/6.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/6.jpg" alt="" /></a>
                      <a href="img/flicker/7.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/7.jpg" alt="" /></a>
                      <a href="img/flicker/8.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/8.jpg" alt="" /></a>
                      <a href="img/flicker/9.jpg" className="lightbox-image" title="Image Caption Here"><img src="img/flicker/9.jpg" alt="" /></a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>

    </>
  )
}

export default contact