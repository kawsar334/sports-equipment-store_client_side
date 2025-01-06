

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fade } from "react-awesome-reveal";



export const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [equipmentList, setEquipmentList] = useState([]);

  useEffect(() => {

    const fetchEquipment = async () => {
      try {
        const response = await fetch("https://server-with-auth.vercel.app/products");
        const data = await response.json();
        setEquipmentList(data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching equipment data:", error);
      }
    };

    fetchEquipment();
  }, []);

  return (
    <div className="overflow-hidden ">
      <div className="w-[100%] mx-auto  overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {equipmentList?.map((slide, index) => (
            <SwiperSlide key={index}>
              <Fade>

                <div
                  className="relative w-full mx-auto h-[450px] bg-gray-200 "

                >
                  <img
                    src={slide?.image}
                    alt={slide?.itemName}
                    className="w-full h-[450px] object-cover "
                  />
                  <div
                    className=" absolute inset-0 flex items-start justify-start bg-black bg-opacity-40 p-4 "

                  >
                    <div className="text-center text-white  p-5  w-[70%] m-auto flex justify-start items-center flex-col">
                      <h2
                        className="font-semibold mb-2 text-4xl "
                        data-aos="fade-right"
                      >
                        {slide?.itemName}
                      </h2>
                      <p
                        className="text-wrap w-full md:w-[70%]  box-border p-4 text-white break-words text-center"

                      >
                        {slide?.description}

                      </p>


                      <p className="mt-4" >
                        <a
                          href="#product"
                          className="bg-blue  px-4 py-2 rounded-full text-blue-600"
                        >
                          see more
                        </a>
                      </p>
                    </div>
                  </div>


                </div>
              </Fade>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

