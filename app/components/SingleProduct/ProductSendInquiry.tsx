"use client";
import { Box } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import InquiryModal from "../FeaturedProducts/InquiryModal/InquiryModal";

export default function ProductSendInquiry({ singleProduct }: any) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <>
      <Box>
        {" "}
        <button
          className="inquiryButtonSingleProduct"
          onClick={handleOpenModal}
        >
          <p>Send Inquiry</p>
          <SendIcon />
        </button>
      </Box>
      <InquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productName={singleProduct?.productName}
        company={singleProduct?.manufacturerName}
        imgSrc={
          (singleProduct &&
            singleProduct.files &&
            singleProduct.files[0] &&
            singleProduct.files[0].link) ??
          "/get-distributers.svg"
        }
        id={singleProduct?.id}
      />
    </>
  );
}
