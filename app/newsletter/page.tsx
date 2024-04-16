"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function Newsletter() {
  const formRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  // email start
  const [email, setEmail] = useState("");
  const [isEmailValid, setEmailValid] = useState(false);
  const emailValidationRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const subscribeUser = async (e: any) => {
    const res = await fetch("/api", {
      body: JSON.stringify({
        email: email,
      }),

      headers: {
        "Content-Type": "application/json",
      },

      method: "POST",
    });
    if (res.ok) {
      setEmail("");
      toast.success("Subscribed successfully!");
    } else {
      toast.error("Email already subscribed!");
    }
  };

  const handleEmailChange = (event: any) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailValid(emailValidationRegex.test(emailValue));
  };

  const handleSubscribe = (event: any) => {
    event.preventDefault();
    if (isEmailValid) {
      subscribeUser(email);
    } else {
      toast.error("Please enter a valid email address.");
    }
  };
  // email end

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <Box className="newsLetterMainContainer">
        <Box className="titleHeadlineImgBg">
          <Box className="newsLetterTitleHeadlineMW">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* TITLE */}
              <Box className="newsLetterTitleBg">
                <Typography className="newsLetterTitleBgText">
                  Get Newsletter
                </Typography>
              </Box>
              {/* HEADLINE */}
              <Typography className="newsLetterTitle">
                {" "}
                Never miss updates, new products or discounts!
              </Typography>
            </Box>
            <Box
              sx={{
                boxShadow: "0 5px 20px 0 rgba(46,61,73,.1)",
                borderRadius: "12px",
              }}
            >
              <Box className="newsLetterBg"></Box>
            </Box>
          </Box>
        </Box>
        {/* SECOND SECTION */}
        <Box className="newsLetterTextContainerPadding">
          <Box className="newsLettertextContainer">
            <Typography className="contactUsSubtitle2">Subscribe</Typography>

            <Typography className="newsLetterSubtitle">
              Here you can easily{" "}
              <span className="mailToText" onClick={scrollToForm}>
                sign up
              </span>{" "}
              to our newsletter. Be the first to find out the latest news, tips
              for buying and selling through Victorum as well as general updates
              throughout the year.
            </Typography>

            <Box ref={formRef}>
              <Typography className="contactUsSubtitle2">
                Automatic Unsubscribe
              </Typography>

              <Typography className="newsLetterSubtitle">
                Please note that we will remove you from our subscriber list
                after one year - please feel free to resubscribe at any time!
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "50px",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubscribe}
            sx={{
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <TextField
              type="email"
              label="Your email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              InputProps={{
                sx: {
                  borderRadius: 2,
                  backgroundColor: "white",
                  width: "300px",
                  [theme.breakpoints.down("sm")]: {
                    width: "190px", // On screens smaller than 'sm', width will be 200px
                  },
                },
              }}
              required
              autoComplete="email"
              sx={{
                marginRight: "8px",
                ".MuiInputLabel-root": { color: "#333" },
              }}
            />
            <Button
              variant="contained"
              onClick={handleSubscribe}
              sx={{
                height: "52px",
                borderRadius: "8px",
                backgroundColor: "#2A5182",
                width: "100px",
                ".button-text p": {
                  textTransform: "none",
                },
              }}
            >
              <div className="button-text">
                <p className="font-size-16">Subscribe</p>
              </div>
            </Button>
            <ToastContainer />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
