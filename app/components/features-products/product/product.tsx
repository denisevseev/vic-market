"use client";
import Image from "next/image";
import "./product.scss";
import SendIcon from "@mui/icons-material/Send";
import InquiryModal from "../inquiry-modal/InquiryModal";
import { useState } from "react";

type ProductProps = {
  title: string;
  price: string;
  unit: string;
  imgSrc: string;
  companyName: string;
};

const ProductCard: React.FC<ProductProps> = ({
  title,
  price,
  unit,
  imgSrc,
  companyName,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className="productCard">
      <div className="imageWrapper">
        <Image src={imgSrc} alt={title} width={80} height={80} />
      </div>
      <h3 className="title">{title}</h3>
      <p className="price">{price} INR (Approx.)</p>
      <p className="unit">{unit}</p>
      <p className="companyName">{companyName}</p>
      <button className="inquiryButton" onClick={handleOpenModal}>
        <p>Send Inquiry</p>
        <SendIcon />
      </button>
      <InquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productName={title} // Replace with your actual product name
        company={companyName} // Replace with your actual company name
        imgSrc={imgSrc} // Replace with your actual image source
      />
    </div>
  );
};

export default ProductCard;
