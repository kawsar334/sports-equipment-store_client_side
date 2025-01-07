import React from "react";
import { Fade } from "react-awesome-reveal";
import Title from "./Title";
const ReviewsSection = () => {
   
    const reviews = [
        { id: 1, name: "John Doe", review: "Great products and amazing quality!", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo_R_vlnUz9UhylMPCccagw4dMqhbs4UMPAA&s" },
        { id: 2, name: "Jane Smith", review: "Quick delivery and fantastic support.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmiSLu10WOLqzqjpfqKHX1Zd3HU2BtbqySAw&s" },
        { id: 3, name: "Sam Wilson", review: "Highly recommend for all sports needs!", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIg1Fl8TDqml1PBGhA3tXxH4nmeIdxwZbJ3w&s" },
    ];

    return (
        <section className="my-10 w-[90%]  mx-auto p-5">
            <Title title="What Our Customers Say"/>
            <div className="flex justify-center items-center flex-wrap flex-col md:flex-row gap-8">
                {reviews.map((review) => (
                    <div key={review.id} className="card bg-base-100 shadow-xl p-4 relative   w-[300px]"
                        data-aos="zoom-in-down"
                    >
                        <img src={review?.img} alt=""  className="absolute w-[80px] h-[80px]  border-[2px] border-blue  rounded-full object-cover top-[-10px] left-[-20px]"/>
                        <div className="w-[80%] mr-4 m-auto text-end  flex justify-center items-center flex-col">
                        <p className="mt-2 text-gray-600"><Fade>{review.review}</Fade></p>
                        <h3 className="text-lg font-bold"><Fade>{review.name}</Fade></h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ReviewsSection;
