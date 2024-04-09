"use client";
import { Box, Button, Typography } from "@mui/material";
import "./ProductGrow.scss";
import React, { useState } from "react";
import SellProductModal from "../SellProductModal/SellProductModal";

export default function ProductGrow({ scrollToPostBuyRequirement }: any) {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => setModalOpen(false);

  const handleOpenModal = () => setModalOpen(true);


  return (
    <Box className="lookingForProductWantToGrowYourBusinessMain">
      <Box className="lookingForProductWantToGrowYourBusinessMainBox">
        <Box className="lookingForProducMainBox">
          <Typography className="lookingForProductText">
            You are looking <br />
            for a Product?
          </Typography>
          <Button
            variant="outlined"
            className="lookingForProBtn"
            onClick={scrollToPostBuyRequirement}
          >
            <Typography className="postByText">Create request</Typography>
            <Typography className="requirementText"></Typography>
          </Button>
        </Box>
        <Box className="wantToGrowYourBusinessMainBox">
          <Typography className="wantToGrowYourBusinessText">
            You offer products or goods and <br />
            want to extend your business?
          </Typography>
          <Button variant="outlined" className="wantToGrowBtn" onClick={handleOpenModal}>
            <Typography className="wantToGrowText">Get new clients!</Typography>
            <Typography className="trandeIndiaText"></Typography>
          </Button>
          {isModalOpen && (
            <SellProductModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              isAudio={true}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}
