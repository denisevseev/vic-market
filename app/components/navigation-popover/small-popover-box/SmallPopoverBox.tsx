"use client";
import React from "react";
import "./smallPopoverBox.scss";
import Image from "next/image";

interface SmallPopoverBoxProps {
  imgSrc: string;
  text: string;
  redirectUrl: string;
}

export default function SmallPopoverBox({
  imgSrc,
  text,
  redirectUrl,
}: SmallPopoverBoxProps) {
  return (
    <p
      className="box-container"
      rel="noopener noreferrer"
    >
      {imgSrc && <Image src={imgSrc} alt={text} width={28} height={28} />}
      <div className="box-title">{text}</div>
    </p>
  );
}
