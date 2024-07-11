import Navbar from './Navbar';
import Camping6 from "../images/Camping6.webp";
import Camping7 from "../images/Camping7.webp";
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Floating from './Floating';

function About() {
    const navigate = useNavigate()

    const redirectToWhatsApp = () => {
        window.scrollTo(0, 0);
        navigate('/Booking');
    };

    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        window.onscroll = function() {
            scrollFunction();
        };
    }, []);

    const scrollFunction = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    const scrollToTop = () => {
        const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        if (scrollTop > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, scrollTop - scrollTop / 30);
        }
    };

    return (
        <div>
                <Helmet>
      <title>About Us | Mt Suswa</title>
      <meta name="description" content="Learn more about Mt Suswa hikeNcamp, our mission, values, and the team behind our success." />
      <meta name="keywords" content="About MT Suswa hikeNcamp, mission, values, Mt Suswa" />
    </Helmet>
            <Navbar />
            <br /><br /><br />
            <h1 className='text-5xl flex items-center justify-center'>| About Us</h1>
            <br /><br /><br /><p className="text-2xl ml-20 aboutP">
                &#8702; Welcome to Mt Suswa Camping, where adventure meets serenity!
                At Mt Suswa Camping, we believe that the best memories are made
                outdoors. <br />Founded by a group of passionate outdoor enthusiasts, we are dedicated to providing you with the ultimate camping experience.
                <br />Whether you're a seasoned adventurer or a first-time camper, we've got you covered.
            </p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="flex items-center justify-center">
                <img src={Camping6} alt="Camping" className="w-1/2 h-auto ml-20 missionImg" />
                <div className="ml-6">
                    <h1 className="text-3xl font-bold mb-4 mission">Our Mission</h1>
                    <p className="text-lg">Our mission is simple: to inspire and empower people to connect with nature and discover the beauty of the great outdoors.
                        We strive to create unforgettable experiences that foster a deep appreciation for our natural world.</p>
                </div>
            </div>
            <br /><br /><br />
            <h3 className="text-3xl ml-20 font-bold">What We Offer</h3> <br /> <br />
            <h4 className="text-xl ml-24 font-bold">&#10102; Quality Gear</h4> 
            <p className="text-lg ml-24">&#9758; We offer a curated selection of top-quality camping gear and equipment to ensure your outdoor adventures are safe,
                comfortable, and enjoyable.</p> <br />
            <h4 className="text-xl ml-24 font-bold">&#10103; Expert Advice:</h4>
            <p className="text-lg ml-24">&#9758; Our team of experienced outdoor enthusiasts is here to help you every step of the way. From choosing the perfect campsite to mastering outdoor cooking techniques,
                we're committed to sharing our knowledge and expertise with you.</p> <br />
            <h5 className="text-xl ml-24 font-bold">&#10104; Community:</h5>
            <p className="text-lg ml-24 ">&#9758; Join our vibrant community of like-minded adventurers! Share stories, tips, and photos from your outdoor escapades, and connect with fellow nature lovers from around the globe.</p> <br /> <br />
            <h6 className="text-2xl ml-24 font-bold">Why Choose Us?</h6> <br /> <br />
            <h7 className="text-xl ml-24 font-bold">&#9745; Passion:</h7>
            <p className="text-lg ml-24">&diams; We're not just another camping site — we're passionate about what we do. Our love for the outdoors drives everything we do,
                from selecting the best gear to providing exceptional customer service.</p> <br />
            <h8 className="text-xl ml-24 font-bold">&#9745; Commitment to Sustainability: </h8>
            <p className="text-lg ml-24">&diams; We're committed to protecting the environment and preserving the natural beauty of our planet. That's why we partner with eco-conscious
                brands and support initiatives that promote sustainability in outdoor recreation.</p> <br />
            <h8 className="text-xl ml-24 font-bold">&#9745; Customer Satisfaction:</h8>
            <p className="text-lg ml-24">&diams; Your satisfaction is our top priority. We're dedicated to providing you with a seamless camping experience and
                personalized support to ensure your outdoor adventures are unforgettable.</p>
            <br />
            <br />
            <br />
            <br />
            <div className="flex items-center justify-center">
                <img src={Camping7} alt="Camping" className="w-1/2 h-auto ml-20 journeyImg" />
                <div className="ml-6">
                    <h8 className="text-3xl font-bold mb-4 journeyh">Join Us on the Journey</h8>
                    <p className="text-lg journeyp">Whether you're embarking on a weekend getaway or a backcountry expedition, Mt Suswa Camping
                        is your trusted companion for all things outdoor.
                        Join us on the journey, and let's explore the wonders of nature together!</p> <br />
                    <div className="button3">
                        <button onClick={redirectToWhatsApp} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Now</button>
                    </div>
                </div>
            </div>
            {showScrollButton && (
                <button id="scrollToTopButton" onClick={scrollToTop} title="Go to top" className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full">
                    <span className="arrow-up">&#8593;</span>
                </button>
            )}    <Floating />

            <br /> <br /> <br /> <br /> <br />
            <Footer />
        </div>
    )
}
export default About;
