"use client"

import Image from 'next/image';
import Link from 'next/link';

function ProductCard({ product }) {

  const addToCart = (products) => {
    console.log(products);

  }

  return (
    <div className="w-full cursor-pointer">

      <div className="overflow-hidden relative group">
        <Link href={`/products/${product.handle}`}>
          <Image
            className="w-full aspect-square object-cover transition-opacity duration-300 group-hover:opacity-0"
            src={product.images[0]?.src}
            alt={product.title}
            width={500}
            height={500}
          />
          {product.images[1] && (
            <Image
              className="w-full aspect-square object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              src={product.images[1]?.src}
              alt={product.title}
              width={500}
              height={500}
            />
          )}

        </Link>

        <button className=" absolute bottom-0 left-0  w-full bg-white  text-black py-3 translate-y-full group-hover:translate-y-0 transition-all cursor-pointer duration-300 " onClick={() => addToCart(product.id)}>
          Add To Cart
        </button>
      </div>


      <Link href={`/product/${product.handle}`}>
        <div className="py-4 flex flex-col gap-1">
          <h3 className="text-[15px] font-thin">
            {product.title}
          </h3>

          <div className="flex items-center gap-2">
            <span className="text-[#9e5635] font-medium text-[13px]">
              Rs. {Number(product.variants[0]?.price).toLocaleString("en-IN")}
            </span>

            <span className="line-through text-gray-500 text-[13px]">
              Rs. {Number(product.variants[0]?.compare_at_price).toLocaleString("en-IN")}
            </span>
          </div>

          <p className="text-black text-[13px]">
            Save 20% off
          </p>

          <p className="text-[#9e5635] text-[13px] font-thin">
            Prepaid Orders — Get <strong>5%</strong> off with <strong>LIVING5</strong>
          </p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
