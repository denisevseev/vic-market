import "./PopularLinks.scss";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface PopularProductsLinksProps {
  data: any[];
}

const PopularProductsLink: React.FC<PopularProductsLinksProps> = ({ data }) => {
  const router = useRouter();

  const handleLinkClick = (productSlug: string, id: string) => {
    router.push(`/product/${productSlug}/${id}`);
  };

  return (
    <Box>
      <Box className="popularLinksMainBox">
        <Box>
          <Typography className="titleText">Popular Products</Typography>
        </Box>
        <Box>
          {data &&
            data.map((link: any, index: any) => (
              <Button
                key={index}
                className="linksButton"
                onClick={() => handleLinkClick(link.productSlug, link.id)}
              >
                {link.productName}
              </Button>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PopularProductsLink;
