"use client";
import React from "react";
import "./SmallPopoverBox.scss";
import Image from "next/image";
import { Box } from "@mui/material";

const openNewTab = (url: any) => {
  const newWindow = window.open(url, "_blank");
  if (newWindow) {
    newWindow.opener = null;
  }
};

interface SmallPopoverBoxProps {
  imgSrc: string;
  text: string;
  redirectUrl?: string;
}
const SmallPopoverBox: React.FC<SmallPopoverBoxProps> = ({
  imgSrc,
  text,
  redirectUrl,
}) => {
  const handleClick = () => {
    openNewTab(redirectUrl);
  };
  return (
    <Box onClick={handleClick} sx={{ width: "100%" }}>
      <p className="box-container" rel="noopener noreferrer">
        {imgSrc && <Image src={imgSrc} alt={text} width={28} height={28} />}
        <div className="box-title">{text}</div>
      </p>
    </Box>
  );
};

export default SmallPopoverBox;
