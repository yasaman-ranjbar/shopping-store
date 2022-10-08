import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { useProducts } from "../../Providers/ProductsProvider";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Autoplay } from "swiper";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductSectionSlider = () => {
  const productSlider = useProducts();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="pb-20 px-4 md:px-20">
      <h1 className="py-20 text-2xl md:text-6xl font-bold text-center">
        Featured products
      </h1>
      {productSlider.length > 0 && (
        <div>
          <div >
            <h1>{productSlider.title}</h1>
            <div className="mb-2 px-2">
              <button
                className="bg-white mr-2 p-3 rounded-lg shadow-md text-gray-500 hover:opacity-70 transition ease-in-out"
                ref={prevRef}
              >
                <FaChevronLeft />
              </button>
              <button
                className="bg-white p-3 rounded-lg shadow-md text-gray-500 hover:opacity-60 transition ease-in-out"
                ref={nextRef}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div>
            <Swiper
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              modules={[Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                400: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1200: {
                  // slidesPerView:
                  //   productSlider.length > 4 ? 5 : productSlider.length,
                  // spaceBetween: 30,
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              {productSlider.map((p) => {
                return (
                  <SwiperSlide key={p.id}>
                    <div className="py-5 px-2">
                      {p && (
                        <div
                          className="bg-white hover:scale-105 transition-all ease-in-out rounded-xl p-2 shadow-md flex flex-col justify-between h-auto "
                          key={p.id}
                        >
                          <div className="">
                            <Link to={`/products/${p.id}`}>
                              <div className="mb-5 bg-gray-100 rounded-xl p-2 flex items-center justify-center">
                                <img
                                  src={p.image}
                                  alt={p.image}
                                  className="w-40 h-40"
                                />
                              </div>
                            </Link>
                            {/* product description */}
                            <div className="flex items-center justify-between w-full mb-4">
                              <span className="text-slate-400 text-sm">
                                {p.category}
                              </span>
                              <div className="flex items-center">
                                <ReactStars
                                  value={p.rating.rate}
                                  isHalf={true}
                                  size={20}
                                  edit={false}
                                />
                              </div>
                            </div>
                            {/* product title */}
                            <div className="text-slate-800 text-xs font-bold mb-2">
                              {p.title.slice(0,30)}
                            </div>
                            <div className="text-blue-600 font-medium text-center text-sm mb-3">
                              {p.price} $
                            </div>
                          </div>
                          <div>
                            <hr className="bg-blue-500" />
                            <button className="text-center text-blue-500 w-full font-bold py-1">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductSectionSlider;
