import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          arrow: false,
          autoplay: true,
        },
      },
    ],
  };

  const testimonialContent = [
    {
      img: "1",
      desc: `Vyoma's digital marketing strategies have significantly boosted our online visibility. Their data-driven approach and in-depth analysis have been a game-changer for us.`,
      name: "Samantha",
      designation: "",
    },
    {
      img: "2",
      desc: `Working with Vyoma was a breeze. Their expertise in mobile app development made our project seamless, and their support is second to none. Highly recommended!`,
      name: "Linda",
      designation: "",
    },
    {
      img: "3",
      desc: `Vyoma took our e-commerce site to the next level. The results have been impressive, with increased sales and a better user experience. We couldn't be happier with their services.`,
      name: "Michael P.",
      designation: "",
    },
    {
      img: "4",
      desc: `We turned to Vyoma for custom software development, and they delivered a scalable solution on time and within budget. Their team is professional and highly skilled.`,
      name: "Robert",
      designation: "",
    },
    {
      img: "5",
      desc: `Vyoma Digital Solutions provides a one-stop-shop for all our digital needs. Their integrated services have saved us time and money, and we continue to see remarkable growth.`,
      name: "Jennifer",
      designation: "",
    },
    {
      img: "6",
      desc: `Vyoma doesn't just meet expectations; they exceed them. Their creativity, technical expertise, and dedication make them the perfect partner for any digital project.`,
      name: "Mark",
      designation: "",
    },
    {
      img: "7",
      desc: `Our collaboration with Vyoma Digital Solutions has been a true partnership. They are not just service providers but problem-solvers. We're grateful for their ongoing support.`,
      name: "Anna",
      designation: "",
    },
  ];

  return (
    <Slider {...settings}>
      {testimonialContent.map((val, i) => (
        <div className="item" key={i}>
          <div className="list_inner">
            <div className="left">
              <img src="img/thumbs/1-1.jpg" alt="tumb" />
              <div
                className="main"
                style={{
                  backgroundImage: `url(${
                    process.env.PUBLIC_URL + `img/testimonials/${val.img}.jpg`
                  })`,
                }}
              ></div>
            </div>
            <div className="right">
              <img className="svg" src="img/svg/quote.svg" alt="quote" />
              <p className="text">{val.desc}</p>
              <div className="details">
                <h3 className="name">
                  <span>{val.name}</span>
                </h3>
                <span className="job">{val.designation}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
