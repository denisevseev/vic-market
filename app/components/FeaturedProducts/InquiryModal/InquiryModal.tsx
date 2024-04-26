"use client";
import React, { use, useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
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
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EmailIcon from "@mui/icons-material/Email";

import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useCountryData } from "@/app/hooks/useCountryData";
import OtpVerification from "./OtpVerification/OtpVerification";
import { COUNTRIES } from "../../constants";
import FloatLabelInputFiled from "../../FloatLabelInputFiled";
import PhoneCountrySelect from "../../PhoneCountrySelect/PhoneCountrySelect";
import CountrySelect from "../../CountrySelect/CountrySelect";

type InquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  company?: string;
  imgSrc?: string;
  isAudio?: boolean;
  audioData?: any;
  id?: any;
};

const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  productName,
  company,
  imgSrc,
  isAudio,
  audioData,
  id,
}) => {
  const [frequency, setFrequency] = useState("One-Time");
  const [isLoading, setIsLoading] = useState(false);

  // just country select start
  const [justCountry, setJustCountry] = useState("");

  const handleCountrySelect = (value: any) => {
    console.log(value);
    setJustCountry(value);
  };

  // just country select end

  // new country selecet start

  const [countryCodeNew, setCountryCodeNew] = useState("");
  const handlePhoneCountryCodeSelect = (value: any) => {
    setCountryCodeNew(value);
  };

  const [mobileNumberNew, setMobileNumberNew] = useState("");
  const handleMobileNumberChangeNew = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMobileNumberNew(event.target.value);
  };

  // new country select end

  // country start
  const { data: countryData } = useCountryData();
  const [userCountry, setUserCountry] = useState("");
  const handleChangeCountry = (event: any) => {
    setUserCountry(event.target.value);
  };
  // country end

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

  const handleNextStep = async () => {
    if (step === 2) {
      let payload: any = {
        country_code: `${countryCodeNew.replace("+", "")}`,
        phone_number: mobileNumberNew,
      };
      try {
        const response = await axios.post(
          "/api/market/verify-number",
          payload,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        setIsLoading(false);
        // handleCloseModal();
      } catch (error) {
        console.error("Error sending data to the backend: ", error);
        setIsLoading(false);
      }
      setStep(step + 1);
      return;
    }
    if (isAudio && step === 4) {
      setStep(step + 1);
      return;
    }
    if (step < 4) {
      setStep(step + 1);
    } else {
      buy();
    }
  };

  const buy = async () => {
    setIsLoading(true);
    setStep(6);
    let payload = new FormData();
    payload.append("country_code", justCountry);
    payload.append("phone", `${countryCodeNew}${mobileNumberNew}`);
    payload.append("client_name", name);
    payload.append("email", email);
    payload.append("company_name", companyName);
    payload.append("city", city);
    payload.append("requirement_frequency", frequency);
    payload.append("description", inquiryMessage);

    if (id) {
      payload.append("product_id", id);
    }
    payload.append("client_requirements", productName);
    payload.append("comment", productName);

    if (audioData) {
      const file = await fetch(audioData).then((r) => r.blob());
      payload.append("file1", file, "audio_message.wav");
    }

    try {
      const response = await axios.post("/api/market/buy", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setIsLoading(false);
      // handleCloseModal();
    } catch (error) {
      console.error("Error sending data to the backend: ", error);
      setIsLoading(false);
    }
  };

  const resetStates = () => {
    // Reset all states to their initial values
    setFrequency("One-Time");
    setIsLoading(false);
    setUserCountry("");
    setJustCountry("");
    setName("");
    setEmail("");
    setIsValidEmail(true);
    setCompanyName("");
    setCity("");
    setGstChecked(false);
    setTermsChecked(true);
    setMobileNumber("");
    setInputValue("");
    setCountry(countries[0]); // Assuming you want to reset to the first country in the list
    setInquiryMessage(`Hi, I am interested in ${productName}.`); // Resetting with dynamic initial value
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
    // {
    //   code: "+79",
    //   label: "Russia2",
    //   phone: "79",
    //   icon: "flag",
    // },
    // {
    //   code: "+387",
    //   label: "Bosnia",
    //   phone: "387",
    //   icon: "flag",
    // },
    // {
    //   code: "+49",
    //   label: "Germany",
    //   phone: "49",
    //   icon: "flag",
    // },
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
    resetStates();
  };

  // useEffect(() => {
  //   if (isAudio) {
  //     setStep(2);
  //   }
  // }, [isAudio]);

  useEffect(() => {
    if (!isOpen) {
      resetStates();
    }
  }, [isOpen]);

  const handleInquiryMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInquiryMessage(event.target.value);
  };

  useEffect(() => {
    setInquiryMessage(`Hi, I am interested in ${productName}.`);
  }, [productName]);

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
                <Image
                  src={imgSrc}
                  alt={productName}
                  width={60}
                  height={70}
                  style={{
                    objectFit: "contain",
                  }}
                />
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
                value="One-Time"
                control={<Radio />}
                label="One-Time"
              />
              <FormControlLabel
                value="Recurring"
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
                <IconButton
                  onClick={handleBackStep}
                  aria-label="go back"
                  sx={{
                    fontSize: "2rem",
                    "& .MuiSvgIcon-root": {
                      fontSize: "2rem",
                    },
                  }}
                >
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
              <div className="w-100 d-flex flex-row jusifyContentSpaceBetween">
                {/* new country select start */}
                <div className="mt-16 w-30">
                  <PhoneCountrySelect
                    value={countryCodeNew}
                    onSelect={handlePhoneCountryCodeSelect}
                  />
                </div>

                <div className="mt-16 w-70">
                  <FloatLabelInputFiled
                    required={true}
                    isTouched={true}
                    errors={""}
                    value={mobileNumberNew}
                    onChange={handleMobileNumberChangeNew}
                    label="Phone number"
                    type="number"
                  />
                </div>
                {/* new country select end */}
              </div>
              {/* <FormControl fullWidth sx={{ flex: 0.4 }}>
                <Autocomplete
                  sx={{
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-input": {
                      borderRadius: "10px",
                    },
                  }}
                  id="country-code-select"
                  // countries buy mobile number
                  options={COUNTRIES}
                  getOptionLabel={(option) => option.label}
                  renderOption={(props, option) => (
                    <li {...props}>
                      {option.phone} {option.label}
                    </li>
                  )}
                  value={country}
                  onChange={(event, newValue) => {
                    setCountry(newValue);
                    if (newValue) {
                      setInputValue(newValue.phone);
                    }
                  }}
                  inputValue={inputValue}
                  onInputChange={(event, newInputValue, reason) => {
                    if (reason === "input") setInputValue(newInputValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      autoComplete="off"
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
              </FormControl> */}

              {/* <TextField
                fullWidth
                type="number"
                autoComplete="off"
                sx={{
                  flex: 0.6,
                  "& .MuiOutlinedInput-root": {},
                }}
                id="mobile-number"
                label="Mobile number"
                variant="outlined"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
              /> */}
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
              disabled={!mobileNumberNew || !countryCodeNew}
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
                <IconButton
                  onClick={handleBackStep}
                  aria-label="go back"
                  sx={{
                    fontSize: "2rem",
                    "& .MuiSvgIcon-root": {
                      fontSize: "2rem",
                    },
                  }}
                >
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

            <div style={{ marginTop: "8px", width: "100%" }}>
              <CountrySelect
                value={justCountry}
                isTouched={false}
                errors={false}
                onSelect={handleCountrySelect}
              />

              {/* <InputLabel
                style={{ marginBottom: "6px" }}
                id="demo-simple-select-label"
              >
                Your Country
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                fullWidth
                id="demo-simple-select"
                value={userCountry}
                onChange={handleChangeCountry}
                placeholder="Select Category"
                sx={{
                  height: "3.5rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "10px",
                  },
                }}
              >
                {COUNTRIES?.map((country) => (
                  <MenuItem key={country.code} value={country.phone}>
                    {country.label}
                  </MenuItem>
                ))}
              </Select> */}

              {/* countryData buy normal country critical */}
            </div>
            <div style={{ marginTop: "8px" }}>
              <TextField
                fullWidth
                margin="normal"
                label="City"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              {/* <div>
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
              </div> */}
              <p style={{ marginTop: "12px" }}>
                <a
                  href="/terms"
                  target="_blank"
                  style={{
                    textDecoration: "underline",
                    color: "rgb(38, 92, 129)",
                  }}
                >
                  Read terms and conditions
                </a>
              </p>
              <div style={{ marginTop: "-4px" }}>
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
        {step === 4 && (
          <OtpVerification
            onSubmit={(otp: any) => {
              handleNextStep();
            }}
            onCancel={() => {
              setStep(step - 1);
            }}
            country_code={countryCodeNew}
            phone={mobileNumberNew}
          />
        )}
        {step === 5 && (
          <>
            <div className="d-flex ai-center gap-8 justify-space-between">
              <div className="d-flex ai-center gap-8">
                <IconButton
                  onClick={handleBackStep}
                  aria-label="go back"
                  sx={{
                    fontSize: "2rem",
                    "& .MuiSvgIcon-root": {
                      fontSize: "2rem",
                    },
                  }}
                >
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
                value="One-Time"
                control={<Radio />}
                label="One-Time"
              />
              <FormControlLabel
                value="Recurring"
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

        {/* step = 5 start*/}
        {step === 6 && (
          <>
            <div className="d-flex ai-center gap-8 mb-2rem justify-space-between">
              <div className="d-flex ai-center gap-8">
                {/* <IconButton onClick={handleBackStep} aria-label="go back">
                  <ArrowBackIcon />
                </IconButton> */}

                {/* <Typography
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
                  Submission
                </Typography> */}
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
                justifyContent: "center",
                gap: "8px",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100px", // Set a height so the box doesn't collapse when the content changes
                }}
              >
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <div
                    className="icon-and-text"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <CheckCircleOutlineIcon
                      sx={{
                        fontSize: "48px", // Set the icon size
                        color: "green",
                      }}
                    />
                    <div>
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
                    <div>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "green",
                          fontSize: "22px",
                          fontWeight: "400",
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        You will receive an email shortly.
                      </Typography>
                    </div>
                  </div>
                )}
              </Box>
            </Box>
            <Button
              variant="contained"
              onClick={handleCloseModal}
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
              // disabled={!mobileNumber || !country}
            >
              <div className="button-text">
                <p>Close</p>
                <CloseIcon />
              </div>
            </Button>
          </>
        )}

        {/* step 6 start */}
      </Box>
    </Modal>
  );
};

export default InquiryModal;
