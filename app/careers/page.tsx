"use client";
import React from "react";
import Box from "@mui/material/Box";
import "./Careers.scss";
import { Typography } from "@mui/material";
import { globalDetails } from "../utils/constants";
import HeadData from "../components/head";
import JobApplication from "../components/OnlineJopApplication/JobApplication";

export default function CareersPage() {
  const handleContact = () => {
    window.location.href =
      "mailto:" +
      globalDetails.email +
      "?subject=Inquiry&body=Hello, I am interested in...";
  };

  return (
    <>
      <HeadData
        title="Careers | Victorum Trade"
        description="Discover career opportunities at Victorum Trade, where we connect businesses worldwide. Join us in working towards a sustainable world."
        keywords="Careers, job opportunities, Victorum Trade, sustainable world, market knowledge"
      />
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
                Using market knowledge to connect business worldwide - this is
                what we do.
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
              At Victorum we are working towards a more sustainable world that’s
              better for all.
            </Typography>

            <Typography className="careersSubtitle">
              Our technologies and innovations go much further than business
              consulting - we put our hearts and passion into growing sales,
              connect business from different countries, continents and
              commercial activities.
            </Typography>

            <Typography className="careersSubtitle">
              You are interested in new challenges?
            </Typography>

            <Typography className="careersSubtitle">Job 1:</Typography>
            <Typography className="careersSubtitle">
              Desciption: IT Operations Manager (all genders)
              <br />
              Location: Hong Kong
              <br />
              Contract: Full time
              <br />
              Department: IT Operations & Security
              <br />
            </Typography>

            <Typography className="careersSubtitle">Job 2:</Typography>
            <Typography className="careersSubtitle">
              Desciption: CSIRT Analyst (all genders)
              <br />
              Location: Hong Kong
              <br />
              Contract: Full time
              <br />
              Department: IT Operations & Security
              <br />
            </Typography>

            <Typography className="careersSubtitle">Job 3:</Typography>
            <Typography className="careersSubtitle">
              Desciption: PR Junior Manager (all genders)
              <br />
              Location: Hong Kong
              <br />
              Contract: Part time
              <br />
              Department: Marketing & PR
              <br />
            </Typography>

            <Typography className="careersSubtitle">Job 4:</Typography>
            <Typography className="careersSubtitle">
              Desciption: Client Liaison Manager (all genders)
              <br />
              Location: Hong Kong
              <br />
              Contract: Full time
              <br />
              Department: Sales & Client Liaison
              <br />
            </Typography>

            <Typography className="careersSubtitle">
              Would you like to learn more about job opportunities at Victorum?
            </Typography>

            <Typography className="careersSubtitle">
              {" "}
              No matter how good your career is now, we’ll help you get to the
              next level - send us message to{" "}
              <span className="mailToText" onClick={handleContact}>
                {globalDetails.email}
              </span>{" "}
              or use the contact form below!
            </Typography>
          </Box>
        </Box>
        <Box className="contactUsContainer">
          <JobApplication />
        </Box>
      </Box>
    </>
  );
}
