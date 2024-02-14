"use client";
import "./MoreValueAdds.scss";
import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function MoreValueAddsItem() {
  return (
    <Box className="addsItemMain">
      <Box className="addItemSingelMain">
        <Box className="victorumCapitalAndLearnMore">
          <Box>
            <Typography className="victorumCapitalText">Victorum Trading</Typography>
            <Typography className="victorumCapitalText">Catlogs</Typography>
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
        <Box className="victorumCapitalAndLearnMore">
          <Box>
            <Typography className="victorumCapitalText">Victorum Trading</Typography>
            <Typography className="victorumCapitalText">Buy Leads</Typography>
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
        <Box className="victorumCapitalAndLearnMore">
          <Box>
            <Typography className="victorumCapitalText">Victorum Trading</Typography>
            <Typography className="victorumCapitalText">Membership Plans</Typography>
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
        <Box className="victorumCapitalAndLearnMore">
          <Box>
            <Typography className="victorumCapitalText">Victorum Trading</Typography>
            <Typography className="victorumCapitalText">Book Domain</Typography>
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
