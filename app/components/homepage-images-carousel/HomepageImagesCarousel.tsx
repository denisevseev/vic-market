"use client";
import "./homepageImagesCarousel.scss";
import React from "react";
import { Box, useMediaQuery } from "@mui/material";
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
  const smallScreen = useMediaQuery("(max-width: 768px)");
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
            bottom: smallScreen ? 15 : 30,
            left: smallScreen ? 30 : 60,
            position: "absolute",
            width: "auto",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "rgb(225, 119, 26)",
          },
        }}
        IndicatorIcon={<RemoveIcon />}
      >
        {carouselItems.map((item, index) => (
          <Box key={"Carousel Item Box" + index}>
            <Image
              src={item.imageUrl}
              height={532}
              width={600}
              className="carouselImage"
              style={{
                borderRadius: "10px",
              }}
              priority
              alt={`Carousel Item ${index + 1}`}
            />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
