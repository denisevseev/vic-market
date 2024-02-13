"use client";
import "./PopularLinks.scss";
import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function PopularLinks({ title, links }: any) {
  return (
    <Box>
      <Box className="popularLinksMainBox">
        <Box>
          <Typography className="titleText">{title}</Typography>
        </Box>
        <Box>
          {links?.map((link: any, index: number) => (
            <Button key={index} className="linksButton">
              {link}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
