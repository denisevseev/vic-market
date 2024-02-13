"use client";
import "./OurServices.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function OurServicesItem() {
  return (
    <Box className="ourServicesItemMain">
      <Box className="ourServiceItemSingelMain">
        <Box>
          <Box className="ourServicesItemText">
            <Typography className="tradeText">Trade</Typography>
            <Typography className="tradeTextBold">Udhaar</Typography>
          </Box>
          <Box className="ourServicesLearnMoreAndIcon">
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
            <Typography className="tradeText">Victorum Capital</Typography>
            <Typography className="tradeTextBold">
              GetDistributors.com
            </Typography>
          </Box>
          <Box className="ourServicesLearnMoreAndIcon">
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
            <Typography className="tradeText">Trade</Typography>
            <Typography className="tradeTextBold">Shows</Typography>
          </Box>
          <Box className="ourServicesLearnMoreAndIcon">
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
            <Typography className="tradeText">Trade</Typography>
            <Typography className="tradeTextBold">Khata</Typography>
          </Box>
          <Box className="ourServicesLearnMoreAndIcon">
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
