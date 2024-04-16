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
              <div
                className="imageContainer-logo"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  src="/bl-capital.png"
                  alt="Victorum Capital"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
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
            <Typography className="tradeText">Victorum</Typography>
            <Typography className="tradeTextBold">Trading</Typography>
          </Box>

          <Box className="ourServicesItemImage">
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                className="imageContainer-logo"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  src="/bl-trade.png"
                  alt="Victorum Capital"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
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
                paddingRight: "1rem",
              }}
            >
              <div
                className="imageContainer"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingLeft: "1rem",
                }}
              >
                <Image
                  src="/frs.webp"
                  alt="Victorum Capital"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
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
          <Box className="ourServicesItemImageEasy">
            <Box
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Image
                  width={75}
                  height={40}
                  src="/vicpayServiceLogo.png"
                  alt="Victorum Capital"
                  objectFit="contain"
                />
              </div>
            </Box>
          </Box>

          <Box
            className="ourServicesLearnMoreAndIcon"
            onClick={() => handleRedirect("https://vicpayments.com/")}
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
