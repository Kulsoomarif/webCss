import Image from "next/image";
export default function ProductGrid() {
    const products = [
      {
        id: 1,
        image: "/Earrings/ear3.jpg",
        price: "$19.99",
        description: "Stylish Earrings",
      },
      {
        id: 2,
        image: "/Earrings/gg.avif",
        price: "$29.99",
        description: "Stylish Earrings",
      },
      {
        id: 3,
        image: "/Earrings/images.jfif",
        price: "$19.99",
        description: "Stylish Earrings",
      },
      {
        id: 4,
        image: "/Earrings/n.jfif",
        price: "$19.99",
        description: "Stylish Earrings",
      },
      {
        id: 5,
        image: "/Earrings/rrr.avif",
        price: "$29.99",
        description: "Stylish Earrings",
      },
      {
        id: 6,
        image: "/Earrings/earr.jpg",
        price: "$39.99",
        description: "Stylish Earrings",
      },
      {
        id: 7,
        image: "/Earrings/ank.webp",
        price: "$30.99",
        description: "Stylish Anklets",
      },
      {
        id: 8,
        image: "/Earrings/rin.jpg",
        price: "$29.99",
        description: "Stylish Rings",
      },
    ];
  
    return (
      <div className="product-grid-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <Image
              src={product.image}
              alt={product.description}
              className="product-image"
            />
            <div className="product-details">
              <p className="product-price">{product.price}</p>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  