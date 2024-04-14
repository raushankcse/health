
import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
  <div className="main-navbar conner-style style-2 position-fixed">
    <div className="container padding-none">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <a href="index.html">
                <img
                  src="img/logo.png"
                  alt=""
                  style={{ height: "12vh", padding: 5, marginTop: 2 }}
                />
              </a>
            </div>
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
              data-hover="dropdown"
              data-animations-delay="1.8s"
              data-animations="fadeInUp"
            >
              <ul className="nav navbar-nav bg-none navbar-right style-3">
                <li>
                  <a
                    href="index.html"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span data-hover="Depertment">Home</span>
                  </a>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span data-hover="Depertment">
                      Execise{" "}
                      <i className="fa fa-angle-down" aria-hidden="true" />
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="depertment-1.html">Hand Exercise</a>
                    </li>
                    <li>
                      <a href="depertment-2.html">Leg Exercise</a>
                    </li>
                    <li>
                      <a href="depertment-3.html">Spinal Exercise</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <span data-hover="Doctors">
                      Doctors{" "}
                      <i className="fa fa-angle-down" aria-hidden="true" />
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="team-col-3.html">Doctors style 1</a>
                    </li>
                    <li>
                      <a href="team-col-4.html">Doctors style 2</a>
                    </li>
                    <li>
                      <a href="team-details.html">Doctors details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span data-hover="Contact">Contact Us</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span data-hover="Contact">About Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span data-hover="Blog">Login</span>
                  </a>
                </li>
                {/*  */}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* Header navbar end */}
  {/* Start  bootstrap-touch-slider Slider */}
  <div
    id="bootstrap-touch-slider"
    className="carousel bs-slider fade  control-round indicators-line"
    data-ride="carousel"
    data-pause="hover"
    data-interval={5000}
  >
    {/* Indicators */}
    <ol className="carousel-indicators">
      <li
        data-target="#bootstrap-touch-slider"
        data-slide-to={0}
        className="active"
      />
      <li data-target="#bootstrap-touch-slider" data-slide-to={1} />
      <li data-target="#bootstrap-touch-slider" data-slide-to={2} />
    </ol>
    {/* Wrapper For Slides */}
    <div className="carousel-inner" role="listbox">
      {/* Third Slide */}
      <div className="item active">
        {/* Slide Background */}
        <video
          src="video/1.mp4"
          autoPlay=""
          muted=""
          loop=""
          style={{ width: "100%" }}
        />
        <div className="bs-slider-overlay" />
        <div className="slide-text slide_style_left">
          <h1 data-animation="animated fadeInRight">
            <span className="color-defult"> Seva </span>
          </h1>
          <p data-animation="animated fadeInLeft">
            Aapki Seva
            <br /> Hamari Jimmedari
          </p>
          <a
            target="_blank"
            className="btn btn-default"
            data-animation="animated fadeInLeft"
          >
            Read more
          </a>
          <a
            target="_blank"
            className="btn btn-primary"
            data-animation="animated fadeInRight"
          >
            Book Now
          </a>
        </div>
      </div>
      {/* End of Slide */}
      {/* Second Slide */}
      <div className="item">
        {/* Slide Background */}
        <video
          src="video/2.mp4"
          autoPlay=""
          muted=""
          loop=""
          style={{ width: "100%" }}
        />
        <div className="bs-slider-overlay" />
        {/* Slide Text Layer */}
        <div className="slide-text slide_style_center">
          <h1 data-animation="animated bounceInDown">
            <span className="color-defult"> Exercies </span>
          </h1>
          <p data-animation="animated lightSpeedIn">
            "Strengthen hands, legs, and spine with targeted exercises for
            enhanced <br /> mobility and vitality. Empower your body's potential
            today!"
          </p>
          <a
            href="#"
            target="_blank"
            className="btn btn-default"
            data-animation="animated fadeInUp"
          >
            Read More
          </a>
          <a
            href="#"
            target="_blank"
            className="btn btn-primary"
            data-animation="animated fadeInDown"
          >
            Practice Now
          </a>
        </div>
      </div>
      {/* End of Slide */}
      {/* Third Slide */}
      <div className="item">
        {/* Slide Background */}
        <video
          src="video/3.mp4"
          autoPlay=""
          muted=""
          loop=""
          style={{ width: "100%" }}
        />
        <div className="bs-slider-overlay" />
        {/* Slide Text Layer */}
        <div className="slide-text slide_style_right">
          <h1 data-animation="animated fadeInLeft">
            Benefits of <span className="color-defult"> Exercise</span>
          </h1>
          <p data-animation="animated fadeInRight">
            Exercise boosts strength, flexibility, and mood while reducing pain.{" "}
            <br /> Enhance hand, leg, and spinal health for a healthier, happier
            you!
          </p>
          <a
            href="#"
            target="_blank"
            className="btn btn-default"
            data-animation="animated fadeInLeft"
          >
            Read More
          </a>
          <a
            href="#"
            target="_blank"
            className="btn btn-primary"
            data-animation="animated fadeInRight"
          >
            Practice Now
          </a>
        </div>
      </div>
      {/* End of Slide */}
    </div>
    {/* End of Wrapper For Slides */}
    {/* Left Control */}
    <a
      className="left carousel-control"
      href="#bootstrap-touch-slider"
      role="button"
      data-slide="prev"
    >
      <span className="fa fa-angle-left" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    {/* Right Control */}
    <a
      className="right carousel-control"
      href="#bootstrap-touch-slider"
      role="button"
      data-slide="next"
    >
      <span className="fa fa-angle-right" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>{" "}
  {/* End  bootstrap-touch-slider Slider */}
  {/* divider start */}
  <section className="about-3col animatedParent animateOnce">
    <div className="container">
      <div className="section-content">
        <div className="row">
          <div className="about-feature style-2">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="appointment-item">
                <i className="fa-solid fa-user-doctor" />
                <h5>
                  <a href="#">Our Doctors</a>
                </h5>
                <div className="line-border-center bg-gray margin-bottom-20" />
                <p>Choose by name, specialty, city and more.</p>
                <button className="btn btn-theme btn-sm">
                  Find a Doctor <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <div className="appointment-item">
                <i className="fa-solid fa-location-dot" />
                <h5>
                  <a href="#">Department &amp; Service</a>
                </h5>
                <div className="line-border-center bg-gray margin-bottom-20" />
                <p>Find maps and more for all locations.</p>
                <button className="btn btn-theme btn-sm">
                  Get Directions <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 center-block">
              <div className="appointment-item">
                <i className="fa-regular fa-calendar-check" />
                <h5>
                  <a href="#">Appointments</a>
                </h5>
                <div className="line-border-center bg-gray margin-bottom-20" />
                <p>Click in, walk in or call us today.</p>
                <button className="btn btn-theme btn-sm">
                  Get Appointment <i className="fa-solid fa-arrow-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* divider end */}
  {/* welcome start */}
  <section>
    <div className="container">
      <div className="section-content">
        <div className="row">
          <div className="col-md-7">
            <h2>Why chose us</h2>
            <h3 className="color-defult">
              Strength in Motion, Healing in Action.
            </h3>
            <p className="lead">
              Seva is here for you. Call{" "}
              <span className="ff-p">+000 000 0000</span>
            </p>
            <p>
              <span className="fw-b">Select</span> us for specialized
              post-fracture care. Our targeted hand, leg, and spinal exercises
              are meticulously designed to aid healing, restore mobility, and
              bolster confidence in your recovery process.
            </p>
            <div className="row margin-top-20">
              <div className="col-md-6">
                <img className="margin-top-10" src="img/home/p1.jpg" alt="" />
              </div>
              <div className="col-md-6">
                <p>
                  With{" "}
                  <span className="color-defult fw-b">
                    personalized attention
                  </span>{" "}
                  and expert guidance, we ensure a comprehensive rehabilitation
                  experience tailored to your unique needs. Trust us to support
                  you every step of the way towards regaining strength,
                  flexibility, and independence after your fracture.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <img alt="" src="img/home/p2.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* welcome end */}
  {/* service start */}
  <section className="service-area bg-f8 animatedParent animateOnce">
    <div className="container">
      <div className="section-title">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <h2>
              Our <span className="color-defult">Services</span>
            </h2>
            <div className="line-border-center bg-defult" />
            <p>
              Tailored post-fracture rehab: specialized hand, leg, and spinal
              exercises promoting healing, mobility, and confidence. Expert
              guidance for personalized recovery.
            </p>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="service-item text-center style-3">
              <i className="fa-regular fa-hand" />
              <h4>
                <a href="#">Hand Exercies</a>
              </h4>
              <div className="border-center" />
              <p>
                Customized hand exercises post-fracture aid healing, restore
                mobility, and strengthen grip, ensuring a smoother recovery with
                expert guidance.
              </p>
              <button
                type="submit"
                className="btn btn-theme margin-top-20"
                data-text="Send Message"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="service-item text-center style-3">
              <i className="fa-solid fa-shoe-prints" />
              <h4>
                <a href="#">Leg Exercies</a>
              </h4>
              <div className="border-center" />
              <p>
                {" "}
                Gentle yet effective leg exercises post-fracture promote
                healing, strength, and mobility, facilitating a smooth recovery
                and return to normal activities.
              </p>
              <button
                type="submit"
                className="btn btn-theme margin-top-20"
                data-text="Send Message"
              >
                Read More
              </button>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="service-item text-center style-3">
              <i className="fa-solid fa-notes-medical" />
              <h4>
                <a href="#">Spinal Cord Exercies</a>
              </h4>
              <div className="border-center" />
              <p>
                {" "}
                Tailored spinal cord exercises post-fracture aid recovery,
                enhance mobility, and strengthen core muscles for improved
                stability and function.
              </p>
              <button
                type="submit"
                className="btn btn-theme margin-top-20"
                data-text="Send Message"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* service end */}
  {/* divider start */}
  <section
    className="service-area over-layer-default"
    style={{ backgroundImage: "url(img/bg/5.jpg)" }}
  >
    <div className="container padding-bottom-none padding-top-40">
      <div className="section-content">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="service-item style-1 text-white border-right">
              <div className="service-icon">
                <i className="fa-solid fa-phone" />
              </div>
              <div className="content">
                <h5>
                  <a href="#">Give us a Call</a>
                </h5>
                <p>+000-000-0000</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="service-item style-1 text-white">
              <div className="">
                <i className="fa-solid fa-envelope" />
              </div>
              <div className="content">
                <h5>
                  <a href="#">Send us a Message</a>
                </h5>
                <p>Your_malil@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* divider end */}
  {/* Testimonial start */}
  <section className="testimonial">
    <div className="container">
      <div className="section-title">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center">
            <h2>
              Our <span className="color-defult"> Clients</span> Say
            </h2>
            <div className="line-border-center bg-defult" />
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="testimonial-carousel-one">
              <div className="item">
                <div className="testimonial-item text-center">
                  <div className="testimonial-author">
                    <div className="author-img">
                      <img
                        className="img-responsive"
                        src="img/testimonial/1.png"
                        alt=""
                      />
                    </div>
                    <h4>Sarah M.</h4>
                    <h6>Business man</h6>
                    <ul>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                    </ul>
                  </div>
                  <p>
                    After my spinal fracture, the tailored exercises provided by
                    this website were instrumental in my recovery. Highly
                    recommend for anyone in a similar situation!
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item text-center">
                  <div className="testimonial-author">
                    <div className="author-img">
                      <img
                        className="img-responsive"
                        src="img/testimonial/2.png"
                        alt=""
                      />
                    </div>
                    <h4>Mark L.</h4>
                    <h6>Teacher</h6>
                    <ul>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                    </ul>
                  </div>
                  <p>
                    The hand and leg exercises here really helped me regain
                    strength and mobility after my fracture. Grateful for the
                    personalized guidance!
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="testimonial-item text-center">
                  <div className="testimonial-author">
                    <div className="author-img">
                      <img
                        className="img-responsive"
                        src="img/testimonial/3.png"
                        alt=""
                      />
                    </div>
                    <h4>Emily S.</h4>
                    <h6>Engineer</h6>
                    <ul>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                      <li>
                        <i className="fa fa-star" aria-hidden="true" />
                      </li>
                    </ul>
                  </div>
                  <p>
                    I couldn't have asked for better support during my recovery.
                    The spinal exercises were exactly what I needed to get back
                    on my feet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Testimonial end */}
  {/* Footer Style start */}
  <footer className="bg-faded">
    <div className="container">
      <div className="section-content">
        <div className="row margin-top-30">
          <div className="col-md-3">
            <div className="footer-item footer-widget-one">
              <img alt="" src="img/logo.png" className="footer-logo" />
              <p>Aapki Seva, Hamari Jimmedari</p>
              <ul className="address">
                <li>
                  <i className="fa-solid fa-phone" />
                  Phone: 001 (407) 901-6400
                </li>
                <li>
                  <i className="fa-solid fa-envelope" />
                  <a href="mailto:">Email: info@bdcoder.com</a>
                </li>
              </ul>
              <hr />
              <ul className="social-icon bg-theme">
                <li>
                  <a>
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-dribbble" aria-hidden="true" />
                  </a>
                </li>
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
                <li>
                  <i className="fa-solid fa-hand-point-right" />
                  <a href="#">About Us</a>
                </li>
                <li>
                  <i className="fa-solid fa-hand-point-right" />
                  <a href="#">Exercies</a>
                </li>
                <li>
                  <i className="fa-solid fa-hand-point-right" />
                  <a href="#">Gallery</a>
                </li>
                <li>
                  <i className="fa-solid fa-hand-point-right" />
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-item">
              <div className="footer-title">
                <h4>Our Exercies </h4>
                <div className="border-style-2" />
              </div>
              <ul className="footer-list border-deshed color-icon">
                <li>
                  <i className="fa-solid fa-hand-point-right" />
                  <a href="#">Hand Exercies</a>
                </li>
                <li>
                  <i className="fa-solid fa-hand-point-right" />
                  <a href="#">Leg Exercies</a>
                </li>
                <li>
                  <i className="fa-solid fa-hand-point-right" />
                  <a href="#">Spinal Cord Execise</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-item">
              <div className="footer-item clearfix">
                <div className="footer-title">
                  <h4>Fliker Feed</h4>
                  <div className="border-style-1" />
                </div>
                <div className="flicker-feed gutter">
                  <a
                    href="img/flicker/1.jpg"
                    className="lightbox-image"
                    title="Image Caption Here"
                  >
                    <img src="img/flicker/1.jpg" alt="" />
                  </a>
                  <a
                    href="img/flicker/2.jpg"
                    className="lightbox-image"
                    title="Image Caption Here"
                  >
                    <img src="img/flicker/2.jpg" alt="" />
                  </a>
                  <a
                    href="img/flicker/3.jpg"
                    className="lightbox-image"
                    title="Image Caption Here"
                  >
                    <img src="img/flicker/3.jpg" alt="" />
                  </a>
                  <a
                    href="img/flicker/4.jpg"
                    className="lightbox-image"
                    title="Image Caption Here"
                  >
                    <img src="img/flicker/4.jpg" alt="" />
                  </a>
                  <a
                    href="img/flicker/5.jpg"
                    className="lightbox-image"
                    title="Image Caption Here"
                  >
                    <img src="img/flicker/5.jpg" alt="" />
                  </a>
                  <a
                    href="img/flicker/6.jpg"
                    className="lightbox-image"
                    title="Image Caption Here"
                  >
                    <img src="img/flicker/6.jpg" alt="" />
                  </a>
                  <a
                    href="img/flicker/7.jpg"
                    className="lightbox-image"
                    title="Image Caption Here"
                  >
                    <img src="img/flicker/7.jpg" alt="" />
                  </a>
                  <a
                    href="img/flicker/8.jpg"
                    className="lightbox-image"
                    title="Image Caption Here"
                  >
                    <img src="img/flicker/8.jpg" alt="" />
                  </a>
                  <a
                    href="img/flicker/9.jpg"
                    className="lightbox-image"
                    title="Image Caption Here"
                  >
                    <img src="img/flicker/9.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

    

  )
}

export default Landing;