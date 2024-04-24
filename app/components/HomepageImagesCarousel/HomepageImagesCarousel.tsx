"use client";
import "./HomepageImagesCarousel.scss";
import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import homepageImage1 from "../../../public/slider1.jpeg";
import homepageImage2 from "../../../public/slider2.jpeg";
import homepageImage3 from "../../../public/slider3N.png";
import homepageImage4 from "../../../public/slider4.jpeg";
import RemoveIcon from "@mui/icons-material/Remove";
import SellProductModal from "../SellProductModal/SellProductModal";

const carouselItems = [
  {
    imageUrl: homepageImage1,
    caption: "Caption 1",
    headline: "Find new clients easily!",
    buttonName: "Click here!",
    linksTo: "post sell order",
  },
  {
    imageUrl: homepageImage2,
    caption: "Caption 2",
    headline: "Fast shipping services",
    buttonName: "Learn more!",
    linksTo: "https://victorum-marketplace.vercel.app/our-company",
  },
  {
    imageUrl: homepageImage3,
    caption: "Caption 3",
    headline: "Part of Victorum Group",
    buttonName: "Find out more!",
    linksTo: "https://www.victorum-group.com/",
  },
  {
    imageUrl: homepageImage4,
    caption: "Caption 4",
    headline: "Discover the latest trends",
    buttonName: "Click here!",
    linksTo: " https://victorum-marketplace.vercel.app/categories",
  },
];

export default function HomepageImagesCarousel() {
  // modal start
  const [isModalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => setModalOpen(false);
  // modal end

  const smallScreen = useMediaQuery("(max-width: 768px)");

  const redirectToSomewhere = (linkTo: string) => {
    if (linkTo === "") return;

    if (linkTo === "post sell order") {
      setModalOpen(true);
    } else if (
      linkTo === " https://victorum-marketplace.vercel.app/categories"
    ) {
      window.location.href =
        "https://victorum-marketplace.vercel.app/categories";
    } else if (
      linkTo === "https://victorum-marketplace.vercel.app/our-company"
    ) {
      window.location.href =
        "https://victorum-marketplace.vercel.app/our-company";
    } else if (linkTo === "https://www.victorum-group.com/") {
      window.location.href = "https://www.victorum-group.com/";
    }
  };

  return (
    <Box className="carouselMainBox">
      {isModalOpen && (
        <SellProductModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          isAudio={true}
        />
      )}
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
            color: "rgb(51, 85, 127)",
          },
        }}
        IndicatorIcon={<RemoveIcon />}
      >
        {carouselItems.map((item, index) => (
          <Box
            key={"Carousel Item Box" + index}
            className="carouselImageMain"
            sx={{ position: "relative" }}
          >
            <Image
              src={item.imageUrl}
              height={532}
              width={600}
              layout={smallScreen ? "responsive" : ""}
              className="carouselImage"
              style={{
                borderRadius: "10px",
              }}
              priority={true}
              alt={`Carousel Item ${index + 1}`}
            />
            <Typography
              component="p"
              sx={{
                position: "absolute",
                bottom: {
                  xs: "120px",
                  sm: "100px",
                  md: "110px",
                  lg: "100px",
                  xl: "110px",
                },
                left: {
                  xs: "35%",
                  sm: "150px",
                  md: "160px",
                  lg: "160px",
                  xl: "180px",
                },
                transform: "translate(-50%, -50%)",
                color: item.caption === "Caption 3" ? "#2a5182" : "white",
                zIndex: 2,
                fontSize: {
                  xs: "14px",
                  sm: "16px",
                  md: "18px",
                  lg: "20px",
                  xl: "22px",
                },
              }}
            >
              {item.headline}
            </Typography>
            <Button
              sx={{
                position: "absolute",
                bottom: {
                  xs: "80px",
                  sm: "70px",
                  md: "70px",
                  lg: "60px",
                  xl: "70px",
                },
                left: {
                  xs: "35%",
                  sm: "150px",
                  md: "160px",
                  lg: "160px",
                  xl: "180px",
                },
                transform: "translateX(-50%)",
                zIndex: 2, // Ensure it's above the image
                color: item.caption === "Caption 3" ? "#2a5182" : "white",
                borderColor: item.caption === "Caption 3" ? "#2a5182" : "white",
                borderWidth: "1px", // Set the width of the border
                borderStyle: "solid", // Set the style of the border
                textTransform: "none",
                "&:hover": {
                  borderColor: "#2a5182 !important", // Keep the border color when the button is hovered
                  backgroundColor:
                    item.caption === "Caption 3"
                      ? "rgb(253, 255, 219) !important;"
                      : "#2a5182", // Optional: Change background color on hover
                },
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                  md: "14px",
                  lg: "14px",
                  xl: "16px",
                },
              }}
              onClick={() => redirectToSomewhere(item.linksTo)}
            >
              {item.buttonName}
            </Button>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
