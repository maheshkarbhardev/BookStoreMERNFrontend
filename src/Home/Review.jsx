import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>

      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border hover:bg-orange-300">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review Text */}
              <div>
                <p className="mb-5 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero est adipisci impedit doloremque eius provident,
                  repudiandae id hic, repellat, perferendis dolore eum quas
                  necessitatibus natus velit. Praesentium maiores earum dolorum!
                </p>

                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 border border-black rounded-full dark:bg-gray-600 dark:border-dark-gray-300">
                  <span class="font-medium text-gray-600 dark:text-gray-300">
                    M
                  </span>
                </div>
                <h3 className="text-lg font-medium">Mahesh</h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border hover:bg-orange-300">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review Text */}
              <div>
                <p className="mb-5 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero est adipisci impedit doloremque eius provident,
                  repudiandae id hic, repellat, perferendis dolore eum quas
                  necessitatibus natus velit. Praesentium maiores earum dolorum!
                </p>

                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 border border-black rounded-full dark:bg-gray-600 dark:border-dark-gray-300">
                  <span class="font-medium text-gray-600 dark:text-gray-300">
                    R
                  </span>
                </div>
                <h3 className="text-lg font-medium">Rohit</h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border hover:bg-orange-300">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review Text */}
              <div>
                <p className="mb-5 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero est adipisci impedit doloremque eius provident,
                  repudiandae id hic, repellat, perferendis dolore eum quas
                  necessitatibus natus velit. Praesentium maiores earum dolorum!
                </p>

                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 border border-black rounded-full dark:bg-gray-600 dark:border-dark-gray-300">
                  <span class="font-medium text-gray-600 dark:text-gray-300">
                    T
                  </span>
                </div>
                <h3 className="text-lg font-medium">Tejas</h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border hover:bg-orange-300">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review Text */}
              <div>
                <p className="mb-5 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero est adipisci impedit doloremque eius provident,
                  repudiandae id hic, repellat, perferendis dolore eum quas
                  necessitatibus natus velit. Praesentium maiores earum dolorum!
                </p>

                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 border border-black rounded-full dark:bg-gray-600 dark:border-dark-gray-300">
                  <span class="font-medium text-gray-600 dark:text-gray-300">
                    S
                  </span>
                </div>
                <h3 className="text-lg font-medium">Sagar</h3>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border hover:bg-orange-300">
            <div className="space-y-6">
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Review Text */}
              <div>
                <p className="mb-5 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Libero est adipisci impedit doloremque eius provident,
                  repudiandae id hic, repellat, perferendis dolore eum quas
                  necessitatibus natus velit. Praesentium maiores earum dolorum!
                </p>

                <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 border border-black rounded-full dark:bg-gray-600 dark:border-dark-gray-300">
                  <span class="font-medium text-gray-600 dark:text-gray-300">
                    S
                  </span>
                </div>
                <h3 className="text-lg font-medium">Sagar</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
