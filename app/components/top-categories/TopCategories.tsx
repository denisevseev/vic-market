"use client";
import "./topCategories.scss";
import React, { useRef, useState } from "react";
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
import PopoverTopCategories from "./PopoverTopCategories";

interface TopCategoritesProps {
  data: any[];
}

const TopCategories: React.FC<TopCategoritesProps> = ({ data }) => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const topCategoriesRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (category: string) => {
    setCurrentCategory(category);
    setPopupVisible(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    if (
      topCategoriesRef.current &&
      topCategoriesRef.current.contains(event.target as Node)
    ) {
      // Mouse is still inside the main box, do not hide the popup
      return;
    }

    // If the mouse is leaving the popup or specific areas, hide the popup
    setPopupVisible(false);
  };

  return (
    <Box className="topCategoriesMainBox">
      <Box className="topCategoriesBox">
        <Box>
          <Typography className="topCategoryText">Top Categories</Typography>
        </Box>
        <Box className="itemsMainBox" ref={topCategoriesRef}>
          <Box
            className="itemAndImageBox"
            onMouseEnter={() => handleMouseEnter("healthBeauty")}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={HealthBeautyIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Health & Beauty
            </Typography>
          </Box>
          <Box
            className="itemAndImageBox"
            onMouseEnter={() => handleMouseEnter("Apparel")}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={FashionIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Apparel & Fashion
            </Typography>
          </Box>
          <Box
            className="itemAndImageBox"
            onMouseEnter={() => handleMouseEnter("Chemicals")}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={ChemicalsIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">Chemicals</Typography>
          </Box>
          <Box
            className="itemAndImageBox"
            onMouseEnter={() => handleMouseEnter("Machinery")}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={MachineryIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">Machinery</Typography>
          </Box>
          <Box
            className="itemAndImageBox"
            onMouseEnter={() => handleMouseEnter("Construction")}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={ConstructionIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Construction & Real Estate
            </Typography>
          </Box>
          <Box
            className="itemAndImageBox"
            onMouseEnter={() => handleMouseEnter("electronics")}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={ElectronicsIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Electronics & Electrical Supplies
            </Typography>
          </Box>
          <Box
            className="itemAndImageBox"
            onMouseEnter={() => handleMouseEnter("Hospital")}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={MedicalIcon} alt="Health & Beauty Icon" />
            <Typography className="topCategoriesItem">
              Hospital & Medical Supplies
            </Typography>
          </Box>
          <Box
            className="itemAndImageBox"
            onMouseEnter={() => handleMouseEnter("Gifts")}
            onMouseLeave={handleMouseLeave}
          >
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
      <PopoverTopCategories
        popupVisible={popupVisible}
        currentCategory={currentCategory}
        onMouseLeave={() => setPopupVisible(false)}
      />
    </Box>
  );
};
export default TopCategories;
