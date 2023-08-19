"use client";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { unilogo1, unilogo2, unilogo3, unilogo4, unilogo5 } from "../public/assets";

export function Logoslider() {
  let settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Medium screens and above
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="my-5 rounded p-4 normal-screen:mx-32">
      <Slider {...settings}>
        <div>
          <div className="logo-container">
            <Image
              src={unilogo1}
              width={120}
              height={130}
              alt="Arts educational schools london logo"
            />
          </div>
        </div>
        <div>
          <div className="logo-container">
            <Image
              src={unilogo2}
              width={120}
              height={130}
              alt="Abingdon & witney college logo"
            />
          </div>
        </div>
        <div>
          <div className="logo-container">
            <Image
              src={unilogo3}
              width={120}
              height={130}
              alt="Cambridge tutors college logo"
            />
          </div>
        </div>
        <div>
          <div className="logo-container">
            <Image
              src={unilogo4}
              width={120}
              height={130}
              alt="City of wolverhampton college logo"
            />
          </div>
        </div>
        <div>
          <div className="logo-container">
            <Image
              src={unilogo5}
              width={120}
              height={130}
              alt="Westminster kingway college logo"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
