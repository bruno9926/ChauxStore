import Product from "../components/product/product";

export default function Home() {

  const products = [
    {
      image: "/images/products/blue flame.png",
      title: "Distortion Blue Flame",
      subtitle: "Oversized T-Shirt",
      price: 4999,
      isFavorite: true,
    },
    {
      image: "/images/products/purple bomber.png",
      title: "Purple Bomber Flame",
      subtitle: "Bomber Jacket",
      price: 4999,
      isFavorite: false,
    }
  ];
  return (
    <div>
      <h1>Welcome to the Store</h1>
      <h2>Featured Products</h2>
      <div className="products">
        {products.map((product, index) => (
          <Product
            key={index}
            image={product.image}
            title={product.title}
            subtitle={product.subtitle}
            price={product.price}
            isFavorite={product.isFavorite}
          />
        ))}
      </div>
    </div>
  );
}
