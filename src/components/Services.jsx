import React, { useEffect } from 'react';
import Title from './Title';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 800 }); // Initialize AOS with a duration of 800ms
    }, []);

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
            <Title title="Our Services"/>
            <div className="grid  md:grid-cols-2 lg:grid-cols-5">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center bg-white border border-blue p-4   hover:shadow-lg transition-shadow"
                        data-aos={`${index % 2 === 0 ? "zoom-in-up" :"zoom-in-up"}`}
                    >
                        <div className="text-blue text-4xl mr-4">
                            <i className={`fas ${feature.icon}`}></i>
                        </div>
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
