import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/HeaderDark";
import Slider from "../../components/slider/SliderDarkAnimation";
import About from "../../components/about/AboutDarkAnimation";
import Service from "../../components/service/ServiceAnimation";
import Portfolio from "../../components/portfolio/PortfolioAnimation";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/BlogAnimation";
import Contact from "../../components/Contact";
import Footer from "../../components/footer/Footer";
import Address from "../../components/Address";

const HomeDarkAnimation = () => {
  document.body.classList.add("dark");
  return (
    <div className="home-light">
      <div
        className="demo-fixed-wrapper"
        data-aos="fade-left"
        data-aos-duration="1200"
        data-aos-delay="50"
      >
        <button className="demo-button">
          <Link to="/">
            <span className="text"></span>
          </Link>
        </button>
      </div>
      {/* demo show wrapper  */}

      <Header />
      {/* End Header */}

      <Slider />
      {/* End Slider */}

      <div className="beny_tm_about" id="about">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>About Us</span>
            <h2>About Us</h2>
            <p>
              
Welcome to Vyoma Digital Solutions, where technology meets innovation and user-centric design. We are a dynamic team of forward-thinking developers and digital experts, committed to bringing your ideas to life and transforming them into exceptional digital experiences.
<br></br>
<br></br>
<b>Our Vision</b>
<br></br>
At Vyoma, we envision a digital world that is accessible, intuitive, and efficient for all. Our core belief is that technology should empower individuals and businesses, making their lives easier and more productive. We strive to be at the forefront of this transformation.
<br></br>
<br></br>
<b>Our Mission</b>
<br></br>
Our mission is to provide cutting-edge digital solutions tailored to your unique needs. Whether you're a startup looking to make your mark, an established business aiming to stay ahead of the curve, or an organization with a social impact, Vyoma Digital Solutions is your trusted partner for success. We're passionate about creating software and digital products that not only meet but exceed your expectations.
<br></br>
<br></br>
<b>Why Choose Vyoma Digital Solutions?</b>
<br></br>
<br></br>
<b>Experienced Team:</b> Our team of experts brings years of experience and expertise to the table, ensuring that your project is in safe hands.
<br></br>
<br></br>
<b>User-Centric Approach:</b> We put your users at the heart of our designs, ensuring your digital solutions are both intuitive and engaging.
<br></br>
<br></br>
<b>Innovation:</b> We love pushing the boundaries of technology and adopting the latest industry trends to deliver forward-thinking solutions.
<br></br>
<br></br>
<b>Quality Assurance:</b> Every project undergoes rigorous testing to guarantee a seamless user experience.
<br></br>
<br></br>
<b>Our Services</b>
<br></br>
<br></br>
<b>Web Development:</b> Crafted with the latest web technologies, we build websites that are beautiful, functional, and tailored to your brand.
<br></br>
<br></br>
<b>Mobile App Development:</b> Whether it's iOS or Android, we create mobile apps that captivate and retain your audience.
<br></br>
<br></br>
<b>E-Commerce Solutions:</b> We develop robust e-commerce platforms to help you scale and succeed in the digital marketplace.
<br></br>
<br></br>
<b>Custom Software:</b> Our team excels in creating bespoke software solutions that meet your specific business needs.
<br></br>
<br></br>
<b>Digital Marketing:</b> From SEO to social media, we help your brand shine in the digital landscape.
<br></br>
<br></br>
Let's Create Together
<br></br>
Your digital journey begins with Vyoma Digital Solutions. Let's collaborate and turn your vision into a digital reality. Contact us today to discuss your project and discover how we can bring your ideas to life.
<br></br>
Welcome to a world of limitless possibilities. Welcome to Vyoma Digital Solutions.
            </p>
          </div>
          {/* End .beny_tm_title */}
          {/* <About /> */}
          {/* End Slider */}
        </div>
      </div>
      {/* /ABOUT */}

      {/* SERVICES */}
      <div className="beny_tm_services" id="service">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Services</span>
            <h2>We provide wide range of digital services</h2>
            <p>
            Empowering Your Digital Success with a Diverse Array of Comprehensive Services and Innovative Solutions.
            </p>
          </div>
          {/* End beny_tm_title */}
          <Service />
        </div>
      </div>
      {/* /SERVICES */}

      {/* PORTFOLIO */}
      <div className="beny_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Portfolio</span>
            <h2>Our Portfolio</h2>
            <p>
            Exploring Our Achievements and Creative Endeavors.
            </p>
          </div>
          {/* End beny_tm_title */}
          <Portfolio />
        </div>
      </div>
      {/* /PORTFOLIO */}

      {/* TESTIMONIALS */}
      <div className="beny_tm_testimonials">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Testimonials</span>
            <h2>What's Clients Say.</h2>
            <p>
            Testimonials and Feedback from Customers
            </p>
          </div>
          {/* End beny_tm_title */}
          <div
            className="testimonials_list"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <Testimonial />
          </div>
        </div>
      </div>
      {/* /TESTIMONIALS */}

      {/* NEWS */}
      {/* <div className="beny_tm_news" id="news">
        <div className="container">
          <div className="beny_tm_title_holder">
            <span>Blogs</span>
            <h2>Recent News</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              egestas. Id fermentum nullam ipsum massa.
            </p>
          </div>
          {/* End beny_tm_title */}
          {/* <Blog /> */}
        {/* </div> */}
      {/* // </div> */}
     {/* */}
      {/* /NEWS */}

      {/*  CONTACT */}
      <div className="beny_tm_contact" id="contact">
        <div className="container">
          <div className="contact_inner">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <div className="beny_tm_title_holder">
                <span>Contact</span>
                <h2>Let's discuss your project</h2>
              </div>
              <div className="short_list">
                <Address />
              </div>
            </div>
            {/* End .left */}

            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="150"
            >
              <div className="title">
                <p>
                  We are always open to discussing product
                  <br />
                  <span>design work or partnerships.</span>
                </p>
              </div>
              <div className="fields">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /CONTACT */}

      {/* COPYRIGHT */}
      <div className="beny_tm_copyright">
        <div className="container">
          <Footer />
        </div>
      </div>
      {/* /COPYRIGHT */}
    </div>
  );
};

export default HomeDarkAnimation;
