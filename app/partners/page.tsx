"use client";
import React, { useRef } from "react";
import "./style.scss";
import { Box, Button, Typography } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import HeadData from "../components/head";

export default function BecomePartner() {
    const formRef = useRef<HTMLDivElement>(null);

    return (
        <main>
            <HeadData
                title="Become a Partner | Victorum Trade"
                description="Join Victorum as a valued partner and unlock endless opportunities. Together, we create success, innovate, and drive growth."
                keywords="become a partner, Victorum Trade, partnership, business opportunities, grow with us, Victorum "
            />
            <Box className="newsLetterMainContainer">
                <Box className="titleHeadlineImgBg">
                    <Box className="newsLetterTitleHeadlineMW">
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                        >
                            {/* TITLE */}
                            <Box className="newsLetterTitleBg">
                                <Typography className="newsLetterTitleBgText">
                                    Join us to earn
                                </Typography>
                            </Box>
                            {/* HEADLINE */}
                            <Typography className="newsLetterTitle">
                                Become part of the team, earn with us!
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                boxShadow: "0 5px 20px 0 rgba(46,61,73,.1)",
                                borderRadius: "12px",
                            }}
                        >
                            <Box className="newsLetterBg"></Box>
                        </Box>
                    </Box>
                </Box>

                {/* SECOND SECTION */}
                <Box className="newsLetterTextContainerPadding">
                    <Box className="newsLettertextContainer">
                        <Typography className="contactUsSubtitle2">
                            Join as a Partner
                        </Typography>

                        <Typography className="newsLetterSubtitle">
                            Join Victorum as a valued partner and unlock endless opportunities! Together, we create success, innovate, and drive growth. Whether you&apos;re looking to expand your network or earn more, with us, your potential is limitless. Let&apos;s build a prosperous future hand in hand!
                        </Typography>

                        <Box ref={formRef}></Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "50px",
                        marginBottom: "50px",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <Button
                        variant="contained"
                        sx={{
                            height: "52px",
                            borderRadius: "8px",
                            backgroundColor: "#2A5182",
                            width: "200px",
                            ".button-text p": {
                                textTransform: "none",
                            },
                        }}
                        onClick={() => window.open("https://crm.victorum-group.com", "_blank")}
                    >
                        <div className="button-text">
                            <p className="font-size-16">Become a Partner</p>
                        </div>
                    </Button>

                </Box>
            </Box>
        </main>
    );
}

