import slideImg from "@/assets/slide.png";

const Browser = () => {
  return (
    <div className="container bg-gray-300/30 p-8 rounded-2xl mx-auto my-12 max-w-7xl">
      <div className="my-8 md:my-12 flex text-3xl md:text-5xl font-bold items-center justify-center text-center">
        BROWSE BY DRESS STYLE
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto w-full max-w-6xl">
        <div className="relative group overflow-hidden rounded-xl h-60">
          <img
            src={slideImg}
            alt="Casual T-shirts"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Casual</span>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-xl h-60 md:col-span-2">
          <img
            src={slideImg}
            alt="Formal Wear"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Formal</span>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-xl h-60 md:col-span-2">
          <img
            src={slideImg}
            alt="Party Wear"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Party</span>
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-xl h-60 ">
          <img
            src={slideImg}
            alt="Gym Wear"
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Gym</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browser;
