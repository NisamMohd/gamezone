import React from "react";
import items from "../constants/Items"

function Products() {
  return (
    <div>
      <div className="flex gap-4 overflow-x-auto scroll-smooth px-12 no-scrollbar">
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] bg-slate-300 p-4 rounded-lg flex-shrink-0"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover rounded"
            />

            <h3 className="mt-2 font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
