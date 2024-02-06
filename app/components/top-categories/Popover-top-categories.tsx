import React from "react";
import { Box, Typography } from "@mui/material";

const PopoverTopCategories = ({ content }: any) => {
  return (
    <Box className="popoverContent">
      <Typography>{content}</Typography>
    </Box>
  );
};

export default PopoverTopCategories;
