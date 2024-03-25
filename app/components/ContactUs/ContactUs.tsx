import React, { useState } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Typography,
  Alert,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import "./ContactUs.scss";
import { useCountryData } from "@/app/hooks/useCountryData";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: "28px", // Add border-radius here
};

const ContactUs = ({ open, setOpen }: any) => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [error, setError] = useState({
    email: false,
    subject: false,
    message: false,
  });

  // country start
  const { data: countryData } = useCountryData();
  const [userCountry, setUserCountry] = useState("");

  const handleChangeCountry = (event: any) => {
    setUserCountry(event.target.value);
  };
  // country end

  const handleClose = () => {
    setOpen(false);
    setIsSubmitted(false); // Reset the submission status
    setEmail("");
    setSubject("");
    setMessage("");
    setError({ email: false, subject: false, message: false });
  };

  const validateForm = () => {
    const newError = { email: false, subject: false, message: false };
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

    setError(newError);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formData = new FormData();
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    formData.append("userCountry", userCountry);
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
      setUserCountry("");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ borderRadius: "16px" }}
      >
        <Box
          className="responsiveBox"
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
                Contact Us
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

              <div style={{ marginTop: "8px" }}>
                <InputLabel
                  style={{ marginBottom: "6px" }}
                  id="demo-simple-select-label"
                >
                  Select Country
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  fullWidth
                  id="demo-simple-select"
                  value={userCountry}
                  onChange={handleChangeCountry}
                  placeholder="Select Category"
                  sx={{
                    height: "3.4rem",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "10px",
                    },
                  }}
                >
                  {countryData?.map((country) => (
                    <MenuItem key={country.id} value={country.id}>
                      {country.fallback_name}
                    </MenuItem>
                  ))}
                </Select>
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
                <Button onClick={handleClose}>Close</Button>
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
                  <CheckCircleOutlineIcon
                    sx={{ color: "green", fontSize: 48 }}
                  />
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
              {/* <Button
                onClick={handleClose}
                sx={{
                  mt: 2,
                  bgcolor: "#2A5182;", // Use the theme's primary color
                  color: "white", // Set text color to white
                  ":hover": {
                    bgcolor: "primary.dark", // Darken button when hovered
                  },
                  padding: "6px 12px", // Add some padding
                  borderRadius: "4px", // Round the corners a bit
                }}
              >
                Close
              </Button> */}
              <Button
                variant="contained"
                onClick={handleClose}
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
                  <p className="font-size-16">Close</p>
                </div>
              </Button>
            </Box>
          )}
          {/* end */}
        </Box>
      </Modal>
    </div>
  );
};

export default ContactUs;
