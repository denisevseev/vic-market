"use client";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./inquiryModal.scss";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormHelperText,
} from "@mui/material";
import OtpVerification from "./otp-verification/OtpVerification";

type InquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  company: string;
  imgSrc: string;
};

const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  productName,
  company,
  imgSrc,
}) => {
  const [frequency, setFrequency] = useState("one-time");

  const validateEmail = (email: any) => {
    // Regex pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email); // Returns true if email matches the pattern
  };

  const handleEmailChange = (e: any) => {
    const { value } = e.target;
    setEmail(value); // Update email state
    setIsValidEmail(validateEmail(value)); // Validate email and update isValidEmail state
  };

  const [step, setStep] = useState(1);
  const [contact, setContact] = useState("");

  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNumber, setMobileNumber] = useState("");

  const [inputValue, setInputValue] = useState("");

  //   step 3 start
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true); // State to track email validity
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
    setStep(step + 1);
  };

  const handleMobileNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMobileNumber(event.target.value);
  };

  const countries: any[] = [
    {
      code: "+91",
      label: "India",
      phone: "91",
      icon: "flag",
    },
    {
      code: "+1",
      label: "United States",
      phone: "1",
      icon: "flag",
    },
    {
      code: "+44",
      label: "United Kingdom",
      phone: "44",
      icon: "flag",
    },
    {
      code: "+93",
      label: "Afghanistan",
      phone: "93",
      icon: "flag",
    },
    {
      code: "+355",
      label: "Albania",
      phone: "355",
      icon: "flag",
    },
    // ...add as many countries as needed
  ];

  const [country, setCountry] = useState<any | null>(countries[0]);
  const [inquiryMessage, setInquiryMessage] = useState(
    `Hi, I am interested in ${productName}.`
  );

  const handleCloseModal = () => {
    setStep(1);
    onClose();
  };

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
            <Typography sx={{ mt: 2 }}>
              Tell us about your requirement
            </Typography>

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
            <TextField
              fullWidth
              multiline
              rows={4}
              value={inquiryMessage}
              onChange={handleInquiryMessageChange}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", // This targets the root of the outlined input
                  backgroundColor: "rgb(251, 242, 225)",
                },
                "& .MuiInputBase-input": {
                  //   backgroundColor: "rgb(251, 242, 225)",
                  //   borderRadius: "10px",
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
            <Typography
              variant="h6"
              component="h2"
              className="send-inquiry"
              sx={{
                color: "rgb(38, 92, 129);",
                fontSize: "28px",
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                marginBottom: "2rem",
              }}
            >
              Contact Details
            </Typography>
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
                      borderRadius: "10px", // Apply border radius to input element
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
                      setInputValue(newValue.code); // Set the input value to the code
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
                        // autoComplete: "new-password",
                      }}
                      sx={{
                        borderRadius: "10px",
                        "& .MuiOutlinedInput-input": {
                          borderRadius: "10px", // Apply border radius to input element
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
                  "& .MuiOutlinedInput-root": {
                    // borderRadius: "10px", // Apply border radius to the input field
                  },
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
              disabled={!mobileNumber || !country} // Button is disabled if mobileNumber or country is empty
            >
              <div className="button-text">
                <p>Continue</p>
                <ArrowForwardIcon />
              </div>
            </Button>
          </>
        )}

        {/* start 3 */}
        {/* Step 3 */}
        {step === 3 && (
          <>
            <Typography
              variant="h6"
              component="h2"
              className="send-inquiry"
              sx={{
                color: "rgb(38, 92, 129);",
                fontSize: "16px",
                fontWeight: "600",
                fontFamily: "Poppins, sans-serif",
                marginBottom: "16px",
              }}
            >
              Sign In to Get The Best Deals, Exclusive Offers with Victorum
              Market
            </Typography>
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
              error={!isValidEmail} // Set error state based on email validity
              helperText={!isValidEmail && "Please enter a valid email"} // Show helper text if email is invalid
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
                {/* ... other checkbox for GST Available ... */}

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
            {/* Continue Button */}
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
              } // Button is disabled if any of the fields is empty
            >
              <div className="button-text">
                <p>Continue</p>
                <ArrowForwardIcon />
              </div>
            </Button>
          </>
        )}

        {/* end 3 */}

        {step === 4 && (
          <OtpVerification
            onSubmit={(otp: any) => {
              handleNextStep();
            }}
            onCancel={() => {
              setStep(step - 1);
            }}
            phone={countryCode + mobileNumber}
          />
        )}
      </Box>
    </Modal>
  );
};

export default InquiryModal;
