"use client";
import "./more-value-adds.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import MoreValueAddsItem from "./More-value-adds-item";

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
