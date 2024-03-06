import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import gallery1 from '../images/gallery1.jpeg';
import gallery2 from '../images/gallery2.jpeg';
import gallery3 from '../images/gallery3.jpeg';
import gallery4 from '../images/gallery4.jpeg';
import gallery5 from '../images/gallery5.jpeg';
import gallery6 from '../images/gallery6.jpeg';
import gallery7 from '../images/gallery7.jpeg';
import gallery8 from '../images/gallery8.jpeg';
import gallery9 from '../images/gallery9.jpeg';
import gallery10 from '../images/gallery10.jpeg';
import gallery11 from '../images/gallery11.jpeg';
import gallery12 from '../images/gallery12.jpeg';
import gallery13 from '../images/Camping1.jpeg';
import gallery14 from '../images/Camping2.jpeg';
import gallery15 from '../images/Camping3.jpeg';
import gallery16 from '../images/gallery13.jpeg';
import gallery17 from '../images/gallery14.jpeg';
import gallery18 from '../images/gallery15.jpeg';
import camping from '../images/Cave.webp';
import camping2 from '../images/maasai.jpeg';
import camping3 from '../images/Hiking.webp';

function Gallery() {
    return (
        <div>
            <Navbar />
            
            <h2 className="mt-10 text-4xl text-center">Take a look at our recent photos :</h2>
            <div className="flex flex-wrap justify-center items-center mt-10">
                <img src={gallery1} alt="Gallery" className="w-40 h-40 md:w-60 md:h-40 rounded-lg m-2" />
                <img src={gallery2} alt="Gallery" className="w-60 h-40 md:w-80 md:h-60 rounded-lg m-2" />
                <img src={gallery3} alt="Gallery" className="w-60 h-40 md:w-80 md:h-60 rounded-lg m-2" />
                <img src={gallery4} alt="Gallery" className="w-50 h-40 md:w-80 md:h-60 rounded-lg m-2" />
                <img src={gallery5} alt="Gallery" className="w-50 h-40 md:w-80 md:h-60 rounded-lg m-2" />
                <img src={gallery6} alt="Gallery" className="w-50 h-35 md:w-80 md:h-50 rounded-lg m-2" />
                <img src={gallery7} alt="Gallery" className="w-50 h-50 md:w-80 md:h-60 rounded-lg m-2" />
                <img src={gallery8} alt="Gallery" className="w-50 h-50 md:w-80 md:h-60 rounded-lg m-2" />
                <img src={gallery9} alt="Gallery" className="w-40 h-40 md:w-60 md:h-60 rounded-lg m-2" />
                <img src={gallery10} alt="Gallery" className="w-50 h-50 md:w-80 md:h-60 rounded-lg m-2" />
                <img src={gallery11} alt="Gallery" className="w-50 h-50 md:w-80 md:h-60 rounded-lg m-2" />
                <img src={gallery12} alt="Gallery" className="w-30 h-50 md:w-60 md:h-60 rounded-lg m-2" />
                <img src={gallery13} alt="Gallery" className="w-50 h-50 md:w-80 md:h-60 rounded-lg m-2" />
                <img src={gallery14} alt="Gallery" className="w-50 h-40 md:w-80 md:h-60 rounded-lg m-2" />
                <img src={gallery15} alt="Gallery" className="w-50 h-50 md:w-80 md:h-60 rounded-lg m-2" />
                <img src={gallery16} alt="Gallery" className="w-50 h-30 md:w-80 md:h-50 rounded-lg m-2" />
                <img src={gallery17} alt="Gallery" className="w-50 h-30 md:w-80 md:h-50 rounded-lg m-2" />
                <img src={gallery18} alt="Gallery" className="w-50 h-30 md:w-80 md:h-50 rounded-lg m-2" />
                <img src={camping} alt="Gallery" className="w-50 h-35 md:w-80 md:h-50 rounded-lg m-2" />
                <img src={camping2} alt="Gallery" className="w-40 h-45 md:w-60 md:h-60 rounded-lg m-2" />
                <img src={camping3} alt="Gallery" className="w-50 h-40 md:w-80 md:h-60 rounded-lg m-2" />
            </div><br />
            <Footer/>
        </div>
    )
}
export default Gallery;
