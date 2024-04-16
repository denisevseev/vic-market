"use client";
import "./MoreValueAdds.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useRouter } from "next/navigation";

export default function MoreValueAddsItem() {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };
  const handleUrl = (url: any) => {
    window.open(url, "_blank");
  };

  return (
    <Box className="addsItemMain">
      <Box className="addItemSingelMain">
        <Box className="victorumCapitalAndLearnMore">
          <Box sx={{ zIndex: 9 }}>
            <Typography className="victorumCapitalText">
              Get the latest
            </Typography>
            <Typography className="victorumCapitalText">news!</Typography>
          </Box>
          <Box
            className="learnMoreAndIcon"
            onClick={() => handleNavigate("/newsletter")}
          >
            <Typography className="learnMoreLink">Subscribe!</Typography>
            <Box className="arrowIconBox">
              <ArrowForwardIcon className="arrowRightIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="catlogsImage"></Box>
      </Box>
      <Box className="addItemSingelMain">
        <Box className="victorumCapitalAndLearnMore">
          <Box sx={{ zIndex: 9 }}>
            <Typography className="victorumCapitalText">
              Discover your
            </Typography>
            <Typography className="victorumCapitalText">potential!</Typography>
          </Box>
          <Box className="learnMoreAndIcon" onClick={() => handleNavigate("/categories")}>
            <Typography className="learnMoreLink">Learn more </Typography>
            <Box className="arrowIconBox">
              <ArrowForwardIcon className="arrowRightIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="buyLeadsImage"></Box>
      </Box>
      <Box className="addItemSingelMain">
        <Box className="victorumCapitalAndLearnMore">
          <Box sx={{ zIndex: 9 }}>
            <Typography className="victorumCapitalText">You got</Typography>
            <Typography className="victorumCapitalText">questions?</Typography>
          </Box>
          <Box
            className="learnMoreAndIcon"
            onClick={() => handleNavigate("/contact-us?from=legal")}
          >
            <Typography className="learnMoreLink">Get in touch! </Typography>
            <Box className="arrowIconBox">
              <ArrowForwardIcon className="arrowRightIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="membershipImage"></Box>
      </Box>
      <Box className="addItemSingelMain">
        <Box className="victorumCapitalAndLearnMore">
          <Box sx={{ zIndex: 9 }}>
            <Typography className="victorumCapitalText">
              Cheap online
            </Typography>
            <Typography className="victorumCapitalText">
              transactions!
            </Typography>
          </Box>
          <Box
            className="learnMoreAndIcon"
            onClick={() => handleUrl("https://www.vicpayments.com")}
          >
            <Typography className="learnMoreLink">Learn more </Typography>
            <Box className="arrowIconBox">
              <ArrowForwardIcon className="arrowRightIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="bookDomainImage"></Box>
      </Box>
    </Box>
  );
}
