"use client";
import {
  Box,
  Breadcrumbs,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import "../../../../styles/SingleProduct.scss";
import { useEffect, useState } from "react";
import {
  getFilteredProductsByCategory,
  getProductBySlug,
  processApiResponse,
} from "@/api/helper/dataFilter";
import { useMarketData } from "@/app/hooks/useMarketData";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Image from "next/image";
import Default from "../../../../public/get-distributers.svg";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import SendIcon from "@mui/icons-material/Send";
import InquiryModal from "@/app/components/FeaturedProducts/InquiryModal/InquiryModal";
import { SellerDetails } from "@/app/components/SellerDetails/SellerDetails";
import FeaturedProducts from "@/app/components/FeaturedProducts/FeaturedProducts";
import CircularProgress from "@mui/material/CircularProgress";

export default function Product({ params }: any) {
  const { data: marketData, isLoading } = useMarketData();

  const slug = params && params.slug ? params.slug : null;

  const [productName, setProductName] = useState<any>(null);
  const [singleProduct, setSingleProduct] = useState<any>([]);

  const [relatedProducts, setRelatedProducts] = useState<any>([]);
  const [breadcrumbs, setBreadcrumbs] = useState<any[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  // related
  const [categoryName, setCategoryName] = useState<any>(null);
  const [categorySlug, setCategorySlug] = useState<any>(null);

  const excludeProductById = (products: any[], excludedId: number) => {
    return products.filter((product) => product.id !== excludedId);
  };

  useEffect(() => {
    if (marketData) {
      const formated = processApiResponse(marketData);
      const product = getProductBySlug(formated, slug);

      if (product && product.productName) {
        setProductName(product.productName);
      }

      setSingleProduct(product ? [product] : []);
      const generatedBreadcrumbs = [
        { label: "Victorum trade", href: "/" },
        {
          label: `${product?.category_fallback_name}`,
          href: `/category/[slug]`,
          as: `/category/${product?.categorySlug}`,
        },
        {
          label: productName,
          href: `/product/[slug]/[id]`,
          as: `/product/${slug}/${product.id}`,
        },
      ];

      setBreadcrumbs(generatedBreadcrumbs);

      //  related products start
      if (formated) {
        const category: any = formated.find(
          (cat: any) => cat.categorySlug === slug
        );

        if (category && category.categoryName) {
          setCategoryName(category.categoryName);
        }
      }

      setCategorySlug(product?.categorySlug);

      if (formated && product && categorySlug) {
        let products = getFilteredProductsByCategory(
          formated,
          4,
          [],
          categorySlug
        );
        products = excludeProductById(products, product.id);
        setRelatedProducts(products);
      }
      // related products end
    }
  }, [marketData, slug, productName]);

  const sellerInfo = {
    name: "nanda fluorine corporation",
    gst: "24ATGPM8483N1ZY",
    rating: 4,
    proprietor: "Mr Chandra Dhar Nanda",
    memberSince: 3,
    address:
      "Plot no 407/13, Near Fire Station, GIDC Panoli, Dist. Bharuch, Ankleshwar, Gujarat, 394115, India",
  };

  return (
    <main>
      <Box className="container">
        <Box
          style={{
            width: "98%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "4rem",
          }}
        >
          {isLoading ? (
            <Box className="loaderBox">
              <CircularProgress sx={{ color: "rgb(38, 92, 129)" }} />
            </Box>
          ) : (
            <Box
              className="other-page-wrap-start"
              style={{ marginBottom: "6rem" }}
            >
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
              <Box sx={{ marginTop: "20px" }}>
                {singleProduct.map((product: any) => (
                  <>
                    <Box
                      key={"Single product" + product.id}
                      className="productInfoMainSellerDetailsMain"
                    >
                      <Box className="productInfoMainBox">
                        <Box className="productImagesContainer">
                          <Image
                            src={product?.productImage || Default}
                            width={100}
                            height={100}
                            alt="Product Image"
                            className="imageSingleProduct"
                            priority
                          />
                        </Box>
                        <Box className="singleProductInfo">
                          <Box className="shareIconBox">
                            <IconButton>
                              <ShareOutlinedIcon className="shareIcon" />
                            </IconButton>
                          </Box>
                          <Box className="productTitleBox">
                            <Typography className="productTitle">
                              {product.productName}
                            </Typography>
                          </Box>
                          <Divider sx={{ color: "rgb(238, 240, 243);" }} />
                          <Box className="productPriceBox">
                            {" "}
                            <Typography className="productPrice">
                              Price: {product.productPrice} {product.currency}
                            </Typography>
                          </Box>
                          <Divider sx={{ color: "rgb(238, 240, 243);" }} />
                          <Box className="subProductInfoColumn">
                            <Box>
                              <Box className="subInfoBox">
                                <Typography className="subInfoHead">
                                  Manufacturer:{" "}
                                </Typography>
                                <Typography className="subInfo">
                                  {product.manufacturerName}{" "}
                                </Typography>
                              </Box>
                            </Box>
                            <Box>
                              <Box className="subInfoBox">
                                <Typography className="subInfoHead">
                                  Delivery Time:{" "}
                                </Typography>
                                <Typography className="subInfo">- </Typography>
                              </Box>
                            </Box>
                            <Box>
                              <Box className="subInfoBox">
                                <Typography className="subInfoHead">
                                  Supply Ability:{" "}
                                </Typography>
                                <Typography className="subInfo">- </Typography>
                              </Box>
                            </Box>
                            <Box>
                              <Box className="subInfoBox">
                                <Typography className="subInfoHead">
                                  Sample Available :{" "}
                                </Typography>
                                <Typography className="subInfo">- </Typography>
                              </Box>
                            </Box>
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
                          </Box>
                        </Box>
                      </Box>
                      <Box className="sellerDetailsMain">
                        <SellerDetails
                          name={sellerInfo.name}
                          gst={sellerInfo.gst}
                          rating={sellerInfo.rating}
                          proprietor={sellerInfo.proprietor}
                          memberSince={sellerInfo.memberSince}
                          address={sellerInfo.address}
                        />
                      </Box>
                    </Box>
                    {product.description && (
                      <Box className="productDescMainBox">
                        <Box>
                          <Typography className="productDescHeadText">
                            Product Description
                          </Typography>
                        </Box>
                        <Box>
                          <Typography className="productDescText">
                            {product.description}
                          </Typography>
                        </Box>
                      </Box>
                    )}
                    <Box className="sellerDetailsMainMob">
                      <SellerDetails
                        name={sellerInfo.name}
                        gst={sellerInfo.gst}
                        rating={sellerInfo.rating}
                        proprietor={sellerInfo.proprietor}
                        memberSince={sellerInfo.memberSince}
                        address={sellerInfo.address}
                      />
                    </Box>
                    <InquiryModal
                      isOpen={isModalOpen}
                      onClose={handleCloseModal}
                      productName={product.productName}
                      company={product.manufacturerName}
                      imgSrc={product.productImage ?? "/get-distributers.svg"}
                    />
                  </>
                ))}
                {relatedProducts && relatedProducts.length > 0 && (
                  <FeaturedProducts
                    backAction={false}
                    title={"Related Products"}
                    data={relatedProducts}
                  />
                )}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </main>
  );
}
