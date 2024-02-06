"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scrollable-tabs.scss";
import dynamic from "next/dynamic";
import Image from "next/image";

const Slide = ({ title, imgSrc }: any) => {
  return (
    <div style={{ padding: "0 8px" }}>
      <div
        style={{
          width: "100%",
          height: "200px",
          backgroundColor: "rgba(109, 103, 89, 0.06)",
          border: "1px solid rgb(225, 230, 239)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {imgSrc && (
          <Image
            src={imgSrc}
            alt={title}
            width={100}
            height={100}
            style={{ marginBottom: "16px" }}
          />
        )}
        {/* Horizontal line */}
        <hr
          style={{
            width: "100%",
            borderWidth: "0.5px",
            borderColor: "rgba(0, 0, 0, 0.1)",
            margin: "10px 0",
          }}
        />
        <p
          style={{
            color: "rgb(45, 56, 64)",
            fontWeight: "500",
            zIndex: 2,
            position: "relative",
            fontSize: "14px",
          }}
        >
          {title}
        </p>
      </div>
    </div>
  );
};

const Slider = dynamic(() => import("react-slick").then((m) => m.default), {
  ssr: false,
});

function VariableWidth({ data, title }: any) {
  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: false,
    slidesToShow: 9,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <p style={{ textAlign: "start", marginLeft: "2rem", fontSize: '18px', color: '#082F4A', fontStyle: 'Helvetica' }}>{title}</p>
      <div style={{ margin: "20px" }}>
        <Slider {...slickSettings}>
          {data?.map((slide: any, index: any) => (
            <Slide key={index} title={slide.title} imgSrc={slide.imgSrc} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default VariableWidth;
