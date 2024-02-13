"use client";
import "./OurServices.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import OurServicesItem from "./OurServicesItem";

export default function OurServices() {
  return (
    <Box className="ourServicesMainBox">
      <Box>
        <Typography className="ourServicesText">Our Services</Typography>
      </Box>
      <OurServicesItem />
    </Box>
  );
}
