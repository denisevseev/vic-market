import ProductCard from "./Product/Product";
import "./FeaturedProducts.scss"; // Assuming you have CSS modules set up
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface FeaturedProductsProps {
  data: any[];
  title?: string | null;
  backAction?: boolean | null;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  data,
  title,
  backAction,
}) => {
  const router = useRouter();
  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return (
    <div>
      {backAction && (
        <Link href="/" style={{ color: "#000", textDecoration: "none" }}>
          <IconButton aria-label="go back">
            <ArrowBackIcon />
          </IconButton>
          Back
        </Link>
      )}

      <h2>{title ?? "Featured Products"}</h2>
      <div className="products-contianer">
        {data?.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
