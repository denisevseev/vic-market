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
import "./SellProductModal.scss";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import "./SellProductModal.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { COUNTRIES } from "../constants";

import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { getCategories } from "@/api/helper/dataFilter";
import { useMarketData } from "@/app/hooks/useMarketData";
import OtpVerification from "../FeaturedProducts/InquiryModal/OtpVerification/OtpVerification";
import PhoneCountrySelect from "../PhoneCountrySelect/PhoneCountrySelect";
import FloatLabelInputFiled from "../FloatLabelInputFiled";
import CountrySelect from "../CountrySelect/CountrySelect";

type InquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
  company?: string;
  imgSrc?: string;
  isAudio?: boolean;
  audioData?: any;
  id?: any;
};

const SellProductModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  company,
  imgSrc,
  isAudio,
  audioData,
  id,
}) => {
  const [frequency, setFrequency] = useState("One-Time");

  const [isLoadingSell, setIsLoadingSell] = useState(false);

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
  const [mobileNumber, setMobileNumber] = useState("");


  // categories start
  const { data: marketData, isLoading } = useMarketData();
  const [categories, setCategories] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (marketData) {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      }
    };
    fetchData();
  }, [marketData]);
  // categories end

  //   step 3 start
  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productUnitNumber, setProductUnitNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");

  const [gstChecked, setGstChecked] = React.useState(false);
  const [termsChecked, setTermsChecked] = React.useState(false);

  const [category, setCategory] = useState("");
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const handleChangeCategory = (event: any) => {
    setCategory(event.target.value);
  };

  //   image start
  // const [image, setImage] = useState<string | null>(null);
  const [images, setImages] = useState([]);

  const handleImageChange = (e: any) => {
    const selectedFiles = Array.from(e.target.files);
    // Save the actual File objects for upload
    setImages((prevImages): any => [...prevImages, ...selectedFiles]);
    // Create blob URLs for local preview if necessary
    const newImageUrls = selectedFiles.map((file: any) =>
      URL.createObjectURL(file)
    );
    // Assuming you have a separate state to hold these for preview
    setImagePreviews((prevImageUrls) => [...prevImageUrls, ...newImageUrls]);
  };

  const handleDeleteImage = (imageToDelete: any) => {
    setImages((prevImages: any) =>
      prevImages.filter((image: any) => image !== imageToDelete)
    );
    setImagePreviews((prevImageUrls: any) =>
      prevImageUrls.filter((url: any) => url !== imageToDelete)
    );
  };
  // image end

  // video start
  const [video, setVideo] = useState<string | null>(null);

  const handleVideoChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const selectedVideo = e.target.files[0];
      setVideo(selectedVideo);
      setVideoPreview(URL.createObjectURL(selectedVideo));
    }
  };

  const handleDeleteVideo = () => {
    setVideo(null);
    setVideoPreview(null);
  };
  // video end

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
      } catch (error) {
        console.error("Error sending data to the backend: ", error);
      }
      setStep(step + 1);
      return;
    }
    if (step < 5) {
      setStep(step + 1);
    } else {
      sell();
    }
  };

  const sell = async () => {
    setIsLoadingSell(true);
    setStep(6);

    // Create a FormData instance to hold the files
    const formData = new FormData();
    formData.append("country_code", justCountry);
    formData.append("phone", `${countryCodeNew}${mobileNumberNew}`);
    // formData.append("phone", '79153458765');
    formData.append("client_name", name);
    formData.append("email", email);
    formData.append("company_name", companyName);
    formData.append("city", city);
    formData.append("product_name", productName);
    // formData.append("requirement_frequency", frequency);
    formData.append("comment", productDetails);
    formData.append("price", productPrice);
    formData.append("category", category);
    formData.append("description", productDetails);

    let fileIndex = 1;

    images.forEach((file) => {
      formData.append(`file${fileIndex}`, file);
      fileIndex++;
    });

    if (video) {
      formData.append(`file${fileIndex}`, video);
    }
    try {
      const response = await axios.post("/api/market/sell", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsLoadingSell(false);
    } catch (error) {
      console.error("Error sending data to the backend: ", error);
      setIsLoadingSell(false);
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
  const [productDetails, setProductDetails] = useState("");

  const handleCloseModal = () => {
    setStep(1);
    onClose();
  };

  const handleInquiryMessageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setProductDetails(event.target.value);
  };

  return (
    <Modal open={isOpen} onClose={handleCloseModal}>
      <Box
        className="custom-scrollbar"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "100%",
            sm: 480,
          },
          maxHeight: "90vh", // Sets the maximum height
          overflowY: "auto",
          bgcolor: "background.paper",
          boxShadow: 24,
          padding: "20px",
          borderRadius: 4,
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
                Sell Product
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

            <TextField
              fullWidth
              margin="normal"
              label="Product Name"
              variant="outlined"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px", // Set the border radius here
                },
              }}
            />

            <Typography sx={{ mt: 2 }}>
              Describe your product and we will help you find the right buyers.
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
              placeholder="Enter the product details..."
              rows={4}
              value={productDetails}
              onChange={handleInquiryMessageChange}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "rgb(251, 242, 225)",
                },
              }}
            />

            {/* start image */}
            <div style={{ marginTop: "13px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginBottom: "13px",
                }}
              >
                {imagePreviews.map((imageSrc, index) => (
                  <div key={index} style={{ position: "relative" }}>
                    <div
                      style={{
                        borderRadius: "10px",
                        overflow: "hidden",
                        width: "100px",
                        height: "100px",
                      }}
                    >
                      <Image
                        src={imageSrc}
                        alt={`Uploaded image ${index + 1}`}
                        width={100}
                        height={100}
                        layout="responsive"
                        objectFit="cover"
                      />
                    </div>
                    <DeleteIcon
                      onClick={() => handleDeleteImage(imageSrc)}
                      style={{
                        position: "absolute",
                        top: "5px",
                        right: "5px",
                        cursor: "pointer",
                        color: "#b30000",
                      }}
                    />
                  </div>
                ))}
              </div>
              <div
                onClick={() => document.getElementById("imageInput")?.click()}
                style={{
                  height: "33px",
                  border: "0.5px solid black",
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "10px",
                  borderColor: "rgb(38, 92, 129)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="h2"
                  sx={{
                    color: "rgb(38, 92, 129);",
                    fontSize: "14px",
                    fontWeight: "400",
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  * Click to upload product images
                </Typography>
              </div>
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                multiple // Allows multiple file selections
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
            {/* imag end */}

            {/* video start */}
            <div style={{ marginTop: "20px" }}>
              {video ? (
                <div
                  style={{
                    height: "113px",
                    border: "0.5px solid black",
                    cursor: "pointer",
                    padding: "8px",
                    borderRadius: "10px",
                    borderColor: "rgb(38, 92, 129)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <video
                    width="auto"
                    height="100px"
                    controls
                    style={{ borderRadius: "10px" }}
                    {...(videoPreview ? { src: videoPreview } : {})}
                  />
                  <DeleteIcon
                    onClick={handleDeleteVideo}
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      cursor: "pointer",
                      color: "#b30000",
                    }}
                  />
                </div>
              ) : (
                <div
                  onClick={() => document.getElementById("videoInput")?.click()}
                  style={{
                    height: "113px",
                    border: "0.5px solid black",
                    cursor: "pointer",
                    padding: "8px",
                    borderRadius: "10px",
                    borderColor: "rgb(38, 92, 129)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="h2"
                    className="send-inquiry"
                    sx={{
                      color: "rgb(38, 92, 129);",
                      fontSize: "14px",
                      fontWeight: "400",
                      fontFamily: "Poppins, sans-serif",
                    }}
                  >
                    * Click to upload video
                  </Typography>
                </div>
              )}
              <input
                id="videoInput"
                type="file"
                accept="video/mp4,video/x-m4v,video/*"
                onChange={handleVideoChange}
                style={{ display: "none" }}
              />
            </div>
            {/* video end */}

            <div style={{ marginTop: "6px" }}>
              <TextField
                fullWidth
                margin="normal"
                label="How many units you want to sell"
                variant="outlined"
                type="number"
                value={productUnitNumber}
                onChange={(e) => setProductUnitNumber(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
            </div>

            <div style={{ marginTop: "6px" }}>
              <TextField
                fullWidth
                margin="normal"
                label="Product Price Per Unit"
                variant="outlined"
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },
                }}
              />
            </div>

            {/* <Typography sx={{ mt: 2, mb: 1 }}>Requirement Frequency</Typography>
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
            </RadioGroup> */}

            <div style={{ marginTop: "3px" }}>
              <InputLabel
                style={{ marginBottom: "6px" }}
                id="demo-simple-select-label"
              >
                Select Category
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                fullWidth
                id="demo-simple-select"
                value={category}
                onChange={handleChangeCategory}
                displayEmpty // This prop makes the placeholder visible
                sx={{
                  height: "3.5rem",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderRadius: "10px",
                  },
                }}
                inputProps={{ "aria-label": "Without label" }} // Required for placeholder to work without label
              >
                <MenuItem value="" disabled>
                  Select Category
                </MenuItem>
                {categories?.map((categoryItem: any) => (
                  <MenuItem
                    key={categoryItem.fallback_name}
                    value={categoryItem.fallback_name}
                  >
                    {categoryItem.fallback_name}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "24px",
                marginBottom: "24px",
                marginTop: "24px",
              }}
            >
              <Typography
                variant="h6"
                component="h2"
                className="send-inquiry"
                sx={{
                  color: "red;",
                  fontSize: "12px",
                  fontWeight: "400",
                  fontFamily: "Poppins, sans-serif",
                  maxWidth: "70%",
                }}
              >
                *Please add the information to the mandatory fields and upload a
                video and a photo of your items. Consider longer upload times in
                case of transmission of huge files!
              </Typography>
              <Button
                variant="contained"
                onClick={handleNextStep}
                disabled={
                  !productDetails ||
                  !productName ||
                  !images.length ||
                  !productPrice ||
                  !productUnitNumber ||
                  !video
                }
                sx={{
                  // mt: 6,
                  // mb: 3,
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
                {/* <FormControlLabel
                  control={
                    <Checkbox
                      checked={gstChecked}
                      onChange={handleGstChange}
                      name="gst"
                      color="primary"
                    />
                  }
                  label="GST Available"
                /> */}
              </div>
              <div>
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

            <TextField
              fullWidth
              multiline
              rows={4}
              value={productDetails}
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
                ({countryCodeNew}) {mobileNumberNew}
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
                  !productDetails ||
                  !mobileNumberNew ||
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

        {step === 5 && (
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

        {/* step 6 start */}
        {step === 6 && (
          <>
            <div className="d-flex ai-center gap-8 mb-2rem justify-space-between">
              <div className="d-flex ai-center gap-8"></div>

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
                {isLoadingSell ? (
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
              disabled={isLoadingSell}
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

export default SellProductModal;
