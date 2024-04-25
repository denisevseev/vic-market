"use client";
import React from "react";
import Box from "@mui/material/Box";
import "./Press.scss";
import { Typography } from "@mui/material";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";
import { globalDetails } from "../utils/constants";
import HeadData from "../components/head";

export default function PressPage() {
  const handleContact = () => {
    window.location.href = "mailto:" + globalDetails.email;
  };

  return (
    <>
      <HeadData
        title="Press | Victorum Trade"
        description="Stay updated with the latest news and publications from Victorum Trade's press section."
        keywords="Press, news, publications, press reports, Victorum Trade, transparency, updates"
      />
      <Box className="pressMainContainer">
        <Box className="titleHeadlineImgBg">
          <Box className="pressTitleHeadlineMW">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* TITLE */}
              <Box className="pressTitleBg">
                <Typography className="pressTitleBgText">Press</Typography>
              </Box>
              {/* HEADLINE */}
              <Typography className="pressTitle">
                Transparency is one of the pillars of our business
              </Typography>
            </Box>
            <Box
              sx={{
                boxShadow: "0 5px 20px 0 rgba(46,61,73,.1)",
                borderRadius: "12px",
              }}
            >
              <Box className="pressBg"></Box>
            </Box>
          </Box>
        </Box>
        {/* TEXT */}
        <Box className="pressTextContainerPadding">
          <Box className="presstextContainer">
            <Typography className="pressSubtitle">
              Transparency is one of the pillars of our business - so that you
              always know what is happening at our company, you will find all
              relevant publications, news and press reports on our company in
              the news section of our website.
            </Typography>
            <Typography className="pressSubtitle">
              You are a journalist, want to publish something about our company
              and need additional information?
            </Typography>
            <Typography className="pressSubtitle">
              {" "}
              Send us a message to{" "}
              <span className="mailToText" onClick={handleContact}>
                {globalDetails.email}
              </span>{" "}
              - our press desk will be happy to help you!
            </Typography>
          </Box>
        </Box>
        <Box className="contactUsContainer">
          <ContactUsForm />
        </Box>
      </Box>
    </>
  );
}
