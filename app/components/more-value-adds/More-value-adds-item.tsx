"use client";
import "./more-value-adds.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function MoreValueAddsItem() {
  return (
    <Box className="addsItemMain">
      <Box className="addItemSingelMain">
        <Box className="tradeIndiaAndLearnMore">
          <Box>
            <Typography className="tradeIndiaText">TradeIndia</Typography>
            <Typography className="tradeIndiaText">Catlogs</Typography>
          </Box>
          <Box className="learnMoreAndIcon">
            <Typography className="learnMoreLink">Learn more </Typography>
            <Box className="arrowIconBox">
              <ArrowForwardIcon className="arrowRightIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="catlogsImage"></Box>
      </Box>
      <Box className="addItemSingelMain">
        <Box className="tradeIndiaAndLearnMore">
          <Box>
            <Typography className="tradeIndiaText">TradeIndia</Typography>
            <Typography className="tradeIndiaText">Buy Leads</Typography>
          </Box>
          <Box className="learnMoreAndIcon">
            <Typography className="learnMoreLink">Learn more </Typography>
            <Box className="arrowIconBox">
              <ArrowForwardIcon className="arrowRightIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="buyLeadsImage"></Box>
      </Box>
      <Box className="addItemSingelMain">
        <Box className="tradeIndiaAndLearnMore">
          <Box>
            <Typography className="tradeIndiaText">TradeIndia</Typography>
            <Typography className="tradeIndiaText">Membership Plans</Typography>
          </Box>
          <Box className="learnMoreAndIcon">
            <Typography className="learnMoreLink">Learn more </Typography>
            <Box className="arrowIconBox">
              <ArrowForwardIcon className="arrowRightIcon" />
            </Box>
          </Box>
        </Box>
        <Box className="membershipImage"></Box>
      </Box>
      <Box className="addItemSingelMain">
        <Box className="tradeIndiaAndLearnMore">
          <Box>
            <Typography className="tradeIndiaText">TradeIndia</Typography>
            <Typography className="tradeIndiaText">Book Domain</Typography>
          </Box>
          <Box className="learnMoreAndIcon">
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
