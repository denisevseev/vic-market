import ProductCard from "./product/Product";
import "./featuredProducts.scss"; // Assuming you have CSS modules set up

interface FeaturedProductsProps {
  data: any[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ data }) => {
  return (
    <div>
      <h2>Featured Products</h2>
      <div className="products-contianer">
        {data?.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
