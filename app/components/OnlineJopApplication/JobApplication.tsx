"use client";
import React, { useState } from "react";
import {
  Button,
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
} from "@mui/material";
import axios from "axios";
import "./JobApplication.scss";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import UploadFile from "../UploadFile/UploadFile";
import CloseIcon from "@mui/icons-material/Close";
import PdfModal from "../PdfModal/PdfModal";

const JobApplication = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [error, setError] = useState({
    email: false,
    selectedSubject: false,
  });

  const handleFileSelect = (files: FileList | null) => {
    if (files && files.length > 0) {
      setSelectedFiles([files[0]]);
      const fileNameContainer = document.getElementById("selectedFileName");
      if (fileNameContainer) {
        fileNameContainer.innerText = files[0].name;
      }
    } else {
      setSelectedFiles([]);
      const fileNameContainer = document.getElementById("selectedFileName");
      if (fileNameContainer) {
        fileNameContainer.innerText = "";
      }
    }
  };

  const resetFileInput = () => {
    const fileNameContainer = document.getElementById("selectedFileName");
    if (fileNameContainer) {
      fileNameContainer.innerText = "";
    }
    setSelectedFiles([]);
  };

  const handleRemoveFile = () => {
    setSelectedFiles([]);
  };

  const renderFileName = (selectedFiles: any, handleOpenModal: any) => {
    const fileExists = selectedFiles.length > 0;
    const fileType = fileExists ? selectedFiles[0].type : "";
    const fileName = fileExists ? selectedFiles[0].name : "";

    const isPdf = fileType === "application/pdf";
    const isImage = fileType.startsWith("image/");

    const fileStyle: any = {
      textAlign: "center",
      fontSize: "10px",
      textDecoration: isPdf ? "underline" : "none",
      color: isPdf ? "#007BFF" : "inherit",
      cursor: isPdf || isImage ? "pointer" : "default",
    };

    const handleClick = () => {
      if (isPdf) {
        const fileUrl = URL.createObjectURL(selectedFiles[0]);
        handleOpenModal(fileUrl);
      }
    };
    if (isImage) {
      return (
        <div className="d-flex ai-center">
          <div className="imageCont">
            <img
              src={URL.createObjectURL(selectedFiles[0])}
              alt={fileName}
              style={{
                minWidth: "68px",
                maxWidth: "100px",
                maxHeight: "48px",
                minHeight: "48px",
                objectFit: "cover",
              }}
            />
          </div>

          <div>
            <IconButton
              onClick={handleRemoveFile}
              aria-label="close"
              style={{ marginLeft: "4px" }}
            >
              <CloseIcon
                sx={{
                  fontSize: "0.85rem",
                }}
              />
            </IconButton>
          </div>
        </div>
      );
    }

    return (
      fileName.length > 0 && (
        <div className="d-flex ai-center">
          <div className="imageCont" onClick={handleClick}>
            <p style={fileStyle}>
              {fileExists
                ? `${fileName.substring(0, 9)}${
                    fileName.length > 9 ? "..." : ""
                  }`
                : ""}
            </p>
          </div>
          <div>
            <IconButton onClick={handleRemoveFile} aria-label="close">
              <CloseIcon
                sx={{
                  fontSize: "0.85rem",
                }}
              />
            </IconButton>
          </div>
        </div>
      )
    );
  };

  const handleOpenModal = (fileUrl: any) => {
    setPdfUrl(fileUrl);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChangeSubject = (event: any) => {
    setSelectedSubject(event.target.value);
  };

  const validateForm = () => {
    const newError = {
      email: false,
      selectedSubject: false,
    };
    let isValid = true;

    if (!email || !email.includes("@")) {
      newError.email = true;
      isValid = false;
    }
    if (!selectedSubject) {
      newError.selectedSubject = true;
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
    formData.append("selectedSubject", selectedSubject);
    if (selectedFiles && selectedFiles.length > 0) {
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append(`documents[${i}]`, selectedFiles[i]);
      }
    }

    setIsLoading(true);

    try {
      const response = await axios.post("/api/market/jobApply", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setIsSubmitted(true);
      resetFileInput();
    } catch (error) {
      console.error("Error sending data to the backend: ", error);
    } finally {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail("");
      setSelectedSubject("");
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
              Online Job Application{" "}
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
            <div style={{ marginTop: "8px" }}>
              <FormControl fullWidth error={error.selectedSubject}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectedSubject}
                  displayEmpty
                  onChange={handleChangeSubject}
                  sx={{
                    height: "3.4rem",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderRadius: "10px",
                    },
                  }}
                >
                  <MenuItem value="" disabled>
                    <span
                      style={{
                        color: error.selectedSubject
                          ? "#d32f2f"
                          : "rgba(0, 0, 0, 0.6)",
                      }}
                    >
                      Choose a subject
                    </span>
                  </MenuItem>
                  <MenuItem value={"IT Operations Manager"}>
                    IT Operations Manager
                  </MenuItem>
                  <MenuItem value={"CSIRT Analyst"}>CSIRT Analyst</MenuItem>
                  <MenuItem value={"PR Junior Manager"}>
                    PR Junior Manager
                  </MenuItem>
                  <MenuItem value={"Client Liaison Manager"}>
                    Client Liaison Manager
                  </MenuItem>
                </Select>
                {error.selectedSubject && (
                  <FormHelperText>Please select a subject.</FormHelperText>
                )}
              </FormControl>
            </div>

            <Box
              sx={{ mt: 2, display: "flex", alignItems: "center", gap: "20px" }}
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
                  <p className="font-size-16">Apply now!</p>
                </div>
              </Button>

              {selectedFiles && selectedFiles.length > 0 ? (
                <div>
                  {renderFileName(selectedFiles, handleOpenModal)}

                  <PdfModal
                    open={openModal}
                    handleClose={handleCloseModal}
                    fileUrl={pdfUrl}
                  />
                </div>
              ) : (
                <UploadFile onFileSelect={handleFileSelect} />
              )}
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
              onClick={() => setIsSubmitted(false)}
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
      </Box>
    </div>
  );
};

export default JobApplication;
