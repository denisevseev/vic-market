// Import necessary components from MUI or another UI library if you're using one
"use client";
import Image from "next/image";
import { useState } from "react";
import { TextField, Button, InputAdornment, Typography } from "@mui/material";
import { Mic, Phone } from "@mui/icons-material";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import "./postBuyRequirement.scss";
import { useMediaQuery } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";

const PostBuyRequirement = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [requirement, setRequirement] = useState("");
  const isMobile = useMediaQuery("(max-width:900px)");

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="container-banner">
      <div className="image-section">
        {/* Assuming the left part is a static image */}
        <Image
          src="/pbr-banner.webp"
          alt="Background"
          height={isMobile ? 200 : 324} // Example mobile height
          width={isMobile ? 300 : 400} // Example mobile width
        />
      </div>
      <div className="form-section">
        <div className="text-logo">
          <div>
            <h1>Post Buy Requirement</h1>
            <p style={{ marginBottom: "2rem" }}>
              Get the Best Deals and Exclusive Offers with TradeIndia
            </p>
          </div>
          <div style={{ marginTop: "16px" }} className="logo-banner">
            <Image
              src="/logo.png"
              alt="Logo"
              width={130}
              height={30}
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "-25px" }}>
            <p style={{ fontSize: "14px" }}>Tell us about your requirement*</p>
          </div>
          <TextField
            placeholder="Enter the product you are looking for..."
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                height: "56px",
                backgroundColor: "white",
              },
            }}
          />
          <div>
            <p style={{ fontSize: "14px" }}>Personalise your inquiry</p>
            <p style={{ fontSize: "12px" }}>
              Now, record your requirement to communicate clearly & faster with{" "}
              <br /> sellers than ever before.
            </p>
          </div>
          <div className="record-section">
            <div>
              <div className="d-flex ai-center gap-8 mb-8">
                <Mic />
                <span>Record</span>
              </div>
              <span className="mt-8 cp">click here to record</span>
            </div>
            <Image
              src="/background.png"
              alt="Logo"
              className="recordImage"
              width={136}
              height={113}
              priority
            />
            {/* <Mic />
            <span>Record</span>
            <span>click here to record</span> */}
          </div>

          <div style={{ textAlign: "end" }}>
            <Button
              variant="contained"
              //   onClick={handleNextStep}
              sx={{
                ".button-text p": {
                  textTransform: "none",
                },
              }}
              className="continueFormButton"
            >
              <div className="button-text">
                <p>Continue</p>
                <ArrowForwardIcon />
              </div>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostBuyRequirement;
