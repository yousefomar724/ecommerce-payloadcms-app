import Link from "next/link";
import React from "react";

type Product = {
  name: string;
  description: string;
  price: number;
  image: string;
  id: string;
};

const Card: React.FC<{ product: Product }> = ({ product }) => {
  const { image, name, description, price, id } = product;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full max-h-[200px] object-cover"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="flex justify-between items-center">
        <button className="px-2 py-1 mb-2 bg-slate-700 text-white rounded-md">
          ${price}
        </button>
        <Link href={`products/${id}`}>
          <a className="px-2 py-1 mb-2 bg-slate-700 text-white rounded-md">
            More Details
          </a>
        </Link>
      </div>
      <button
        className="px-6 py-4 mr-auto w-full bg-slate-700 text-white rounded-md snipcart-add-item"
        data-item-id={id}
        data-item-price={price}
        data-item-url={`/product/${id}`}
        data-item-description={description}
        data-item-image={image}
        data-item-name={name}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
