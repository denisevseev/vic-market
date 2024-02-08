"use client";
import "./moreValueAdds.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import MoreValueAddsItem from "./MoreValueAddsItem";

export default function MoreValueAdds() {
  return (
    <Box className="moreValueAddsMainBox">
      <Box>
        <Typography className="moreValueAddsText">More Value Adds</Typography>
      </Box>
      <MoreValueAddsItem />
    </Box>
  );
}
