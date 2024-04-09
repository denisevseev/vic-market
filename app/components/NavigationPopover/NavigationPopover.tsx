"use client";
import React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./NavigationPopover.scss";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SmallPopoverBox from "./SmallPopoverBox/SmallPopoverBox";

const NavigationPopover = ({ id, open, anchorEl, onClose }: any) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      sx={{
        ".MuiPopover-paper": {
          width: "312px",
          // height: "464px",
          padding: "16px 16px 16px 16px",
          borderRadius: "8px",
          marginTop: "12px",
        },
      }}
    >
      {/* <Typography
        sx={{
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "16px",
          fontWeight: 600,
          marginBottom: "16px",
        }}
      >
        VICTORUM TRADE ON A GLANCE
      </Typography> */}
      {/* <Button
        variant="contained"
        fullWidth
        sx={{
          height: "44px",
          borderRadius: "8px",
          backgroundColor: "#2A5182;",
          marginBottom: "8px",
        }}
      >
        <div className="button-inline">
          <p>Post Buy Requiremenet</p>
          <ArrowForwardIcon />
        </div>
      </Button> */}
      <div className="plan-text-line" style={{ marginTop: "4px" }}>
        <Image src={"/crown.svg"} alt={"crown"} width={16} height={12} />
        <Typography
          sx={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          VICTORUM TRADE ON A GLANCE
        </Typography>
      </div>

      <div className="boxes-container" style={{ marginBottom: "24px" }}>
        <SmallPopoverBox
          imgSrc="/Ti-Landing.svg"
          text="Post Sell Order"
          // redirectUrl="https://www.google.com"
        />
        <SmallPopoverBox
          imgSrc="/Ti-Pay.svg"
          text="Post Buy Order"
          // redirectUrl="https://www.google.com"
        />
        <SmallPopoverBox
          imgSrc="/g-bus-listing.svg"
          text="Company Profile"
          // redirectUrl="https://www.google.com"
        />
      </div>

      {/* second block start */}
      <div className="plan-text-line" style={{ marginTop: "4px" }}>
        {/* <NextPlanIcon /> */}
        <Image src={"/crown.svg"} alt={"crown"} width={16} height={12} />
        <Typography
          sx={{
            fontFamily: "Helvetica, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          EXCLUSIVE VICTORUM SERVICES
        </Typography>
      </div>

      <div className="boxes-container" style={{ marginBottom: "8px" }}>
        <SmallPopoverBox
          imgSrc="/Ti-Landing.svg"
          text="Victorum Capital"
          redirectUrl="https://www.victorum-capital.com/"
        />
        <SmallPopoverBox
          imgSrc="/Ti-Pay.svg"
          text="VicPay"
          redirectUrl="https://vicpayments.com/"
        />
        {/* <SmallPopoverBox
          imgSrc="/Tradekhata.svg"
          text="Tradekhata"
          // redirectUrl="https://www.google.com"
        /> */}
      </div>
      <div className="boxes-container">
        {/* <SmallPopoverBox
          imgSrc="/make-payment.svg"
          text="Make Payment"
          // redirectUrl="https://www.google.com"
        /> */}
        <SmallPopoverBox
          imgSrc="/trade-shows.svg"
          text="Trade Fairs & Exhibitions"
          // redirectUrl="https://www.google.com"
        />
        <SmallPopoverBox
          imgSrc="/get-distributers.svg"
          text="Victorum Trading"
          // redirectUrl="https://www.google.com"
        />
      </div>
      {/* second block end */}
    </Popover>
  );
};

export default NavigationPopover;
