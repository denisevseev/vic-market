"use client";
import "./top-categories.scss";
import React from "react";
import { Box, Typography } from "@mui/material";

export default function TopCategories() {
  return (
    <Box className="topCategoriesMainBox">
      <Box className="topCategoriesBox">
        <Box>
          <Typography className="topCategoryText">Top Categories</Typography>
        </Box>
        <Box>
          <Typography className="topCategoriesItem">Health & Beauty</Typography>
          <Typography className="topCategoriesItem">
            Apparel & Fashion
          </Typography>
          <Typography className="topCategoriesItem">Chemicals</Typography>
          <Typography className="topCategoriesItem">Machinery</Typography>
          <Typography className="topCategoriesItem">
            Construction & Real Estate
          </Typography>
          <Typography className="topCategoriesItem">
            Electronics & Electrical Supplies
          </Typography>
          <Typography className="topCategoriesItem">
            Hospital & Medical Supplies
          </Typography>
          <Typography className="topCategoriesItem">Gifts & Crafts</Typography>
          <Typography className="topCategoriesItem">
            Packaging & Paper
          </Typography>
          <Typography className="topCategoriesItem">Agriculture</Typography>
          <Typography className="topCategoriesItem">Home Supplies</Typography>
          <Typography className="topCategoriesItem">
            Mineral & Metals
          </Typography>
          <Typography className="topCategoriesItem">
            Industrial Supplies
          </Typography>
          <Typography className="topCategoriesItem">
            Pipes, Tubes & Fittings
          </Typography>
        </Box>
        <Box>
          <Typography className="viewAllCategoriesLink">
            View all Categories
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
