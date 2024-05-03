"use client";
import React, { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import "./ContactUsForm.scss";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CountrySelect from "../CountrySelect/CountrySelect";

const ContactUsForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState({
    email: false,
    subject: false,
    message: false,
    justCountry: false,
  });

  // just country select start
  const [justCountry, setJustCountry] = useState("");

  const handleCountrySelect = (value: any) => {
    setJustCountry(value);
  };
  // just country select end

  const validateForm = () => {
    const newError = {
      email: false,
      subject: false,
      message: false,
      justCountry: false,
    };
    let isValid = true;

    if (!email || !email.includes("@")) {
      newError.email = true;
      isValid = false;
    }
    if (!subject) {
      newError.subject = true;
      isValid = false;
    }
    if (!message) {
      newError.message = true;
      isValid = false;
    }

    if (!justCountry) {
      newError.justCountry = true;
      isValid = false;
    } else {
      newError.justCountry = false;
    }

    console.log(newError);

    setError(newError);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    setIsTouched(true);
    e.preventDefault();
    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("userCountry", justCountry);
    setIsLoading(true);

    try {
      const response = await axios.post("/api/market/contact", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending data to the backend: ", error);
    } finally {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
      setSubject("");
      setMessage("");
      setIsTouched(false);
      // setJustCountry("");
    }
  };

  return (
    <div>
      <Box
        className="responsiveBoxForm"
        component="form"
        onSubmit={handleSubmit}
        noValidate
      >
        {/* start */}
        {!isSubmitted ? (
          <>
            <Typography
              variant="h6"
              component="h2"
              className="send-inquiry"
              sx={{
                color: "rgb(38, 92, 129);",
                fontSize: "28px",
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Contact Form
            </Typography>
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={error.email}
              helperText={error.email && "Please enter a valid email."}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
            <TextField
              fullWidth
              label="Subject"
              margin="normal"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              error={error.subject}
              helperText={error.subject && "Subject is required."}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
            <div style={{ marginTop: "8px", width: "100%" }}>
              <CountrySelect
                value={justCountry}
                isTouched={isTouched}
                errors={error.justCountry}
                onSelect={handleCountrySelect}
              />
            </div>

            <TextField
              fullWidth
              label="Message"
              margin="normal"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={error.message}
              helperText={error.message && "Message is required."}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
            />
            <Box
              sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={{
                  ".button-text p": {
                    textTransform: "none",
                    width: " 80px",
                  },
                }}
                className="submitFormButton"
              >
                <div className="button-text">
                  <p className="font-size-16">Submit</p>
                </div>
              </Button>
            </Box>
          </>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              <CircularProgress sx={{ mb: 10, mt: 10 }} size={60} />
            ) : (
              <div
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                <CheckCircleOutlineIcon sx={{ color: "green", fontSize: 48 }} />
                <Typography
                  variant="h6"
                  component="h2"
                  className="send-inquiry"
                  sx={{
                    color: "green",
                    fontSize: "28px",
                    fontWeight: "600",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  Successfully Submitted
                </Typography>
              </div>
            )}
            <Button
              onClick={() => {
                setIsSubmitted(false);
                setIsTouched(false);
                setJustCountry("");
              }}
              variant="contained"
              sx={{
                ".button-text p": {
                  textTransform: "none",
                  width: " 80px",
                  marginTop: "16px",
                },
              }}
              className="submitFormButton"
            >
              <div className="button-text">
                <p className="font-size-16">Return</p>
              </div>
            </Button>
          </Box>
        )}
        {/* end */}
      </Box>
    </div>
  );
};

export default ContactUsForm;
