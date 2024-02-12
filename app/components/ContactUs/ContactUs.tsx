import React, { useState } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import "./contactUs.scss";

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
  const [error, setError] = useState({
    email: false,
    subject: false,
    message: false,
  });

  const handleClose = () => setOpen(false);

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you would handle the submission of the form data
      console.log("Form submitted:", { email, subject, message });
      // Reset form and close modal
      setEmail("");
      setSubject("");
      setMessage("");
      handleClose();
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
        <Box className="responsiveBox" component="form" onSubmit={handleSubmit} noValidate>
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
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="contained"
              type="submit"
              sx={{
                ".button-text p": {
                  textTransform: "none",
                  width:' 80px'
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
        </Box>
      </Modal>
    </div>
  );
};

export default ContactUs;
