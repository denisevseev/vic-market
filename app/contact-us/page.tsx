"use client";
import React, { useRef } from "react";
import "./style.scss";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import CategoryRank from "../../public/category-rank.svg";
import ProductCategory from "../../public/product-category.svg";
import RegUsers from "../../public/reg-users.svg";
import InquiriesEveryYear from "../../public/inquiries-every-year.svg";
import AboutUsBuildingImage from "../../public/about-us-buildings.jpg";
import OurCoreValue from "../../public/service-num.jpeg";
import OurCoreValue2 from "../../public/email-logo-2.png";
import OurCoreValue3 from "../../public/our-core-value3.jpg";
import OurCoreValue4 from "../../public/our-core-value4.jpg";
import OurCoreValue5 from "../../public/our-core-value5.jpg";
import ConnectImage from "../../public/connect-image.png";
import OurJourneySlider from "../components/AboutUsSliders/OurJourneySlider";
import AutoPlaySlider from "../components/AboutUsSliders/AutoPlaySlider";
import UsaFlag from "../../public/usa.png";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";

export default function ContactUs() {
  const autoPlayImages = ["/testImage.png", "/testImage.png", "/testImage.png"];
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <Box>
        {/* FIRST SECTION */}
        <Box className="aboutUsMainBox">
          <Box className="firstSectionAboutUs">
            <Box className="badgeAboutUs">
              <Typography className="badgeAboutUsText">Contact Us</Typography>
            </Box>
            <Box className="mainHeadingAboutUs">
              <Typography className="mainHeadingAboutUsText" color={"#21130d"}>
                Get in Touch
              </Typography>
              <Box className="digitallySakshamTextsBox">
                <Typography
                  className="mainHeadingAboutUsText"
                  color={"#2a5182"}
                >
                  We are Here
                </Typography>
                <Typography
                  color={"#21130d"}
                  className="mainHeadingAboutUsText"
                >
                  {" "}
                  to Help!
                </Typography>
              </Box>
            </Box>
            <Box className="mainHeadingContent">
            </Box>
          </Box>
        </Box>

        {/* SECOND SECTION */}
        <Box className="fifthSectionMain">
          <Box className="fifthSectionBox">
            <Box className="fifthSectionContent">
              <Typography className="meetOurForceText">
                Our Contact Information
              </Typography>
              <Box className="ourCoreValueItems">
                <Box className="ourCoreValuesItemImage">
                  <Image
                    src={OurCoreValue}
                    width={509}
                    height={284}
                    layout="responsive"
                    style={{ height: "100%" }}
                    alt="Customer Service"
                  />
                </Box>
                <Box className="ourCoreValuesItemContent">
                  <Typography className="ourCoreValueContentHeading">
                    Customer Service
                  </Typography>

                  <Typography
                    className="ourCoreValueContentDesc"
                    sx={{
                      marginBottom: "16px",
                    }}
                  >
                    If you have a customer service question, please select your
                    local Victorum Service Number from the list below.
                  </Typography>

                  <Typography className="ourCoreValueContentDesc">
                    If you are not a client yet, you can dial 00000000 in order
                    to reach our support desk.
                  </Typography>
                </Box>
              </Box>

              <Box className="ourCoreValueItems2">
                <Box className="ourCoreValuesItemImage">
                  <Image
                    src={OurCoreValue2}
                    width={509}
                    style={{ height: "100%" }}
                    layout="responsive"
                    height={284}
                    alt="Constant Learning"
                  />
                </Box>
                <Box className="ourCoreValuesItemContent">
                  <Typography className="ourCoreValueContentHeading">
                    Email and Working Hours
                  </Typography>
                  <Typography className="ourCoreValueContentDesc">
                    You can also write us a message to support@xxxxx or use the 
                    <span
                      style={{ cursor: "pointer", textDecoration: "underline", marginLeft: "6px"}}
                      onClick={scrollToForm}
                    >
                      contact form below
                    </span>
                    {" - our support desk is available "}
                    <b>Monday to Friday from 08h till 18h.</b>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "50px",
          }}
        >
          <div ref={formRef}>
            <ContactUsForm />
          </div>
        </div>
      </Box>
    </main>
  );
}
