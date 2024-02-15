"use client";
import Image from "next/image";
import "./Product.scss";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import InquiryModal from "../InquiryModal/InquiryModal";
import { MarketRead } from "@/api/types/types";

const ProductCard: React.FC<MarketRead> = (product) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  return (
    <div className="productCard">
      <div className="imageWrapper">
        <Image src={product.productImage ?? '/get-distributers.svg'} alt={product.productName} width={100} height={110} />
      </div>
      <h3 className="title">{product.productName}</h3>

       {product.productPrice && 
      <p className="price">{product.productPrice} {product.currency ?? ''}</p>
       }

      <p className="unit">{'unit'}</p>
      <p className="companyName">{product.manufacturerName}</p>
      <button className="inquiryButton" onClick={handleOpenModal}>
        <p>Send Inquiry</p>
        <SendIcon />
      </button>
      <InquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productName={product.productName}
        company={product.manufacturerName}
        imgSrc={product.productImage ?? '/get-distributers.svg'}
      />
    </div>
  );
};

export default ProductCard;
