import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductSlider() {
  const items = [
    {
      id: 1,
      title: "Nike Air Max",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      id: 2,
      title: "Adidas Ultraboost",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      id: 3,
      title: "Puma Running Shoes",
      image: "https://picsum.photos/300/200?random=3",
    },
    {
      id: 4,
      title: "Levi's Jeans",
      image: "https://picsum.photos/300/200?random=4",
    },
    {
      id: 5,
      title: "Casio Watch",
      image: "https://picsum.photos/300/200?random=5",
    },
    {
      id: 6,
      title: "Apple AirPods",
      image: "https://picsum.photos/300/200?random=6",
    },
    {
      id: 7,
      title: "Samsung Galaxy Buds",
      image: "https://picsum.photos/300/200?random=7",
    },
    {
      id: 8,
      title: "Sony Headphones",
      image: "https://picsum.photos/300/200?random=8",
    },
    {
      id: 9,
      title: "Dell Laptop",
      image: "https://picsum.photos/300/200?random=9",
    },
    {
      id: 10,
      title: "Logitech Mouse",
      image: "https://picsum.photos/300/200?random=10",
    },
  ];
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    const container = sliderRef.current;

    if (direction === "left") {
      container.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <h1>Playstation</h1>
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-12"
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
              <h3 className="mt-2 font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>

      <h1>consoles</h1>
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-12"
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
              <h3 className="mt-2 font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>


      <h1>Accessories</h1>
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronLeft />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-12"
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
              <h3 className="mt-2 font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
        >
          <ChevronRight />
        </button>
      </div>
      
    </div>
  );
}
