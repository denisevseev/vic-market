"use client";
import React from "react";
import Box from "@mui/material/Box";
import "./OurCompany.scss";
import { Typography } from "@mui/material";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import Link from "next/link";
import Image from "next/image";
import { globalDetails } from "../utils/constants";
export default function PressPage() {
  const handleContact = () => {
    window.location.href = "mailto:" + globalDetails.email;
  };

  return (
    <Box className="pressMainContainer">
      <Box className="titleHeadlineImgBg">
        <Box className="pressTitleHeadlineMWLogo">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* TITLE */}
            <Box className="pressTitleBg">
              <Typography className="pressTitleBgText">Our Company</Typography>
            </Box>
            {/* HEADLINE */}
            <Typography className="pressTitle">
              Produce locally - trade globally!
            </Typography>
          </Box>
          <Box className="imageContainer">
      <div className="imageLink">
        <Link href="/" passHref>
          <Image
            src="/logoTrade.png"
            alt="Logo"
            layout="responsive"
            width={181} // This sets the natural width for aspect ratio calculation
            height={48} // This sets the natural height for aspect ratio calculation
            priority
          />
        </Link>
      </div>
    </Box>
        </Box>
      </Box>
      {/* TEXT */}
      <Box className="pressTextContainerPadding">
        <Box className="presstextContainer">
          <Typography className="pressSubtitle">
            Our company is a member of the{" "}
            <a
              href="https://www.victorum-group.com/"
              style={{ color: "inherit", marginLeft: "4px" }}
            >
              Victorum Group of Companies
            </a>{" "}
            and is a worldwide leading B2B e-commerce platform that connects
            buyers and suppliers all over the world.
          </Typography>
          <Typography className="pressSubtitle">
            Our focus is not just on China, India, Turkey and Africa - we have a
            deep knowledge of the rapidly growing markets in Belarus,
            Kazakhstan, Brazil and Korea.
          </Typography>
          <Typography className="pressSubtitle">
            No matter if you are running a start-up or if your company has
            existed for a hundred years, we help companies of every size as well
            as sole traders and individuals.
          </Typography>

          <Typography className="pressSubtitle">
            Connecting more than 350.000 buyers and sellers with more than 2.1
            million requests each year throughout more than 11
            product categories.
          </Typography>

          <Typography className="pressSubtitle">
            Benefit from more than 350.000 registered users and{" "}
            <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
              click here
            </a>{" "}
            to start selling your products!
          </Typography>

          <Typography className="pressSubtitle">
            Our team makes it easy for you to sell products, because you don´t
            just place passively products on our platform - we are actively
            helping you to find business partners and to grow your business!
          </Typography>

          <Typography className="pressSubtitle">
            With an experienced team and representations all over the world we
            are your global partner with minimum rates and maximum service!
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginLeft: "4px",
              }}
            >
              Click here
            </a>{" "}
            to sell your products{" "}
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginLeft: "4px",
              }}
            >
              or here
            </a>{" "}
            in case you are searching to{" "}
            <a
              href="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginLeft: "4px",
              }}
            >
              buy
            </a>{" "}
            products or subscribe to useful services!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
