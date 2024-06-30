import React from 'react';
import { IoLogoWhatsapp, IoLogoFacebook, IoLogoInstagram } from 'react-icons/io';
import Navbar from './Navbar';
import Footer from './Footer';
import Map from './Map';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ContactUs() {
    return (
        <div className="contact-container">
          <Helmet>
      <title>Contact Us | Mt Suswa</title>
      <meta name="description" content="Get in touch with Mt Suswa hikeNcamp. We are here to help you with any inquiries or support you may need." />
      <meta name="keywords" content="Contact Mt Suswa hikeNcamp, inquiries, support, help, Mt Suswa, Suswa" />
    </Helmet>
            <Navbar />
            <h1 className="text-5xl text-center my-10">Contact Us</h1>
            <div className="location">
                <p className="text-xl text-center">We're located just a few kilometers off the Nairobi - Narok Highway and also the Suswa SGR station.</p>
                <p className="text-xl text-center">Suswa</p>
                <p className="text-xl text-center">41842 00100 Nairobi, Kenya</p>
                <Map />
            </div>
            <div className="phone-numbers mt-10">
                <h1 className="text-5xl ml-10">Ready to make a booking?</h1><br />
                <Link to="/Booking">
                <button class="cta">
  <span className="hover-underline-animation"> Book Now </span>
  <svg
    id="arrow-horizontal"
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="10"
    viewBox="0 0 46 16"
  >
    <path
      id="Path_10"
      data-name="Path 10"
      d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
      transform="translate(30)"
    ></path>
  </svg>
</button></Link>

            </div>  <br />
            <h2 className="text-4xl ml-14">Connect With Us</h2>
            <div className="social-media text-3xl ml-20 mt-5 flex justify-content-center">
                <a href="https://api.whatsapp.com/send?phone=254700148521&text=Hello%20David...." target="_blank" rel="noreferrer"><IoLogoWhatsapp className="" /></a>
                <a href="https://web.facebook.com/profile.php?id=100083171139623" target="_blank" rel="noreferrer"><IoLogoFacebook className="" /></a>
                <a href="https://www.instagram.com/Mtsuswagetaway" target="_blank" rel="noreferrer"><IoLogoInstagram className="" /></a><br />
                </div>
                <div>
                <h3 className='ml-10 text-3xl'>For inquiries :</h3><br />
                <p className='ml-10 text-2xl'>&#10148; inquiries@mountsuswahikencamp.com</p>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUs;
