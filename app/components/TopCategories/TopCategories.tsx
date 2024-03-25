"use client";
import "./TopCategories.scss";
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
import { MarketRead } from "@/api/types/types";
import Link from "next/link";

interface TopCategoritesProps {
  data: MarketRead[] | undefined;
}

const TopCategories: React.FC<TopCategoritesProps> = ({ data }) => {
  //const [categoryData, setCategoryData] = useState<any>([]);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);
  const topCategoriesRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (category: string) => {
    setCurrentCategory(category);
    setPopupVisible(true);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
    const isLeavingMainBox = topCategoriesRef.current?.contains(
      event.relatedTarget as Node
    );
    const isLeavingPopover =
      event.relatedTarget instanceof Element &&
      event.relatedTarget.classList.contains("popupBoxContainer");

    if (!isLeavingMainBox && !isLeavingPopover) {
      // If the mouse is not leaving the main box or the popover, keep it visible
      setPopupVisible(false);
    }
  };

  return (
    <Box className="topCategoriesMainBox">
      <Box className="topCategoriesBox">
        <Box>
          <Typography className="topCategoryText">
            Product Categories
          </Typography>
        </Box>
        <Box className="itemsMainBox">
          {data &&
            data.map((dataItem, dataKey) => {
              return (
                <Box
                  key={"categorySide" + dataKey}
                  ref={topCategoriesRef}
                  className="itemAndImageBox"
                  //onMouseEnter={() => handleMouseEnter(dataItem.categoryName)}
                  //onMouseLeave={handleMouseLeave}
                >
                  {dataItem.categoryIcon && (
                    <Image src={HealthBeautyIcon} alt={dataItem.categoryName} />
                  )}
                  <Link
                    className="topCategoriesItem"
                    href={"/category/" + dataItem.categorySlug}
                  >
                    <Typography className="topCategoriesItem">
                      {dataItem.categoryName}
                    </Typography>
                  </Link>
                </Box>
              );
            })}
        </Box>
        {/* <Box>
          <Typography className="viewAllCategoriesLink">
            View all Categories
          </Typography>
        </Box> */}
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
