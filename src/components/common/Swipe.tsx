import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import slideImg from "@/assets/slide.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card, CardContent } from "@/components/ui/card.tsx";
import { Star } from "lucide-react";

const MySwiper: React.FC = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      loop
      spaceBetween={20}
      slidesPerView={4}
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
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <img
              src={slideImg}
              alt="T-shirt"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">T-shirt with Tape Details</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-4 h-4 text-gray-300" />
              </div>
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>
            <div className="text-xl font-bold">$120</div>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <img
              src={slideImg}
              alt="T-shirt"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">T-shirt with Tape Details</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-4 h-4 text-gray-300" />
              </div>
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>
            <div className="text-xl font-bold">$120</div>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <img
              src={slideImg}
              alt="T-shirt"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">T-shirt with Tape Details</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-4 h-4 text-gray-300" />
              </div>
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>
            <div className="text-xl font-bold">$120</div>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <img
              src={slideImg}
              alt="T-shirt"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">T-shirt with Tape Details</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-4 h-4 text-gray-300" />
              </div>
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>
            <div className="text-xl font-bold">$120</div>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <img
              src={slideImg}
              alt="T-shirt"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">T-shirt with Tape Details</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-4 h-4 text-gray-300" />
              </div>
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>
            <div className="text-xl font-bold">$120</div>
          </CardContent>
        </Card>
      </SwiperSlide>
      <SwiperSlide>
        <Card className="border-0 shadow-none">
          <CardContent className="p-0">
            <img
              src={slideImg}
              alt="T-shirt"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h4 className="font-semibold mb-2">T-shirt with Tape Details</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-4 h-4 text-gray-300" />
              </div>
              <span className="text-sm text-gray-600">4.5/5</span>
            </div>
            <div className="text-xl font-bold">$120</div>
          </CardContent>
        </Card>
      </SwiperSlide>
    </Swiper>
  );
};

const Swipe: React.FC = () => {
  return <MySwiper />;
};

export default Swipe;
