"use client";
import "./HomepageImagesCarousel.scss";
import React, { useState } from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";
import homepageImage1 from "../../../public/slider1.jpeg";
import homepageImage2 from "../../../public/slider2.jpeg";
// import homepageImage3 from "../../../public/slider3N.png";
//import homepageImage3 from "../../../public/victorumslidergroup.jpg";
import homepageImage3 from "../../../public/victorumgroupslider.jpg";

import homepageImage4 from "../../../public/slider4.jpeg";
import RemoveIcon from "@mui/icons-material/Remove";
import SellProductModal from "../SellProductModal/SellProductModal";
import { useRouter } from "next/navigation";

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
    headline: "Fast shipping services!",
    buttonName: "Learn more!",
    linksTo: "https://victorum-marketplace.vercel.app/our-company",
  },
  {
    imageUrl: homepageImage3,
    caption: "Caption 3",
    headline: "Part of Victorum Group!",
    buttonName: "Find out more!",
    linksTo: "https://www.victorum-group.com/",
  },
  {
    imageUrl: homepageImage4,
    caption: "Caption 4",
    headline: "Discover the latest trends!",
    buttonName: "Click here!",
    linksTo: " https://victorum-marketplace.vercel.app/categories",
  },
];

export default function HomepageImagesCarousel() {
  const router = useRouter();

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
      router.push("/categories");
    } else if (
      linkTo === "https://victorum-marketplace.vercel.app/our-company"
    ) {
      router.push("/our-company");
    } else if (linkTo === "https://www.victorum-group.com/") {
      window.open("https://www.victorum-group.com/", "_blank");
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
            <div className="text-btn-container">
              <Typography
                component="div" // Using 'div' to hold multiple line elements
                sx={{
                  position: "absolute",
                  bottom: {
                    xs: "120px",
                    sm: "150px",
                    md: "140px",
                    lg: "140px",
                    xl: "140px",
                  },
                  color: "white",
                  zIndex: 2,
                  textAlign: "left",
                  fontSize: {
                    xs: "14px",
                    sm: "24px",
                    md: "26px",
                    lg: "36px",
                    xl: "32px",
                  },
                }}
              >
                {item.headline
                  .split(" ")
                  .reduce<string[][]>((acc, word, index) => {
                    if (index % 2 === 0) {
                      // Start of a new pair
                      acc.push([word]);
                    } else {
                      // Second word of a pair
                      acc[acc.length - 1].push(word);
                    }
                    return acc;
                  }, [])
                  .map((pair, index) => (
                    <div key={index} style={{ display: "block" }}>
                      {pair.join(" ")}
                    </div>
                  ))}
              </Typography>

              <Button
                sx={{
                  position: "absolute",
                  // marginTop: '110px',
                  bottom: {
                    xs: "80px",
                    sm: "100px",
                    md: "80px",
                    lg: "80px",
                    xl: "70px",
                  },
                  left: 0, // Ensures it starts from the same left alignment as the Typography
                  textAlign: "left",
                  zIndex: 2,
                  color: "white",
                  borderColor: "white",
                  borderWidth: "1px",
                  borderStyle: "solid",
                  textTransform: "none",
                  width: {
                    xs: "fit-content",
                    sm: "30%",
                    md: "30%",
                    lg: "30%",
                    xl: "24%",
                  },
                  "&:hover": {
                    borderColor: "#2a5182 !important",
                    backgroundColor: "#2a5182",
                  },
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                    md: "18px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                onClick={() => redirectToSomewhere(item.linksTo)}
              >
                {item.buttonName}
              </Button>
            </div>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
