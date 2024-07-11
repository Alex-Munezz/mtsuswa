import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';

const FloatingButton = () => {
  return (
    <div className="fixed bottom-4 right-4">
      <button className="bg-green-600 hover:bg-white-700 text-white font-bold py-6 px-6 rounded-full shadow-lg">
      <a href="https://api.whatsapp.com/send?phone=254700148521&text=Hello%20David...." target="_blank" rel="noreferrer"><IoLogoWhatsapp className="" /></a>
      </button>
    </div>
  );
}

export default FloatingButton;
