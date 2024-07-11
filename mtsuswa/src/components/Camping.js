import camping from '../images/Camping1.jpeg';
import Navbar from './Navbar';
import Cave from '../images/gallery11.jpeg';
import Maasai from '../images/gallery1.jpeg';
import Hiking from '../images/Hiking.webp';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import Floating from './Floating';

export default function Camping(){
    const navigate = useNavigate()
    const bookHiking = () => {
      window.scrollTo(0, 0);
      navigate('/Booking');
    };
    const toHiking = () => {
        window.scrollTo(0, 0);
      navigate('/Services/Hiking');
      };
      const toCave = () => {
        window.scrollTo(0, 0);
        navigate('/Services/Cave');
      };
      const toMaasai = () => {
        window.scrollTo(0, 0);
        navigate('/Services/Maasai');
      };
    
    return (
        <div>
            <Navbar />
            <br /><br />
      <h1 className="text-3xl flex justify-center mt-10">| Services  &#10148;  Camping</h1>
     <br /><br /><br />
     <div className='camping'>
     <img src={camping} alt="camping" className='campingimg'/><br /><br />
     <p className='text-2xl ml-5 campingP'>Escape into the wild embrace of camping, where each moment is a new adventure under the open sky. <br />
        Find solace in nature's symphony and rejuvenate your spirit amidst 
        towering trees and starlit nights.<br /> Campfires, stories, and boundless horizons await –
         embrace the simplicity, the beauty, <br />and the boundless possibilities of camping.</p>
          <br /><br />
          <button onClick={bookHiking} type="button" class="hbtn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg>
Book Now
</button>
</div><br /><br /><br />
<h2 className='text-4xl flex justify-center'>Other Services :</h2><br />
<div className="lg:grid grid-cols-3 xl:grid-cols-3 ml-1 othersrvs">
<div class="hover:translate-y-[-15px] transition-transform ease-in-out relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<img src={Hiking} alt='camping' className='h' />
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Hiking
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Embark on a journey of exploration and adventure with our premier hiking services.
           At Mt Suswa Camping, we're dedicated to providing you with unforgettable hiking ......
    </p>
  </div>
  <div class="p-6 pt-0">
    <button onClick={toHiking} data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>
<div class="hover:translate-y-[-15px] transition-transform ease-in-out relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<img src={Cave} alt='camping' className='cvimg' />
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Cave exploration
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
   Embark on a journey into the 
        heart of the Earth with cave exploration. Discover hidden wonders in the depths as you 
        navigate through twisting passages and marvel at ancient formations. Let the .....
    </p>
  </div>
  <div class="p-6 pt-0">
    <button onClick={toCave} data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>
<div class="hover:translate-y-[-15px] transition-transform ease-in-out relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<img src={Maasai} alt='camping' className='maasaiimg' />
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Vibrant Maasai Culture
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Discover the Maasai Culture: Tradition and Harmony.
        Enter the world of the Maasai, where tradition dances 
        with nature. Nomads of the savannah, they honor their legacy 
        through vibrant rituals and colorful beadwork. In ....
    </p>
  </div>
  <div class="p-6 pt-0">
    <button onClick={toMaasai} data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>
</div>    <Floating />

<br /><br /><br />
<Footer />
        </div>
    )
}