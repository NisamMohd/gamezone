import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Rs from "../assets/indian-rupee.svg";

export default function Slider({ title, items }) {
  const navigate = useNavigate();
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-10">
      <div className="flex justify-between mx-4 my-2">
        <h1 className="text-2xl font-bold mb-4  ">{title}</h1>
        <button
          className="text-black px-4 py-2  bg-slate-300 rounded-xl"
          onClick={() => navigate("/products")}
        >
          more..
        </button>
      </div>
      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-12 no-scrollbar"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[250px] bg-slate-300 p-4 rounded-lg flex-shrink-0"
            >
              <img
                src={item.image}
                className="w-60 h-60 object-cover rounded flex justify-center"
              />
                <h3 className="mt-2 font-semibold max-w-60">{item.title}</h3>

              <div className="flex-col justify-between  pr-0.5 ">

                <div className="flex items-center">
                  <img src={Rs} alt="RS:" className="size-7 pt-1" />
                  <p className="text-3xl">{item.price}</p>
                </div>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}
