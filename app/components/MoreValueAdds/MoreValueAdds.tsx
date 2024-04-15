"use client";
import "./MoreValueAdds.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import MoreValueAddsItem from "./MoreValueAddsItem";

export default function MoreValueAdds() {
  return (
    <Box className="moreValueAddsMainBox">
      <Box>
        <Typography className="moreValueAddsText">Victorum on a glance</Typography>
      </Box>
      <MoreValueAddsItem />
    </Box>
  );
}
