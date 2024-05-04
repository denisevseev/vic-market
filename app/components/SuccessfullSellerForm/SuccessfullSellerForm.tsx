import { Box, Button, TextField, Typography } from "@mui/material";
import "./SuccessfullSellerForm.scss";
import { useState } from "react";
import Image from "next/image";
import OwnerImage from "../../../public/owner.jpeg";
import WorkerImage from "../../../public/worker.jpeg";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Name is required."),
  company: Yup.string().required("Company is required."),
  website: Yup.string()
    .url("Please enter a valid website URL.")
    .required("Website is required."),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Email is required."),
});

export const SuccessfllSellerForm = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const [intendedUse, setIntendedUse] = useState("");
  const [insureBuying, setInsureBuying] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleImageClick = (selectedRole: string) => {
    setRole(selectedRole);
    setStep((prevStep) => prevStep + 1);
  };

  const handleSecondStepclick = (selectedStep: string) => {
    setIntendedUse(selectedStep);
    setStep((prevStep) => prevStep + 1);
  };

  const handleThirdStepclick = (insureBuying: string) => {
    setInsureBuying(insureBuying);
    setStep((prevStep) => prevStep + 1);
  };

  const handleSubmit = async (values: any) => {
    const formData = new FormData();
    formData.append("position", role);
    formData.append("intended_usage", intendedUse);
    formData.append("interested_in_buying", insureBuying);
    formData.append("first_name", values.name);
    formData.append("company_name", values.company);
    formData.append("website", values.website);
    formData.append("email", values.email);
    formData.append("message", intendedUse);
    formData.append("subject", insureBuying);
    formData.append("country_code", "US");
    setIsLoading(true);

    try {
      const response = await axios.post("/api/market/fullSeller", formData, {
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
      // setEmail("");
      // setSubject("");
      // setMessage("");
      // setUserCountry("");
      setStep((prevStep) => prevStep + 1);
    }

    // end
  };

  return (
    <div className="main-container">
      {step !== 5 && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "24px",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          {step > 1 && (
            <ArrowBackIcon
              onClick={() => setStep((prevStep) => prevStep - 1)}
              sx={{ fontSize: "30px", cursor: "pointer" }}
            />
          )}
          <Typography className="contactUsSubtitle3">
            <b>Fill out the form below</b>
          </Typography>
        </Box>
      )}

      {step === 1 && (
        <div>
          <Typography
            className="pressSubtitle"
            style={{ marginBottom: "24px" }}
          >
            Learn how to save up to 12 % purchasing products and goods on
            Victorum Trade!
          </Typography>

          <Typography
            className="contactUsSubtitle3"
            sx={{ marginBottom: "24px" }}
          >
            1. What is your position?
          </Typography>

          <div className="two-images-container">
            <div
              className="imageCard"
              onClick={() => handleImageClick("Owner")}
            >
              <div className="imageContainer">
                <Image
                  src={OwnerImage}
                  alt="Owner"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="imageLabel">Company Owner</div>
              </div>
            </div>
            <div
              className="imageCard"
              onClick={() => handleImageClick("Employee")}
            >
              <div className="imageContainer">
                <Image
                  src={WorkerImage}
                  alt="Owner"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
                <div className="imageLabel">Employee</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <Typography
            className="pressSubtitle"
            style={{ marginBottom: "24px" }}
          >
            Pay through VicPay and save another 1,5 % - learn how!
          </Typography>

          <Typography
            className="contactUsSubtitle3"
            sx={{ marginBottom: "24px" }}
          >
            2. Do you intend to use the products or goods yourself or are you
            intending to resell?
          </Typography>

          <div className="two-buttons-container">
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={() => handleSecondStepclick("Own")}
                sx={{
                  ".button-text p": {
                    textTransform: "none",
                    width: "300px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                }}
                className="submitFormButton"
              >
                <div className="button-text">
                  <p className="font-size-16">Own Usage</p>
                </div>
              </Button>
            </Box>

            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={() => handleSecondStepclick("Resell")}
                sx={{
                  ".button-text p": {
                    textTransform: "none",
                    width: "300px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                }}
                className="submitFormButton"
              >
                <div className="button-text">
                  <p className="font-size-16">Reselling</p>
                </div>
              </Button>
            </Box>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <Typography
            className="pressSubtitle"
            style={{ marginBottom: "24px" }}
          >
            No Chatbots and no need to wait hours on hold - our dedicated
            Buyers´ Desk is available for our registered clients 24/7/365!
          </Typography>

          <Typography
            className="contactUsSubtitle3"
            sx={{ marginBottom: "24px" }}
          >
            3. Are you interested to insure the buying process including the
            financial transactions?
          </Typography>

          <div className="two-buttons-container">
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={() => handleThirdStepclick("buyingYes")}
                sx={{
                  ".button-text p": {
                    textTransform: "none",
                    width: "300px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                }}
                className="submitFormButton"
              >
                <div className="button-text">
                  <p className="font-size-16">Yes</p>
                </div>
              </Button>
            </Box>

            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                onClick={() => handleThirdStepclick("buyingNo")}
                sx={{
                  ".button-text p": {
                    textTransform: "none",
                    width: "300px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  },
                }}
                className="submitFormButton"
              >
                <div className="button-text">
                  <p className="font-size-16">No</p>
                </div>
              </Button>
            </Box>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <Typography
            className="pressSubtitle"
            style={{ marginBottom: "24px" }}
          >
            A strong partner and a part of a strong network!
          </Typography>

          <Typography
            className="pressSubtitle"
            style={{ marginBottom: "24px", textAlign: "start" }}
          >
            Victorum Trade is a part of the Victorum Group of Companies. Our
            companies are based in 12 Countries and we offer a vast choice of
            trading related services, such as digital payments, crypto- and
            blockchain services as well as corporate finance solutions.
          </Typography>

          <Typography
            className="contactUsSubtitle3"
            sx={{ marginBottom: "24px", textAlign: "start" }}
          >
            Learn everything about the different companies and services carried
            out by the Victorum Group of Companies and enfold the full potential
            of our platform!
          </Typography>

          <Formik
            initialValues={{ name: "", company: "", website: "", email: "" }}
            validationSchema={formSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="two-buttons-container">
                  <Field
                    as={TextField}
                    name="name"
                    label="Name"
                    fullWidth
                    margin="normal"
                    helperText={<ErrorMessage name="name" />}
                    error={errors.name && touched.name}
                  />
                  <Field
                    as={TextField}
                    name="company"
                    label="Company"
                    fullWidth
                    margin="normal"
                    helperText={<ErrorMessage name="company" />}
                    error={errors.company && touched.company}
                  />
                </div>
                <div className="two-buttons-container">
                  <Field
                    as={TextField}
                    name="website"
                    label="Website"
                    fullWidth
                    margin="normal"
                    helperText={<ErrorMessage name="website" />}
                    error={errors.website && touched.website}
                  />
                  <Field
                    as={TextField}
                    name="email"
                    label="Email"
                    fullWidth
                    margin="normal"
                    helperText={<ErrorMessage name="email" />}
                    error={errors.email && touched.email}
                  />
                </div>
                <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    type="submit"
                    disabled={isLoading}
                    className="submitFormButton"
                    sx={{
                      textTransform: "none",
                      width: { xs: "100%", sm: "450px" },
                      marginLeft: "auto",
                      marginRight: "auto",
                      backgroundColor: "#2A5182 !important",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "primary.dark !important",
                      },
                      "&.Mui-disabled": {
                        backgroundColor: "grey !important",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "grey !important",
                        },
                      },
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </div>
      )}

      {step === 5 && (
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
    </div>
  );
};
