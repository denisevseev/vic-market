"use client";
import { Box, Button, Typography } from "@mui/material";
import "./looking-for-product-want-to-grow-your-business.scss";
import React from "react";

export default function LookingForProductWantToGrowYourBusiness() {
  return (
    <Box className="lookingForProductWantToGrowYourBusinessMain">
      <Box className="lookingForProductWantToGrowYourBusinessMainBox">
        <Box className="lookingForProducMainBox">
          <Typography className="lookingForProductText">
            Looking <br />
            for a Product
          </Typography>
          <Button variant="outlined" className="lookingForProBtn">
            <Typography className="postByText">Post Buy</Typography>
            <Typography className="requirementText">Requirment</Typography>
          </Button>
        </Box>
        <Box className="wantToGrowYourBusinessMainBox">
          <Typography className="wantToGrowYourBusinessText">
            Want to grow your <br />
            business 10X Faster
          </Typography>
          <Button variant="outlined" className="wantToGrowBtn">
            <Typography className="wantToGrowText">Sell on</Typography>
            <Typography className="trandeIndiaText">TradeIndia</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
