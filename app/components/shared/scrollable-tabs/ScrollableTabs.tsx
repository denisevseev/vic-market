"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./scrollableTabs.scss";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Box } from "@mui/material";

// Slide component
const SlideBigger = ({
  title,
  imgSrc,
  price,
  pieces,
  category,
  size,
  units,
  liters,
  kilograms,
  meter,
  square,
  isSmallCarousel,
}: any) => {
  return (
    <div style={{ padding: "0 8px" }}>
      <div
        style={{
          width: "100%",
          height: isSmallCarousel ? "300px" : "200px",
          backgroundColor: "rgba(109, 103, 89, 0.06)",
          border: "1px solid rgb(225, 230, 239)",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
        }}
      >
        {imgSrc && (
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100px",
              height: "100px",
            }}
          >
            <Image
              src={imgSrc}
              alt={title}
              width={100}
              height={80}
              style={{
                // marginBottom: "16px",
                marginLeft: "auto",
                marginRight: "auto",
                // marginTop: "5px",
              }}
            />
          </div>
        )}
        <hr
          style={{
            width: "100%",
            borderWidth: "0.5px",
            borderColor: "rgba(0, 0, 0, 0.1)",
            margin: "10px 0",
          }}
        />

        <div className="text-part">
          <p
            style={{
              color: "rgb(45, 56, 64)",
              fontWeight: "500",
              zIndex: 2,
              position: "relative",
              fontSize: "14px",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            {title}
          </p>
          {/* Horizontal line */}

          {/* Optional information */}
          {price && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              ${price.toFixed(2)}
            </p>
          )}
          {pieces && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              {pieces} pcs
            </p>
          )}
          {category && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Category: {category}
            </p>
          )}
          {size && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Size: {size}
            </p>
          )}
          {units && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Units: {units}
            </p>
          )}
          {liters && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Liters: {liters}
            </p>
          )}
          {kilograms && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Kilograms: {kilograms}
            </p>
          )}
          {meter && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Meter: {meter}
            </p>
          )}
          {square && (
            <p
              style={{
                fontSize: "14px",
                color: "rgba(0, 0, 0, 0.5)",
                textAlign: "center",
              }}
            >
              Square: {square}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const SlideSmaller = ({ title, imgSrc }: any) => {
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
          <Box style={{ maxHeight: "50%", height: "100%" }}>
            <Image
              src={imgSrc}
              alt={title}
              width={100}
              height={100}
              // style={{ marginBottom: "16px" }}
            />
          </Box>
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
            textAlign: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
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

function VariableWidth({ data, title, isSmallCarousel }: any) {
  const slickSettings = {
    dots: false,
    infinite: false,
    speed: 1000,
    autoplay: false,
    slidesToShow: isSmallCarousel === "true" ? 3 : 9,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: isSmallCarousel ? 3 : 8,
        },
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: isSmallCarousel ? 2 : 7,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: isSmallCarousel ? 2 : 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: isSmallCarousel ? 2 : 5,
        },
      },
      {
        breakpoint: 975,
        settings: {
          slidesToShow: isSmallCarousel ? 1 : 4,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: isSmallCarousel ? 1 : 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: isSmallCarousel ? 1 : 2,
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
      <p
        style={{
          textAlign: "start",
          marginLeft: "2rem",
          fontSize: "18px",
          color: "#082F4A",
          fontStyle: "Helvetica",
        }}
      >
        {title}
      </p>
      <div style={{ margin: "20px" }}>
        <Slider {...slickSettings}>
          {data?.map((slide: any, index: any) =>
            isSmallCarousel ? (
              <SlideBigger
                key={index}
                title={slide.title}
                imgSrc={slide.imgSrc}
                price={slide.price}
                pieces={slide.pieces}
                category={slide.category}
                size={slide.size}
                units={slide.units}
                liters={slide.liters}
                kilograms={slide.kilograms}
                meter={slide.meter}
                square={slide.square}
                isSmallCarousel={isSmallCarousel}
              />
            ) : (
              <SlideSmaller
                key={index}
                title={slide.title}
                imgSrc={slide.imgSrc}
              />
            )
          )}
        </Slider>
      </div>
    </div>
  );
}

export default VariableWidth;
