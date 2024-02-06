"use client";
import "./homepageImagesCarousel.scss";
import React from "react";
import { Box } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import homepageImage1 from "../../../public/homepage-carousel-image.webp";
import homepageImage2 from "../../../public/homepage-carousel-image2.jpg";
import homepageImage3 from "../../../public/homepage-carousel-image3.jpg";
import RemoveIcon from "@mui/icons-material/Remove";

const carouselItems = [
  {
    imageUrl: homepageImage1,
    caption: "Caption 1",
  },
  {
    imageUrl: homepageImage2,
    caption: "Caption 2",
  },
  {
    imageUrl: homepageImage3,
    caption: "Caption 3",
  },
];

export default function HomepageImagesCarousel() {
  return (
    <Box className="carouselMainBox">
      <Carousel
        fullHeightHover={false}
        navButtonsAlwaysVisible={false}
        navButtonsProps={{
          style: {
            display: "none",
          },
        }}
        autoPlay={true}
        animation="slide"
        swipe={true}
        indicatorContainerProps={{
          style: {
            zIndex: 1,
            bottom: 30,
            left: 60,
            position: "absolute",
            width: "auto",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "rgb(225, 119, 26)",
            fontSize: "20px",
          },
        }}
        IndicatorIcon={<RemoveIcon />}
      >
        {carouselItems.map((item, index) => (
          <Box key={"Carousel Item Box" + index}>
            <Image
               src={item.imageUrl}
               layout="responsive"
              //  height={530}
              className="carouselImage"
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: "10px",
              }}
              alt={`Carousel Item ${index + 1}`}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
