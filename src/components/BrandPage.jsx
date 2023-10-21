import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const BrandPage = () => {
  const brands = useLoaderData();
  if (brands.length === 0) {
    return (
      <div className="font-bold text-4xl text-center">
        No Products Available for this Brand
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand._id}>
            <img width={800} height={100} src={brand.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {brands.map((brand) => (
          <ProductCard key={brand._id} brand={brand}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default BrandPage;
