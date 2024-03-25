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
  getProductByID,
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
  const [productFromBE, setProductFromBE] = useState<any | null>(null);

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
          label: `${product?.categorySlug}`,
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
    }
  }, [marketData, slug, productName]);

  // fetchprod start
  const fetchProduct = async (slug: string) => {
    try {
      const response = await getProductByID(params.id);
      setProductFromBE(response);
    } catch (error) {
      console.error("Failed to fetch product", error);
      // Handle errors appropriately
    }
  };

  useEffect(() => {
    fetchProduct(slug);
  }, []);

  // fetchprod end

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
                      key={"Single product" + productFromBE?.id}
                      className="productInfoMainSellerDetailsMain"
                    >
                      <Box className="productInfoMainBox">
                        <Box className="productImagesContainer">
                          <Image
                            src={productFromBE?.files[0].link || Default}
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
                              {productFromBE?.productName}
                            </Typography>
                          </Box>
                          <Divider sx={{ color: "rgb(238, 240, 243);" }} />
                          <Box className="productPriceBox">
                            {" "}
                            <Typography className="productPrice">
                              Price: {productFromBE?.productPrice}{" "}
                              {productFromBE?.currency}
                            </Typography>
                          </Box>
                          <Divider sx={{ color: "rgb(238, 240, 243);" }} />
                          <Box className="subProductInfoColumn">
                            <Box>
                              <Box className="subInfoBox">
                                <Typography className="subInfoHead">
                                  Seller detail:{" "}
                                </Typography>
                                <Typography className="subInfo">
                                  {/* {product.manufacturerName}{" "} */}
                                  Victorum {productFromBE?.countryName}
                                </Typography>
                              </Box>
                            </Box>
                            <Box>
                              <Box className="subInfoBox">
                                <Typography className="subInfoHead">
                                  Delivery Time:{" "}
                                </Typography>
                                <Typography className="subInfo">
                                  1 - 90 days
                                </Typography>
                              </Box>
                            </Box>
                            {productFromBE?.incoterms && (
                              <Box>
                                <Box className="subInfoBox">
                                  <Typography className="subInfoHead">
                                    Income Terms:{" "}
                                  </Typography>
                                  <Typography className="subInfo">
                                    {productFromBE?.incoterms}
                                  </Typography>
                                </Box>
                              </Box>
                            )}
                            {productFromBE?.minimal_quantity && (
                              <Box>
                                <Box className="subInfoBox">
                                  <Typography className="subInfoHead">
                                    Minimal Parity:
                                  </Typography>
                                  <Typography className="subInfo">
                                    {productFromBE.minimal_quantity}
                                  </Typography>
                                </Box>
                              </Box>
                            )}
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
                          proprietor={productFromBE?.createdBy}
                          memberSince={sellerInfo.memberSince}
                          address={productFromBE?.Address}
                          country={productFromBE?.countryName}
                          tnvedCode={productFromBE?.tnvedCode}
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
                            {productFromBE?.description}
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
                        address={productFromBE?.Address}
                        country={productFromBE?.countryName}
                        tnvedCode={productFromBE?.tnvedCode}
                      />
                    </Box>
                    <InquiryModal
                      isOpen={isModalOpen}
                      onClose={handleCloseModal}
                      productName={productFromBE?.productName}
                      company={productFromBE?.manufacturerName}
                      imgSrc={
                        productFromBE?.files[0]?.link ?? "/get-distributers.svg"
                      }
                      id={productFromBE?.id}
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
