import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";


import { Star, VerifiedIcon } from "lucide-react";

const MySwiper: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      loop

      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      }}
      className="rounded-lg overflow-hidden px-12"
    >
      <SwiperSlide>
        <div className="max-w-md mx-auto flex flex-col justify-center shadow-md p-4 rounded-lg border border-gray-200 gap-4 text-left my-4 ">
          <div className="flex ">
            {[...Array(4)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <Star className="w-4 h-4 text-gray-300" />
          </div>
          <h1 className="flex items-center gap-2">
            <span className="font-bold text-2xl">islam.A7A</span>{" "}
            <span>
              <VerifiedIcon />
            </span>
          </h1>
          <p>
            "I'm blown away by the quality and style of the clothes I received
            from Shop.co. From casual wear to elegant dresses, every piece I've
            bought has exceeded my expectations."
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-md mx-auto flex flex-col justify-center shadow-md p-4 rounded-lg border border-gray-200 gap-4 text-left my-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <h1 className="flex items-center gap-2">
            <span className="font-bold text-2xl">Sarah_J</span>
            <span>
              <VerifiedIcon />
            </span>
          </h1>
          <p>
            "The customer service is exceptional! When I had sizing issues, they
            helped me exchange immediately. The fabric quality is premium and
            worth every penny."
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-md mx-auto flex flex-col justify-center shadow-md p-4 rounded-lg border border-gray-200 gap-4 text-left my-4">
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <Star className="w-4 h-4 text-gray-300" />
          </div>
          <h1 className="flex items-center gap-2">
            <span className="font-bold text-2xl">MikeTyson</span>
            <span>
              <VerifiedIcon />
            </span>
          </h1>
          <p>
            "Fast shipping and perfect fit! Ordered a suit for my brother's
            wedding and got so many compliments. Will definitely shop here
            again."
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-md mx-auto flex flex-col justify-center shadow-md p-4 rounded-lg border border-gray-200 gap-4 text-left my-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <h1 className="flex items-center gap-2">
            <span className="font-bold text-2xl">Fashionista99</span>
            <span>
              <VerifiedIcon />
            </span>
          </h1>
          <p>
            "I've ordered from many online stores but Shop.co stands out. Their
            unique designs and attention to detail make their clothing special."
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-md mx-auto flex flex-col justify-center shadow-md p-4 rounded-lg border border-gray-200 gap-4 text-left my-4">
          <div className="flex">
            {[...Array(3)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            {[...Array(2)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gray-300" />
            ))}
          </div>
          <h1 className="flex items-center gap-2">
            <span className="font-bold text-2xl">JohnDoe</span>
          </h1>
          <p>
            "Good quality overall but the colors were slightly different than
            shown in pictures. Still happy with my purchase though."
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="max-w-md mx-auto flex flex-col justify-center shadow-md p-4 rounded-lg border border-gray-200 gap-4 text-left my-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <h1 className="flex items-center gap-2">
            <span className="font-bold text-2xl">EmmaWatson</span>
            <span>
              <VerifiedIcon />
            </span>
          </h1>
          <p>
            "Absolutely in love with my new winter collection from Shop.co! The
            materials are so comfortable and warm. Best online shopping
            experience!"
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const Swipe: React.FC = () => {
  return <MySwiper />;
};

export default Swipe;
