import React from "react";
import { Box, Typography } from "@mui/material";
import "./TopCategories.scss";
import Image from "next/image";
import HealthBeautyIcon from "../../../public/health-beauty.svg";

interface PopoverProps {
  popupVisible: boolean;
  currentCategory: string | null;
  onMouseLeave: () => void;
}

const PopoverTopCategories: React.FC<PopoverProps> = ({
  popupVisible,
  currentCategory,
  onMouseLeave,
}) => {
  return (
    <>
      {popupVisible && currentCategory && (
        <Box className="popupBoxContainer">
          <Box
            className="popupBox"
            onMouseLeave={(e) => {
              // Check if the mouse is leaving the popup
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                onMouseLeave();
              }
            }}
          >
            <Box sx={{ height: "100%", position: "relative" }}>
              <Box className="topCategoryNameAndIcon">
                <Image
                  src={HealthBeautyIcon}
                  width={22}
                  height={22}
                  alt="Health & Beauty Icon"
                />
                <Typography className="topCategoryNamePopup">
                  {currentCategory}
                </Typography>
              </Box>

              <Box className="subCategoriesHeadMain">
                <Box>
                  <Box className="subCategoriesHeadMainAndIcon">
                    <Image
                      src={HealthBeautyIcon}
                      width={26}
                      height={26}
                      alt="Health & Beauty Icon"
                    />
                    <Typography className="subCategoriesHeadText">
                      Pipes & Pipe Fittings
                    </Typography>
                  </Box>
                  <Box className="subCategoriesHeadItem">Round Pipe</Box>
                  <Box className="subCategoriesHeadItem">Hex Nipple</Box>
                </Box>

                <Box>
                  <Box className="subCategoriesHeadMainAndIcon">
                    <Image
                      src={HealthBeautyIcon}
                      width={26}
                      height={26}
                      alt="Health & Beauty Icon"
                    />
                    <Typography className="subCategoriesHeadText">
                      Pipes & Pipe Fittings
                    </Typography>
                  </Box>
                  <Box className="subCategoriesHeadItem">Round Pipe</Box>
                  <Box className="subCategoriesHeadItem">Hex Nipple</Box>
                </Box>

                <Box>
                  <Box className="subCategoriesHeadMainAndIcon">
                    <Image
                      src={HealthBeautyIcon}
                      width={26}
                      height={26}
                      alt="Health & Beauty Icon"
                    />
                    <Typography className="subCategoriesHeadText">
                      Pipes & Pipe Fittings
                    </Typography>
                  </Box>
                  <Box className="subCategoriesHeadItem">Round Pipe</Box>
                  <Box className="subCategoriesHeadItem">Hex Nipple</Box>
                </Box>
                <Box>
                  <Box className="subCategoriesHeadMainAndIcon">
                    <Image
                      src={HealthBeautyIcon}
                      width={26}
                      height={26}
                      alt="Health & Beauty Icon"
                    />
                    <Typography className="subCategoriesHeadText">
                      Pipes & Pipe Fittings
                    </Typography>
                  </Box>
                  <Box className="subCategoriesHeadItem">Round Pipe</Box>
                  <Box className="subCategoriesHeadItem">Hex Nipple</Box>
                </Box>

                <Box>
                  <Box className="subCategoriesHeadMainAndIcon">
                    <Image
                      src={HealthBeautyIcon}
                      width={26}
                      height={26}
                      alt="Health & Beauty Icon"
                    />
                    <Typography className="subCategoriesHeadText">
                      Pipes & Pipe Fittings
                    </Typography>
                  </Box>
                  <Box className="subCategoriesHeadItem">Round Pipe</Box>
                  <Box className="subCategoriesHeadItem">Hex Nipple</Box>
                </Box>

                <Box>
                  <Box className="subCategoriesHeadMainAndIcon">
                    <Image
                      src={HealthBeautyIcon}
                      width={26}
                      height={26}
                      alt="Health & Beauty Icon"
                    />
                    <Typography className="subCategoriesHeadText">
                      Pipes & Pipe Fittings
                    </Typography>
                  </Box>
                  <Box className="subCategoriesHeadItem">Round Pipe</Box>
                  <Box className="subCategoriesHeadItem">Hex Nipple</Box>
                </Box>
              </Box>

              {/* <Box className="viewAllCategoriesLinkBox">
                <Typography className="viewAllCategoriesText">
                  View all Categories
                </Typography>
              </Box> */}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PopoverTopCategories;
