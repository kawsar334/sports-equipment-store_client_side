import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import Products from '../components/producs/Products';
import HomeContents from '../components/childrenComponents/HomeContents';
import SportsCategories from '../components/SportsCategories';
import ReviewsSection from '../components/Reviews';
import About from '../components/About';
import TopBrands from '../components/Brand';
import UpcomingEvents from '../Upcomming';
import LottieExample from '../components/Sidebar';
import Services from '../components/Services';

const Home = () => {
      const [loading, setLoading] = useState(true);

    return (
        <div className="min-h-screen flex flex-col">
            <Hero />
            {!loading &&<Services/>}
            <Products loading={loading} setLoading={setLoading} />
            <SportsCategories />
            <TopBrands />
            <ReviewsSection />
            <UpcomingEvents />           
            <About />
        </div>
    );
};

export default Home;
