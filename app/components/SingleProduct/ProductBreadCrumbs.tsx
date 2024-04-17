"use client";
import { Box, Breadcrumbs, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMarketData } from "@/app/hooks/useMarketData";
import { processApiResponse } from "@/api/helper/dataFilter";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const getCategorySlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

export default function ProductsBreadCrumbs({ slug, singleProduct }: any) {
  const { data: marketData } = useMarketData();
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);
  const [productName, setProductName] = useState<any>(null);

  useEffect(() => {
    if (marketData) {
      if (singleProduct && singleProduct.productName) {
        setProductName(singleProduct.productName);
      }

      const categorySlug = getCategorySlug(singleProduct?.categoryName || "");

      const generatedBreadcrumbs = [
        { label: "Victorum trade", href: "/" },
        {
          label: `${singleProduct?.categoryName}`,
          href: `/category/[slug]`,
          as: `/category/${categorySlug}`,
        },
        {
          label: productName,
          href: `/product/[slug]/[id]`,
          as: `/product/${slug}/${singleProduct.id}`,
        },
      ];

      setBreadcrumbs(generatedBreadcrumbs);
    }
  }, [marketData, slug, productName]);

  return (
    <Box>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs?.map((breadcrumb, index) => (
          <Link
            className="breadCrumb"
            key={"BreadCrumb" + index}
            href={breadcrumb.href}
            as={breadcrumb.as || undefined}
            passHref
          >
            <Typography>{breadcrumb.label}</Typography>
          </Link>
        ))}
      </Breadcrumbs>
    </Box>
  );
}
