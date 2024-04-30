import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import LockIcon from "../../../../../public/otpLock.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import "./OtpVerification.scss";
import axios from "axios";

type OtpVerificationProps = {
  onSubmit: (otp: string) => void;
  onCancel: () => void;
  country_code: string;
  phone: string;
};

const OtpVerification: React.FC<OtpVerificationProps> = ({
  onSubmit,
  onCancel,
  country_code,
  phone,
}) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleChange = (otp: string) => {
    setOtp(otp);
    setError(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = async () => {
    // ToDo remove this line start  (This is for testing purpose to bypass the OTP verification)
    // onSubmit(otp);
    // return;
    // ToDo remove this line end

    if (otp.length === 4) {
      try {
        let payload = {
          country_code: country_code.replace("+", ""),
          phone_number: phone,
          code: otp,
        };

        const response = await axios.post("/api/market/verify-check", payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        if (response.status === 200) {
          onSubmit(otp);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Error sending data to the backend: ", error);
        setError(true);
      }
    } else {
      setError(true);
    }
  };

  const renderInput = (props: any, index: number) => {
    return <input {...props} />;
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <div className="d-flex ai-center">
        <IconButton onClick={onCancel} aria-label="go back">
          <ArrowBackIcon />
        </IconButton>
        <div
          className="d-flex-img"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Image src={LockIcon} alt="Health & Beauty Icon" />
        </div>
      </div>
      <Typography
        variant="h6"
        component="h2"
        className="send-inquiry"
        sx={{
          color: "rgb(38, 92, 129);",
          fontSize: "28px",
          fontWeight: "600",
          fontFamily: "Poppins, sans-serif",
          marginBottom: "16px",
        }}
      >
        OTP Verification
      </Typography>
      <Typography sx={{ mb: 2 }}>
        We have sent you a 4 digit pin on <strong>{phone}</strong>
      </Typography>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={4}
        shouldAutoFocus={true}
        inputStyle={{
          width: windowWidth < 500 ? "50px" : "74px",
          height: windowWidth < 500 ? "52px" : "76px",
          margin: "0 0.5rem",
          fontSize: "2rem",
          borderRadius: 4,
          border: "1px solid rgba(0, 0, 0, 0.3)",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "2rem",
        }}
        renderInput={renderInput}
      />
      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          Please enter the correct OTP.
        </Typography>
      )}
      <Button
        variant="contained"
        sx={{
          mt: 6,
          mb: 2,
          height: "48px",
          borderRadius: "8px",
          backgroundColor: "#2A5182",
          width: "100%",
          textDecoration: "none",
          ".button-text p": {
            textTransform: "none",
          },
        }}
        onClick={handleSubmit} // Set the onClick here to call handleSubmit
      >
        <div className="button-text">
          <p>Verify And Proceed</p>
          <ArrowForwardIcon />
        </div>
      </Button>
    </Box>
  );
};

export default OtpVerification;
