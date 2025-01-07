import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { ThemeContext } from "./ThemeProvider";
import Title from "./components/Title";

const UpcomingEvents = () => {
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);
   
    const events = [
        {
            id: 1,
            name: "City Marathon 2024",
            date: "March 10, 2024",
            description: "Join us for the annual city marathon and run for a cause!",
        },
        {
            id: 2,
            name: "National Soccer Tournament",
            date: "April 15-20, 2024",
            description: "The best teams compete for the national championship.",
        },
        {
            id: 3,
            name: "Summer Tennis Open",
            date: "June 5-10, 2024",
            description: "Experience thrilling tennis matches with top players.",
        },
        {
            id: 4,
            name: "Regional Basketball League",
            date: "July 20 - August 10, 2024",
            description: "Watch exciting matches as teams vie for the title.",
        },
    ];

    return (
        <div className="events-section px-4 py-8">
            <Title title="Upcoming Sports Events"/>
            <Fade>
                <div className="event-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map((event) => (
                        <div
                            data-aos="zoom-in-down"
                            data-tooltip-content={event.name}
                            data-tooltip-id={`event-tooltip-${event.id}`} 
                            key={event.id}
                            className={`${isDarkMode ? "event-card  bg-white text-black border shadow-lg rounded-lg p-4 hover:shadow-lg transition" : "event-card bg-white border shadow-lg rounded-lg p-4 hover:shadow-lg transition"}`}
                        >
                            <Fade>
                                <h4 className="text-lg font-bold mb-2">{event.name}</h4>
                            </Fade>
                            <Fade>
                                <p className="text-gray-600 text-sm mb-2">{event.date}</p>
                            </Fade>
                            <Fade>
                                <p className="text-gray-700 mb-4">{event.description}</p>
                            </Fade>
                            <Fade>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                                    Learn More
                                </button>
                            </Fade>
                            <ReactTooltip id={`event-tooltip-${event.id}`} />
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    );
};

export default UpcomingEvents;
