import React from "react";
import { Fade } from "react-awesome-reveal";
import { Tooltip as ReactTooltip } from "react-tooltip";
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
    ];

    return (
        <div className="brands-section px-4 py-8 ">
            <h2 className="text-2xl font-bold text-center mb-6"><Fade>Top Sports Brands</Fade></h2>
            <div className="brands-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {brands.map((brand) => (
                    <div
                        key={brand.id}
                        data-tooltip-content={brand.name}
                        data-tooltip-id={`brand-tooltip-${brand.id}`}
                        className="brand-card bg-white border shadow-md rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition"
                    >
                        <Fade>

                        <img
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            className="max-w-full h-auto object-contain"
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
