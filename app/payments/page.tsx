"use client";
import React from "react";
import "./Payments.scss";
import { Box, Typography } from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import HeadData from "../components/head";
import { isMobile } from 'react-device-detect';


export default function PaymentsPage() {
    const openVicPay = () => {
        window.open("https://vicpayments.com/", "_blank");
    };
    return (
        <main>
            <HeadData
                title="Payments | Victorum Trade"
                description="Discover VicPay, Victorum Trade's versatile payment platform for seamless transactions. Send and receive fiat and crypto payments, manage spending in real-time, and enjoy instant payments worldwide. Benefit from convenient funding options and 24/7 multilingual support."
                keywords="VicPay, payment platform, transactions, fiat, crypto, spending management, instant payments, funding options, multilingual support"
            />
            <Box className="paymentsMainContainer">
                <Box className="titleHeadlineImgBg">
                    <Box className="paymentsTitleHeadlineMW">
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row", // Располагаем элементы в ряд
                                justifyContent: "space-between", // Распределяем элементы равномерно
                                alignItems: "center", // Центрируем элементы по вертикали
                                gap: "20px", // Отступ между заголовком и карточкой
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                }}
                            >
                                <Box display="flex">
                                    <Box className="paymentsTitleBg">
                                        <Typography className="paymentsTitleBgText">Payments?</Typography>
                                    </Box>

                                    <Box ml={9}>
                                        <Typography className="paymentsTitle">VicPay!</Typography>
                                    </Box>
                                </Box>


                                <Typography
                                    sx={{
                                        marginTop: "10px",
                                        fontSize: "18px",
                                        color: "gray",
                                        textAlign: "left", // Выравнивание по левому краю
                                    }}
                                >
                                    Experience fast, secure, and hassle-free payments with VicPay. Whether
                                    it’s fiat or crypto, VicPay ensures seamless transactions worldwide.
                                </Typography>
                            </Box>

                            {!isMobile ? (
                                <Box
                                    sx={{
                                        border: "solid",
                                        borderColor: "gray",
                                        borderRadius: "20px",
                                        padding: "7px",
                                        cursor: "pointer",
                                    }}
                                    onClick={() => window.open("https://www.vicpayments.com/", "_blank")}
                                >
                                    <Box className="paymentsBg"></Box>
                                </Box>
                            ):''}
                        </Box>
                    </Box>
                </Box>


                {/* SECOND SECTION */}
                <Box className="paymentsTextContainerPadding">
                    <Box className="paymentstextContainer">
                        <Typography className="paymentsSubtitle2">
                            Do you want to receive payments for transactions through
                            victorum´s trading platform easily and cheaply?
                        </Typography>

                        <Typography className="paymentsSubtitle">
                            Use VicPay - our feature loaded payment platform for users across
                            the world!
                        </Typography>
                        <Typography className="paymentsSubtitle">
                            VicPay helps you to send and to receive fiat currencies as well as
                            crypto payments, exchange currencies and control your spendings in
                            real time.
                        </Typography>
                        <Typography className="paymentsSubtitle">
                            Get paid or pay out your employers or affiliate programs instantly
                            and spend anywhere in the world with our debit Credit Card or
                            partner with us and get a branded corporate Credit Card for your
                            broker or financial services company.
                        </Typography>
                        <Typography className="paymentsSubtitle">
                            Our services are compatible with hundreds of websites in dozens of
                            countries - and we are still growing!
                        </Typography>
                        <Typography className="paymentsSubtitle">
                            Just look for our logo on your preferred digital currency,
                            affiliate or exchange platforms in case you are looking to save
                            money on transactions or conversion!
                        </Typography>
                        <Typography className="paymentsSubtitle">
                            It´s not difficult to add funds to your VicPay account: load and
                            withdraw via a credit or debit card, bank transfers, local
                            transfers, cryptocurrencies and more.
                        </Typography>
                        <Typography className="paymentsSubtitle">
                            Our awarded live agent supports you 24 hrs on 365 days within
                            minutes in English, Russian, German, Chinese and Farsi.
                        </Typography>
                        <Typography className="paymentsSubtitle">
                            So make it easy, manage both your and your staff´s finances in one
                            easy to use app or pay. It doesn´t matter wherever you are with our
                            Victorum Credit Card -{" "}
                            <span className="mailToText" onClick={openVicPay}>
                {" "}
                                click here
              </span>{" "}
                            to get your free VicPay account.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </main>
    );
}
