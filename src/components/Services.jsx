import React from 'react';

const Services = () => {
    const features = [
        {
            title: "Free Delivery",
            description: "We'll even bring it into your home for free*.",
            icon: "fa-truck"
        },
        {
            title: "Special Financing",
            description: "Up to 24 Months. Apply for an Appliances Connection.",
            icon: "fa-credit-card"
        },
        {
            title: "30 Day Returns",
            description: "Return your items for free* within 30 Days of purchase.",
            icon: "fa-undo-alt"
        },
        {
            title: "Rewards Program",
            description: "Join our loyalty program and earn money by shopping with us.",
            icon: "fa-gift"
        },
        {
            title: "Trade Program",
            description: "We offer exclusive pricing and resources to registered.",
            icon: "fa-handshake"
        }
    ];

    return (
        <div className="py-10 px-5 ">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid  md:grid-cols-2 lg:grid-cols-5">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-white border border-blue p-4   hover:shadow-lg transition-shadow"
                    >
                        {/* Icon */}
                        <div className="text-blue text-4xl mr-4">
                            <i className={`fas ${feature.icon}`}></i>
                        </div>
                        {/* Title and Description */}
                        <div>
                            <h3 className="text-xl font-semibold text-[14px]">{feature.title}</h3>
                            <p className="text-gray-600 text-[13px]">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
