import React from "react";
import { Fade } from "react-awesome-reveal";
import Title from "./Title";
const AboutUs = () => {

    
    const teamMembers = [
        {
            id: 1,
            name: "John Doe",
            role: "CEO",
            description: "Leading the vision and strategy of the company.",
            image: "https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg",
        },
        {
            id: 2,
            name: "Jane Smith",
            role: "CTO",
            description: "Driving technological innovation and solutions.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LRk5HqAi5I7RKsDH_-hL3KJxrNPHEQGGYg&s",
        },
        {
            id: 3,
            name: "Emily Johnson",
            role: "Marketing Head",
            description: "Building brand awareness and customer connections.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&s",
        },
        {
            id: 4,
            name: "Michael Brown",
            role: "Product Manager",
            description: "Ensuring product quality and user satisfaction.",
            image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxJTG3cbmWuALePUXlmcymjymtOG1x2TvwEwjfyR8Gvsz9VpaR",
        },
        {
            id: 5,
            name: "Sarah Wilson",
            role: "Design Lead",
            description: "Creating visually stunning user experiences.",
            image: "https://t3.ftcdn.net/jpg/01/73/77/00/360_F_173770068_LRQyNUZQn9WtQyJoJsOEwK8qwBzypBm0.jpg",
        },
        {
            id: 6,
            name: "David Lee",
            role: "Software Engineer",
            description: "Developing and maintaining our platform.",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpF3IRjq3K2vF74PNI4mpc-kzYwXmegSupg&s",
        },
    ];

    return (
        <div className="  py-10">
            <div className="container mx-auto">
                <Title title="About Us"/>
                <p className="text-center mb-10 " data-aos="zoom-in-up">
                    <Fade> Meet our team of professionals who are passionate about sports and technology.</Fade>
                </p>
                <div
                 data-aos="zoom-in-down"
                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member) => (
                        <div key={member.id} className="card bg-[white]  shadow-md p-5 text-center">
                            <Fade>

                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-[140px] h-[140px] mx-auto rounded-full mb-4  object-cover"
                                />
                                </Fade>
                                <Fade>

                            <h3 className="text-xl font-semibold">{member.name}</h3>
                                </Fade>
                                <Fade>
                            <p className="text-gray-500">{member.role}</p>
                                </Fade>
                                <Fade>
                            <p className="mt-3 text-gray-700">{member.description}</p>
                                </Fade>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
