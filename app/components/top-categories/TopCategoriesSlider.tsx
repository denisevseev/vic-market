"use client";
import "./topCategories.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import HealthBeautyIcon from "../../../public/health-beauty-slider.png";
import FashionIcon from "../../../public/fashion-slider.png";
import ChemicalsIcon from "../../../public/chemicals-slider.png";
import MachineryIcon from "../../../public/machinery-slider.png";
import ConstructionIcon from "../../../public/construction-slider.png";
import ElectronicsIcon from "../../../public/electronics-slider.png";
import MedicalIcon from "../../../public/medical-slider.png";
import GiftsIcon from "../../../public/gifts-slider.png";
import PackagingIcon from "../../../public/packaging-slider.png";
import AgricultureIcon from "../../../public/agriculture-slider.png";
import HomeSuppliesIcon from "../../../public/home-supplies-slider.png";
import MineralMetalsIcon from "../../../public/mineral-metals-slider.png";
import IndustrialSuppliesIcon from "../../../public/industrial-supplies-slider.png";
import PipesTubesFittingsIcon from "../../../public/pipes-tubes-slider.png";
import Image from "next/image";

interface TopCategoritesProps {
  data: any[];
}

const TopCategoriesSlider: React.FC<TopCategoritesProps> = ({ data }) => {
  return (
    <Box className="topCategoriesSliderMainBox">
      <Box>
        <Box className="topCategoriesAndViewAll">
          <Box>
            <Typography className="topCategoryText">Top Categories</Typography>
          </Box>
          <Box>
            <Typography className="viewAllCategoriesLink">View all</Typography>
          </Box>
        </Box>
        <Box className="itemsSliderMainBox">
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={HealthBeautyIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Health & Beauty
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={FashionIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Apparel & Fashion
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={ChemicalsIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Chemicals
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={MachineryIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Machinery
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={ConstructionIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Construction & Real Estate
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={ElectronicsIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Electronics & Electrical Supplies
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={MedicalIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Hospital & Medical Supplies
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={GiftsIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Gifts & Crafts
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={PackagingIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Packaging & Paper
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={AgricultureIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Agriculture
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={HomeSuppliesIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Home Supplies
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={MineralMetalsIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Mineral & Metals
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={IndustrialSuppliesIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Industrial Supplies
            </Typography>
          </Box>
          <Box className="itemSliderAndImageBox">
            <Box className="imageSliderBackground">
              <Image
                src={PipesTubesFittingsIcon}
                alt="Health & Beauty Icon"
                width={64}
                height={64}
              />
            </Box>
            <Typography className="topCategoriesItemSlider">
              Pipes, Tubes & Fittings
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TopCategoriesSlider;
