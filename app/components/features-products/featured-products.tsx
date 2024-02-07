import ProductCard from "./product/product";
import "./featured-products.scss"; // Assuming you have CSS modules set up

const FeaturedProducts: React.FC = () => {
  // This array would come from your data source, e.g. an API call
  const products = [
    {
      title: "Open Park Gy 1",
      price: "18000",
      unit: "Piece/Pieces",
      imgSrc: "/get-distributers.svg",
      companyName: "1 POWER SPRING GYM",
    },
    {
      title: "2 Open Park For...",
      price: "18000",
      unit: "Piece/Pieces",
      imgSrc: "/home-supplies.svg",
      companyName: "2 POWER SPRING GYM",
    },
    {
      title: "3 Open Park For...",
      price: "18000",
      unit: "Piece/Pieces",
      imgSrc: "/machinery.svg",
      companyName: "3 POWER SPRING GYM",
    },
    {
      title: "4 Open Park For...",
      price: "18000",
      unit: "Piece/Pieces",
      imgSrc: "/get-distributers.svg",
      companyName: "4 POWER SPRING GYM",
    },
    {
      title: "5 Open Park For...",
      price: "18000",
      unit: "Piece/Pieces",
      imgSrc: "/get-distributers.svg",
      companyName: "5 POWER SPRING GYM",
    },
  ];

  return (
    <div>
      <h2>Featured Products</h2>
      <div className="products-contianer">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
