"use client";
import "./OurServices.scss";
import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";

export default function OurServicesItem() {
  const isSmallScreen = useMediaQuery("(max-width:1200px)");

  const handleRedirect = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <Box className="ourServicesItemMain">
      <Box className="ourServiceItemSingelMain">
        <Box>
          <Box className="ourServicesItemText">
            <Typography className="tradeText">Victorum</Typography>
            <Typography className="tradeTextBold">Capital</Typography>
          </Box>

          <Box className="ourServicesItemImage">
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Image
                src="/bl-capital.png"
                alt="bI-capital"
                width={isSmallScreen ? 80 : 140} // Example: half size on small screens
                height={isSmallScreen ? 30 : 50}
              />
            </Box>
          </Box>

          <Box
            className="ourServicesLearnMoreAndIcon"
            onClick={() => handleRedirect("https://www.victorum-capital.com/")}
          >
            <Typography className="ourServiceslearnMoreLink">
              Learn more{" "}
            </Typography>
            <Box className="ourServicesarrowIconBox">
              <ArrowForwardIcon className="ourServicesArrowRightIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="serviceCard"></Box>
      </Box>

      <Box className="ourServiceItemSingelMain">
        <Box>
          <Box className="ourServicesItemText">
            <Typography className="tradeText">Victorum Trading</Typography>
            <Typography className="tradeTextBold">GetD.com</Typography>
          </Box>

          <Box className="ourServicesItemImage">
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Image
                src="/bl-capital.png"
                alt="bI-capital"
                width={isSmallScreen ? 80 : 140} // Example: half size on small screens
                height={isSmallScreen ? 30 : 50}
              />
            </Box>
          </Box>
          <Box
            className="ourServicesLearnMoreAndIcon"
            onClick={() => handleRedirect("")}
          >
            <Typography className="ourServiceslearnMoreLink">
              Learn more{" "}
            </Typography>
            <Box className="ourServicesarrowIconBox">
              <ArrowForwardIcon className="ourServicesArrowRightIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="serviceCard2"></Box>
      </Box>
      <Box className="ourServiceItemSingelMain">
        <Box>
          <Box className="ourServicesItemText">
            <Typography className="tradeText">Trade Fairs &</Typography>
            <Typography className="tradeTextBold">Exhibitions</Typography>
          </Box>
          <Box className="ourServicesItemImageLast">
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
                // backgroundColor: "white", // Set the background color to white
                padding: "10px",
              }}
            >
              <Image
                src="/trdcap.webp"
                alt="Victorum Capital"
                width={isSmallScreen ? 80 : 140} // Example: half size on small screens
                height={isSmallScreen ? 30 : 50}
              />
            </Box>
          </Box>
          <Box
            className="ourServicesLearnMoreAndIcon"
            onClick={() => handleRedirect("")}
          >
            <Typography className="ourServiceslearnMoreLink">
              Learn more{" "}
            </Typography>
            <Box className="ourServicesarrowIconBox">
              <ArrowForwardIcon className="ourServicesArrowRightIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="serviceCard3"></Box>
      </Box>
      <Box className="ourServiceItemSingelMain">
        <Box>
          <Box className="ourServicesItemText">
            <Typography className="tradeText">
              Easy Payment Solutions
            </Typography>
            <Typography className="tradeTextBold">VicPay</Typography>
          </Box>
          <Box className="ourServicesItemImageLast">
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Image
                src="/vicpay.png"
                alt="Victorum Capital"
                width={isSmallScreen ? 80 : 140} // Example: half size on small screens
                height={isSmallScreen ? 30 : 45}
              />
            </Box>
          </Box>
          <Box
            className="ourServicesLearnMoreAndIcon"
            onClick={() => handleRedirect("https://vicpayments.com/login")}
          >
            <Typography className="ourServiceslearnMoreLink">
              Learn more{" "}
            </Typography>
            <Box className="ourServicesarrowIconBox">
              <ArrowForwardIcon className="ourServicesArrowRightIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="serviceCard4"></Box>
      </Box>
    </Box>
  );
}
