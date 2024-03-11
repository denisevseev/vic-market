"use client";
import "./TopCategories.scss";
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
import Link from "next/link";

interface TopCategoritesProps {
  data: any[];
}

const TopCategoriesSlider: React.FC<TopCategoritesProps> = ({ data }) => {
  return (
    <Box className="topCategoriesSliderMainBox">
      <Box>
        <Box className="topCategoriesAndViewAll">
          <Box>
            <Typography className="topCategoryText">Product Categories</Typography>
          </Box>
          <Box>
            <Typography className="viewAllCategoriesLink">View all</Typography>
          </Box>
        </Box>
        <Box className="itemsSliderMainBox">
          {data &&
            data.map((dataItem, dataKey) => {
              return (
                <Box
                  key={"categorySlide" + dataKey}
                  className="itemSliderAndImageBox"
                >
                  <Link
                    className="imageSliderBackground"
                    href={"/category/" + dataItem.categorySlug}
                  >
                    <Box className="imageSliderBackground">
                      {dataItem.categoryIcon && (
                        <Image
                          src={dataItem.categoryIcon}
                          alt="Health & Beauty Icon"
                          width={64}
                          height={64}
                        />
                      )}
                    </Box>
                  </Link>
                  <Typography className="topCategoriesItemSlider">
                    {dataItem.categoryName}
                  </Typography>
                </Box>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};
export default TopCategoriesSlider;
