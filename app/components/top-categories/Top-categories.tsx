"use client";
import "./top-categories.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import HealthBeautyIcon from "../../../public/health-beauty.svg";
import FashionIcon from "../../../public/apparel-fashion.svg";
import ChemicalsIcon from "../../../public/chemicals.svg";
import MachineryIcon from "../../../public/machinery.svg";
import ConstructionIcon from "../../../public/construction-real-estate.svg";
import ElectronicsIcon from "../../../public/electronics-electrical-supplies.svg";
import MedicalIcon from "../../../public/hospital-medical-supplies.svg";
import GiftsIcon from "../../../public/gifts-crafts.svg";
import PackagingIcon from "../../../public/packaging-paper.svg";
import AgricultureIcon from "../../../public/agriculture.svg";
import HomeSuppliesIcon from "../../../public/home-supplies.svg";
import MineralMetalsIcon from "../../../public/mineral-metals.svg";
import IndustrialSuppliesIcon from "../../../public/industrial-supplies.svg";
import PipesTubesFittingsIcon from "../../../public/pipes-tubes-fittings.svg";
import Image from "next/image";

export default function TopCategories() {
  return (
    <Box className="topCategoriesMainBox">
      <Box className="topCategoriesBox">
        <Box>
          <Typography className="topCategoryText">Top Categories</Typography>
        </Box>
        <Box className="itemsMainBox">
          <Box className="itemAndImageBox">
            <Image src={HealthBeautyIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Health & Beauty
            </Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={FashionIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Apparel & Fashion
            </Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={ChemicalsIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">Chemicals</Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={MachineryIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">Machinery</Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={ConstructionIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Construction & Real Estate
            </Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={ElectronicsIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Electronics & Electrical Supplies
            </Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={MedicalIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Hospital & Medical Supplies
            </Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={GiftsIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Gifts & Crafts
            </Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={PackagingIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Packaging & Paper
            </Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={AgricultureIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">Agriculture</Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={HomeSuppliesIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">Home Supplies</Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={MineralMetalsIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Mineral & Metals
            </Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={IndustrialSuppliesIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Industrial Supplies
            </Typography>
          </Box>
          <Box className="itemAndImageBox">
            <Image src={PipesTubesFittingsIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Pipes, Tubes & Fittings
            </Typography>
          </Box>
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
