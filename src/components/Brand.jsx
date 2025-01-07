// import React from "react";
// import { Fade } from "react-awesome-reveal";
// import { Tooltip as ReactTooltip } from "react-tooltip";
// const TopBrands = () => {
//     const brands = [
//         {
//             id: 1,
//             name: "Nike",
//             logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
//         },
//         {
//             id: 2,
//             name: "Adidas",
//             logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
//         },
//         {
//             id: 3,
//             name: "Puma",
//             logo: "https://www.streetworld.com/_next/image?url=https%3A%2F%2Fmetastore-storyblok.imgix.net%2F750x750%2Fbe287f9f97%2Fpuma_logo.jpg%3Fauto%3Dformat%26px%3D0%26htn%3D0&w=3840&q=100",
//         },
//         {
//             id: 4,
//             name: "Under Armour",
//             logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9A_rXcx7QdpLfauELJPvtiQPt3NF0OeOCA&s",
//         },
//         {
//             id: 5,
//             name: "Reebok",
//             logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0uqbnLKY7Q6m1Zya7dsMbH7rZkTzdSiZ5A&s",
//         },
//         {
//             id: 6,
//             name: "Asics",
//             logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Asics_Logo.svg/2560px-Asics_Logo.svg.png",
//         },
//     ];

//     return (
//         <div className="brands-section px-4 py-8 ">
//             <h2 className="text-2xl font-bold text-center mb-6"><Fade>Top Sports Brands</Fade></h2>
//             <div className="brands-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//                 {brands.map((brand) => (
//                     <div
//                         key={brand.id}
//                         data-tooltip-content={brand.name}
//                         data-tooltip-id={`brand-tooltip-${brand.id}`}
//                         className="brand-card bg-white border shadow-md rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition"
//                     >
//                         <Fade>

//                         <img
//                             src={brand.logo}
//                             alt={`${brand.name} logo`}
//                             className="max-w-full h-auto object-contain"
//                             />
//                             </Fade>
//                         <ReactTooltip id={`brand-tooltip-${brand.id}`} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default TopBrands;



import React from "react";
import { Fade } from "react-awesome-reveal";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Title from "./Title";

const TopBrands = () => {
    const brands = [
        {
            id: 1,
            name: "Nike",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
        },
        {
            id: 2,
            name: "Adidas",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
        },
        {
            id: 3,
            name: "Puma",
            logo: "https://www.streetworld.com/_next/image?url=https%3A%2F%2Fmetastore-storyblok.imgix.net%2F750x750%2Fbe287f9f97%2Fpuma_logo.jpg%3Fauto%3Dformat%26px%3D0%26htn%3D0&w=3840&q=100",
        },
        {
            id: 4,
            name: "Under Armour",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9A_rXcx7QdpLfauELJPvtiQPt3NF0OeOCA&s",
        },
        {
            id: 5,
            name: "Reebok",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0uqbnLKY7Q6m1Zya7dsMbH7rZkTzdSiZ5A&s",
        },
        {
            id: 6,
            name: "Asics",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Asics_Logo.svg/2560px-Asics_Logo.svg.png",
        },
        {
            id: 7,
            name: "New Balance",
            logo: "https://www.newbalance.com.sa/assets/NewBalance/WS327V1-45756/WS327GD_2.jpg",
        },
        {
            id: 8,
            name: "Fila",
            logo: "https://m.media-amazon.com/images/I/21sa-qX+2ZL._AC_.jpg",
        },
        {
            id: 9,
            name: "Fila",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpd2j-L04Y6575WRrzA8tJoteAZRJfw1Fb-Q&s",
        },
        {
            id: 10,
            name: "The North Face",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroUplURKVyIC9wwdXXIxvUMMIjbU4hOi25w&s",
        },
        {
            id: 11,
            name: "Mizuno",
            logo: "https://m.media-amazon.com/images/I/41jMhEAGRpL._AC_SY900_.jpg",
        },
        {
            id: 12,
            name: "Champion",
            logo: "https://m.media-amazon.com/images/I/31mBgoG-bUL._AC_.jpg",
        },
        {
            id: 13,
            name: "Wilson",
            logo: "https://m.media-amazon.com/images/I/61YjXFgrywL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id: 14,
            name: "Salomon",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9ySgfgh2MzRTgNwe4Rf3Q0StBm6hZ4KJNBg&s",
        },
        {
            id: 15,
            name: "Yonex",
            logo: "https://m.media-amazon.com/images/I/91Lu9brnTNL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id: 16,
            name: "Diadora",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6HJkv4gMlLRc-7x75-8o6j_3AkKt0xOIPeQ&s",
        },
        {
            id: 17,
            name: "Hoka One One",
            logo: "https://m.media-amazon.com/images/I/419MF0xrAcL._AC_SY900_.jpg",
        },
        {
            id: 18,
            name: "Brooks",
            logo: "https://m.media-amazon.com/images/I/81C6pdykxDL._AC_SL1500_.jpg",
        },
    ];

       
    return (
        <div className="brands-section px-4 py-8">
            <Title title="Top Sports Brands" />
           <div className="hidden lg:flex">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={6}
                    navigation
                    loop={true}
                    pagination={{ clickable: true }}
                    className="brand-swiper "
                >
                    {brands.reverse().map((brand) => (
                        <SwiperSlide key={brand.id}>
                            <div
                                data-aos="zoom-in-up"
                                title={brand.id}
                                data-tooltip-content={brand.name}
                                data-tooltip-id={`brand-tooltip-${brand.id}`}
                                className="brand-card bg-white border shadow-md rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition"
                            >
                                <Fade>
                                    <img
                                        src={brand.logo}
                                        alt={`${brand.name} logo`}
                                        className="max-w-full h-[200px] object-contain"
                                    />
                                </Fade>
                                <ReactTooltip id={`brand-tooltip-${brand.id}`} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
           </div>

           <div className="flex justify-center items-center flex-wrap lg:hidden gap-2 ">
                {brands.reverse().map((brand) => (
                        <div
                        data-aos="zoom-in-up"
                            title={brand.id}
                            data-tooltip-content={brand.name}
                            data-tooltip-id={`brand-tooltip-${brand.id}`}
                            className="brand-card bg-white border shadow-md rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition w-full h-[200px] md:w-[45%]  "
                        >
                            <Fade>
                                <img
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className="max-w-full h-[200px] object-contain"
                                />
                            </Fade>
                            <ReactTooltip id={`brand-tooltip-${brand.id}`} />
                        </div>
                   
                ))}
           </div>
        </div>
    );
};

export default TopBrands;
