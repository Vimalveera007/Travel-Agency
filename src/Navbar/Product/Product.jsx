import React, { useState, useEffect } from "react";
import "../Product/Product.css";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let componentMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://freetestapi.com/api/v1/destinations"
      );
      if (componentMounted) {
        const products = await response.json();
        const modifiedProducts = products.map((product) => ({
          ...product,
          description:
            product.description.length > 50
              ? `${product.description.substring(0, 50)}...`
              : product.description,
        }));
        setData(products);
        setData(modifiedProducts);
        setLoading(false);
        console.log(products);
      }
    };

    getProducts();

    return () => {
      componentMounted = false;
    };
  }, []);

  return (
    <>
      <h1 className="text-4xl text-bold text-center py-3">Discover Destinations</h1>
      <p className="text-xl text-bold text-center py-3">
        Welcome to Discover Destinations, your premier destination for
        unforgettable travel experiences. At Discover Destinations, we believe
        that every journey is an opportunity for discovery and adventure.
        Whether you're seeking the thrill of exploring new cultures, the
        tranquility of pristine natural landscapes, or the excitement of vibrant
        cities, we're here to make your travel dreams a reality.
      </p>
      <div className="main">
        {loading ? (
          <p>Loading.....</p>
        ) : (
          data.map((product, index) => (
            <div key={index} className="product">
              <h3 className="text-3xl font-bold pb-5">{product.country}</h3>
              <h3 className="text-xl font-bold pb-5">{product.name}</h3>
              <img
                src={product.image}
                className="w-[400px] h-[250px] mb-5 object-fill"
              />
              <p className="text-xl pb-3">{product.description}</p>
              <p className="text-xl pb-2 font-semibold">
                Time Duration : {product.best_time_to_visit}
              </p>
              <button className="flex btn mx-auto items-center gap-2">
                Learn More
                <MdOutlineKeyboardDoubleArrowRight />
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Product;
