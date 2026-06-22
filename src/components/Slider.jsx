import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Slider({ title, items }) {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-10">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-12"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[250px] bg-gray-100 p-4 rounded-lg flex-shrink-0"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="mt-2 font-semibold">
                {item.title}
              </h3>
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