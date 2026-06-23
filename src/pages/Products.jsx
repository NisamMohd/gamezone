import React from "react";
import { items } from "../constants/Items";
import Rs from "../assets/indian-rupee.svg";

function Products() {
  return (
    <div className="sm:py-4 md:py-8 lg:py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-12">
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px]  bg-slate-300 p-4 rounded-lg "
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-80 h-80 object-cover rounded"
            />

            <h3 className="mt-2 font-semibold">{item.title}</h3>
            <div className="flex justify-between pr-0.5">
              <div className="flex items-center">
                <img src={Rs} alt="RS:" className="size-7 pt-1" />
                <p className="text-3xl">{item.price}</p>
              </div>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
