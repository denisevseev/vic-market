"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import "./SuccessfullSeller.scss";
import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { globalDetails } from "../utils/constants";
import HeadData from "../components/head";
import { SuccessfllSellerForm } from "../components/SuccessfullSellerForm/SuccessfullSellerForm";
export default function BookOfProfitPage() {
  const handleContact = () => {
    window.location.href = "mailto:" + globalDetails.email;
  };

  const [sectiontitle, setSectionTitle] = useState<string>("You want more?");

  return (
    <>
      <HeadData
        title="Our company | Victorum Trade"
        description="Our company is a member of the Victorum Group of Companies and is a worldwide leading B2B e-commerce platform that connects buyers and suppliers all over the world."
        keywords="Victorum Trade, Victorum Group of Companies, B2B e-commerce platform, buyers, suppliers, worldwide, leading, company profile, about us, corporate information, mission, vision, values, history, achievements, global presence"
      />
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
                <Typography className="pressTitleBgText">
                  Book of Profit
                </Typography>
              </Box>
              {/* HEADLINE */}
              <Typography className="pressTitle">
                Get the free Buyers´ Book of Profit now!
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
            <Box>
              <Typography
                className="contactUsSubtitle3"
                sx={{ marginBottom: "24px" }}
              >
                <b>{sectiontitle}</b>
              </Typography>
            </Box>
            <Typography className="pressSubtitle">
              <b>Learn how to maximize your profits on Victorum Trade!</b>
            </Typography>
            <Typography className="pressSubtitle">
              You are not just another client searching for good offers on
              another online marketplace.
            </Typography>
            <Typography className="pressSubtitle">
              We are not just another execution-only market place, where clients
              need to write dozens of messages and wait for weeks until they are
              able to find a competetive price for the product they are
              searching for.
            </Typography>

            <Typography className="pressSubtitle">
              Our unique approach, that our experts across our international
              branches actively support you and use their network in order to
              find the right producer for you, make our clients so succefull.
            </Typography>

            <Typography className="pressSubtitle">
              This eBook is you ultimate guide to understand quickly, how you
              can
            </Typography>

            <Typography className="pressSubtitle">
              - save loads of money purchasing through Victorum Trade
            </Typography>
            <Typography className="pressSubtitle"></Typography>
            <Typography className="pressSubtitle">
              - streamline the customs and freight process
            </Typography>
            <Typography className="pressSubtitle">
              - be sure, that there will be a no-hassle payment process with the
              highest security
            </Typography>

            <Typography className="pressSubtitle">
              - easily manage all this from your pc or smartphone
            </Typography>

            <Typography className="pressSubtitle">
              Start your journey by discovering and unfolding the full potential
              of Victorum Trade, fill out the form below and receive your free
              copy of our ultimative Buyers´Book of Profit now!
            </Typography>
          </Box>
        </Box>
        <div
          style={{
            textAlign: "center",
            marginTop: "40px",
            paddingLeft: "30px",
            paddingRight: "30px",
            marginBottom: "40px",
          }}
        >
          <SuccessfllSellerForm />
        </div>
      </Box>
    </>
  );
}
