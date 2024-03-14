"use client";
import { Box, Button, Typography } from "@mui/material";
import "./ProductGrow.scss";
import React from "react";

export default function ProductGrow({ scrollToPostBuyRequirement }: any) {
  return (
    <Box className="lookingForProductWantToGrowYourBusinessMain">
      <Box className="lookingForProductWantToGrowYourBusinessMainBox">
        <Box className="lookingForProducMainBox">
          <Typography className="lookingForProductText">
            You are looking <br />
            for a Product?
          </Typography>
          <Button
            variant="outlined"
            className="lookingForProBtn"
            onClick={scrollToPostBuyRequirement}
          >
            <Typography className="postByText">Post the Product!</Typography>
            <Typography className="requirementText"></Typography>
          </Button>
        </Box>
        <Box className="wantToGrowYourBusinessMainBox">
          <Typography className="wantToGrowYourBusinessText">
            You offer products or goods and <br />
            want to extend your business?
          </Typography>
          <Button variant="outlined" className="wantToGrowBtn">
            <Typography className="wantToGrowText">Get new clients!</Typography>
            <Typography className="trandeIndiaText"></Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
