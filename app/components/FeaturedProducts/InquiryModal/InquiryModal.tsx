"use client";
import React, { use, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./InquiryModal.scss";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormHelperText,
  IconButton,
} from "@mui/material";
import OtpVerification from "./OtpVerification/OtpVerification";

type InquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  company?: string;
  imgSrc?: string;
  isAudio?: boolean;
  audioData?: any;
  slug?: string;
};

const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  productName,
  company,
  imgSrc,
  isAudio,
  audioData,
  slug,
}) => {
  const [frequency, setFrequency] = useState("one-time");

  const validateEmail = (email: any) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleEmailChange = (e: any) => {
    const { value } = e.target;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const [step, setStep] = useState(1);
  const [contact, setContact] = useState("");

  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");

  const [inputValue, setInputValue] = useState("");

  //   step 3 start
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");

  const [gstChecked, setGstChecked] = React.useState(false);
  const [termsChecked, setTermsChecked] = React.useState(true);

  const handleGstChange = (event: any) => {
    setGstChecked(event.target.checked);
  };

  const handleTermsChange = (event: any) => {
    setTermsChecked(event.target.checked);
  };
  // step 3 end

  const handleNextStep = () => {
    if (isAudio && step === 3) {
      setStep(step + 1);
      return;
    }
    if (step < 3) {
      setStep(step + 1);
    } else {
      buy();
    }
  };

  const buy = async () => {
    const payload = {
      country_id: 1, // or country if you have a country variable
      phone: mobileNumber,
      client_name: name,
      email: email,
      company_name: companyName,
      city: city,
      productSlug: slug,
      // Add other fields as necessary
    };

    try {
      const response = await axios.post("api/market/buy", payload);

      console.log("Data successfully sent to the backend.");
      console.log(response.data);
    } catch (error) {
      // Error handling with axios
      console.error("Error sending data to the backend: ", error);
    }
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  const handleMobileNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMobileNumber(event.target.value);
  };

  const countries: any[] = [
    {
      code: "+375",
      label: "Belarus",
      phone: "375",
      icon: "flag",
    },
    {
      code: "+55",
      label: "Brazil",
      phone: "55",
      icon: "flag",
    },
    {
      code: "+1",
      label: "Canada",
      phone: "1",
      icon: "flag",
    },
    {
      code: "+86",
      label: "China",
      phone: "86",
      icon: "flag",
    },
    {
      code: "+91",
      label: "India",
      phone: "91",
      icon: "flag",
    },
    {
      code: "+7",
      label: "Kazakhstan",
      phone: "7",
      icon: "flag",
    },
    {
      code: "+264",
      label: "Namibia",
      phone: "264",
      icon: "flag",
    },
    {
      code: "+234",
      label: "Nigeria",
      phone: "234",
      icon: "flag",
    },
    {
      code: "+7",
      label: "Russia",
      phone: "7",
      icon: "flag",
    },
    {
      code: "+90",
      label: "Turkey",
      phone: "90",
      icon: "flag",
    },
    {
      code: "+44",
      label: "United Kingdom",
      phone: "44",
      icon: "flag",
    },
  ];

  const [country, setCountry] = useState<any | null>(countries[0]);
  const [inquiryMessage, setInquiryMessage] = useState(
    `Hi, I am interested in ${productName}.`
  );

  const handleCloseModal = () => {
    setStep(1);
    onClose();
  };

  // useEffect(() => {
  //   if (isAudio) {
  //     setStep(2);
  //   }
  // }, [isAudio]);

  const handleInquiryMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInquiryMessage(event.target.value);
  };

  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "100%",
            sm: 480,
          },
          bgcolor: "background.paper",
          boxShadow: 24,
          padding: "20px",
          borderRadius: 7,
        }}
      >
        {step === 1 && (
          <>
            <div className="d-flex ai-center gap-8 justify-space-between">
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
                Send Inquiry
              </Typography>

              <button
                onClick={handleCloseModal}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <CloseIcon style={{ color: "grey" }} />
              </button>
            </div>
            <Typography sx={{ mt: 2 }}>
              Tell us about your requirement
            </Typography>

            {/* hide this section if audioData is present */}
            {!audioData && imgSrc && (
              <div className="product-description">
                <Image src={imgSrc} alt={productName} width={60} height={70} />
                <div>
                  <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                    {productName}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    {company}
                  </Typography>
                </div>
              </div>
            )}

            <TextField
              fullWidth
              multiline
              rows={4}
              value={inquiryMessage}
              onChange={handleInquiryMessageChange}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "rgb(251, 242, 225)",
                },
              }}
            />

            <Typography sx={{ mt: 2, mb: 1 }}>Requirement Frequency</Typography>
            <RadioGroup
              aria-label="requirement-frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              row
            >
              <FormControlLabel
                value="one-time"
                control={<Radio />}
                label="One-Time"
              />
              <FormControlLabel
                value="recurring"
                control={<Radio />}
                label="Recurring"
              />
            </RadioGroup>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "auto",
              }}
            >
              <Button
                variant="contained"
                onClick={handleNextStep}
                disabled={!inquiryMessage}
                sx={{
                  mt: 6,
                  mb: 3,
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "#2A5182",
                  width: "185px",
                  ".button-text p": {
                    textTransform: "none",
                  },
                }}
              >
                <div className="button-text">
                  <p>Continue</p>
                  <ArrowForwardIcon />
                </div>
              </Button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="d-flex ai-center gap-8 mb-2rem justify-space-between">
              <div className="d-flex ai-center gap-8">
                <IconButton onClick={handleBackStep} aria-label="go back">
                  <ArrowBackIcon />
                </IconButton>

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
                  Contact Details
                </Typography>
              </div>

              <button
                onClick={handleCloseModal}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <CloseIcon style={{ color: "grey" }} />
              </button>
            </div>
            {/* Additional fields for contact details */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                width: "100%",
              }}
            >
              <FormControl fullWidth sx={{ flex: 0.4 }}>
                <Autocomplete
                  sx={{
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-input": {
                      borderRadius: "10px",
                    },
                  }}
                  id="country-code-select"
                  options={countries}
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <li {...props}>
                      {option.code} {option.label}
                    </li>
                  )}
                  value={country}
                  onChange={(event, newValue) => {
                    setCountry(newValue);
                    if (newValue) {
                      setInputValue(newValue.code);
                    }
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue, reason) => {
                    if (reason === "input") setInputValue(newInputValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country"
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: null,
                      }}
                      inputProps={{
                        ...params.inputProps,
                      }}
                      sx={{
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-input": {
                          borderRadius: "10px",
                        },
                      }}
                    />
                  )}
                />
              </FormControl>

              <TextField
                fullWidth
                type="number"
                sx={{
                  flex: 0.6,
                  "& .MuiOutlinedInput-root": {},
                }}
                id="mobile-number"
                label="Mobile number"
                variant="outlined"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
              />
            </Box>
            <Button
              variant="contained"
              onClick={handleNextStep}
              sx={{
                mt: 6,
                mb: 5,
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#2A5182",
                width: "100%",
                textDecoration: "none",
                ".button-text p": {
                  textTransform: "none",
                },
              }}
              disabled={!mobileNumber || !country}
            >
              <div className="button-text">
                <p>Continue</p>
                <ArrowForwardIcon />
              </div>
            </Button>
          </>
        )}
        {/* Step 3 */}
        {step === 3 && (
          <>
            <div className="d-flex ai-center gap-8 mb-2rem justify-space-between">
              <div className="d-flex ai-center gap-8">
                <IconButton onClick={handleBackStep} aria-label="go back">
                  <ArrowBackIcon />
                </IconButton>

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
                  Inquiry
                </Typography>
              </div>

              <button
                onClick={handleCloseModal}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <CloseIcon style={{ color: "grey" }} />
              </button>
            </div>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              error={!isValidEmail}
              helperText={!isValidEmail && "Please enter a valid email"}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Company Name"
              variant="outlined"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="City"
              variant="outlined"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={gstChecked}
                      onChange={handleGstChange}
                      name="gst"
                      color="primary"
                    />
                  }
                  label="GST Available"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={termsChecked}
                      onChange={handleTermsChange}
                      name="terms"
                      color="primary"
                    />
                  }
                  label="I agree to terms and conditions"
                />
                {!termsChecked && (
                  <FormHelperText error={true} style={{ fontSize: "12px" }}>
                    Please accept the terms and conditions.
                  </FormHelperText>
                )}
              </div>
            </div>
            <Button
              variant="contained"
              onClick={handleNextStep}
              sx={{
                mt: 6,
                mb: 5,
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#2A5182",
                width: "100%",
                ".button-text p": {
                  textTransform: "none",
                },
              }}
              disabled={
                !name ||
                !email ||
                !companyName ||
                !city ||
                !isValidEmail ||
                !termsChecked
              }
            >
              <div className="button-text">
                <p>Continue</p>
                <ArrowForwardIcon />
              </div>
            </Button>
          </>
        )}
        {/* end 3 */}
        {/*step === 4 && (
          <OtpVerification
            onSubmit={(otp: any) => {
              handleNextStep();
            }}
            onCancel={() => {
              setStep(step - 1);
            }}
            phone={countryCode + mobileNumber}
          />
        )*/}
        {step === 4 && (
          <>
            <div className="d-flex ai-center gap-8 justify-space-between">
              <div className="d-flex ai-center gap-8">
                <IconButton onClick={handleBackStep} aria-label="go back">
                  <ArrowBackIcon />
                </IconButton>
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
                  Summary
                </Typography>
              </div>

              <button
                onClick={handleCloseModal}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <CloseIcon style={{ color: "grey" }} />
              </button>
            </div>
            <Typography className="blue-color" sx={{ mt: 2 }}>
              Details of your inquiry
            </Typography>

            {/* hide this section if audioData is present */}
            {!audioData && imgSrc && (
              <div className="product-description">
                <Image src={imgSrc} alt={productName} width={60} height={70} />
                <div>
                  <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                    {productName}
                  </Typography>
                  <Typography variant="caption" display="block" gutterBottom>
                    {company}
                  </Typography>
                </div>
              </div>
            )}

            <TextField
              fullWidth
              multiline
              rows={4}
              value={inquiryMessage}
              onChange={handleInquiryMessageChange}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "rgb(251, 242, 225)",
                },
              }}
            />

            <Typography className="blue-color" sx={{ mt: 2, mb: 1 }}>
              Phone Number:{" "}
              <b className="blue-color">
                ({inputValue}) {mobileNumber}
              </b>
            </Typography>
            <Typography className="blue-color" sx={{ mt: 2, mb: 1 }}>
              Name: <b className="blue-color">{name}</b>
            </Typography>
            <Typography className="blue-color" sx={{ mt: 2, mb: 1 }}>
              Email: <b className="blue-color">{email}</b>
            </Typography>
            <Typography className="blue-color" sx={{ mt: 2, mb: 1 }}>
              Company Name: <b className="blue-color">{companyName}</b>
            </Typography>
            <Typography className="blue-color" sx={{ mt: 2, mb: 1 }}>
              City: <b className="blue-color">{city}</b>
            </Typography>

            {/* <RadioGroup
              aria-label="requirement-frequency"
              value={frequency}
              onChange={(e) => setFrequency(e.target.value)}
              row
            >
              <FormControlLabel
                value="one-time"
                control={<Radio />}
                label="One-Time"
              />
              <FormControlLabel
                value="recurring"
                control={<Radio />}
                label="Recurring"
              />
            </RadioGroup> */}

            {audioData && (
              <div
                className="custom-audio-player"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "32px",
                }}
              >
                <audio src={audioData} controls />
              </div>
            )}

            <div className="summary-section">
              <Button
                variant="contained"
                onClick={handleNextStep}
                disabled={
                  !inquiryMessage ||
                  !mobileNumber ||
                  !name ||
                  !email ||
                  !companyName ||
                  !city ||
                  !isValidEmail ||
                  !termsChecked
                }
                sx={{
                  mt: 5,
                  mb: 3,
                  height: "48px",
                  borderRadius: "8px",
                  backgroundColor: "#2A5182",
                  width: "100%",
                  ".button-text p": {
                    textTransform: "none",
                  },
                }}
              >
                <div className="button-text">
                  <p>Submit</p>
                  <ArrowForwardIcon />
                </div>
              </Button>
            </div>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default InquiryModal;
