"use client";
import React from "react";
import Box from "@mui/material/Box";
import "./Careers.scss";
import { Typography } from "@mui/material";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";

export default function CareersPage() {
  const handleContact = () => {
    window.location.href =
      "mailto:jobs@xxxcc?subject=Inquiry&body=Hello, I am interested in...";
  };

  return (
    <Box className="careersMainContainer">
      <Box className="titleHeadlineImgBg">
        <Box className="careerTitleHeadlineMW">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* TITLE */}
            <Box className="careerTitleBg">
              <Typography className="careerTitleBgText">Careers</Typography>
            </Box>
            {/* HEADLINE */}
            <Typography className="careerTitle">
              We are connecting the business worldwide - join us!
            </Typography>
          </Box>
          <Box
            sx={{
              boxShadow: "0 5px 20px 0 rgba(46,61,73,.1)",
              borderRadius: "12px",
            }}
          >
            <Box className="careerBg"></Box>
          </Box>
        </Box>
      </Box>
      {/* TEXT */}
      <Box className="careersTextContainerPadding">
        <Box className="careerstextContainer">
          <Typography className="careersSubtitle">
            Using market knowledge to connect business worldwide is what we do.
          </Typography>

          <Typography className="careersSubtitle">
            At Victorum we are working towards a more sustainable world that’s
            better for all.
          </Typography>

          <Typography className="careersSubtitle">
            Our technologies and innovations go much further than business
            consulting - we put our hearts and passion into growing sales,
            connect business from different countries, continents and commercial
            activities.
          </Typography>

          <Typography className="careersSubtitle">
            You are interested in new challenges?
          </Typography>

          <Typography className="careersSubtitle">
            Would you like to learn more about job opportunities at Victorum?
          </Typography>

          <Typography className="careersSubtitle">
            {" "}
            No matter how good your career is now, we’ll help you get to the
            next level - send us message to{" "}
            <span className="mailToText" onClick={handleContact}>
              jobs@xxxcc
            </span>{" "}
            or use the contact form below!
          </Typography>
        </Box>
      </Box>
      <Box className="contactUsContainer">
        <ContactUsForm />
      </Box>
    </Box>
  );
}
