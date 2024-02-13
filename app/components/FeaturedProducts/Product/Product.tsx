"use client";
import Image from "next/image";
import "./Product.scss";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import InquiryModal from "../InquiryModal/InquiryModal";

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
        <Image src={imgSrc} alt={title} width={100} height={110} />
      </div>
      <h3 className="title">{title}</h3>

       {price && 
      <p className="price">{price} INR (Approx.)</p>
       }

      <p className="unit">{unit}</p>
      <p className="companyName">{companyName}</p>
      <button className="inquiryButton" onClick={handleOpenModal}>
        <p>Send Inquiry</p>
        <SendIcon />
      </button>
      <InquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productName={title}
        company={companyName}
        imgSrc={imgSrc}
      />
    </div>
  );
};

export default ProductCard;
