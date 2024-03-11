import ProductCard from "./Product/Product";
import "./FeaturedProducts.scss"; // Assuming you have CSS modules set up
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Grid, IconButton } from "@mui/material";
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

      <h2>{title ?? "Top Products"}</h2>
      <Grid container spacing={3}>
        {data?.map((product, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={2.4}
            className="itemGrid"
          >
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FeaturedProducts;
