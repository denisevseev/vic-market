import React from "react";
import { Box, Typography } from "@mui/material";

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
        <Box className="popupBoxContainer" onMouseLeave={onMouseLeave}>
          <Box
            className="popupBox"
            onMouseLeave={(e) => {
              // Check if the mouse is leaving the popup
              if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                onMouseLeave();
              }
            }}
          >
            <Typography>{currentCategory}</Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default PopoverTopCategories;
