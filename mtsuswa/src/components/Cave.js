import CaveImg from '../images/Cave.webp';
import Camping from '../images/Camping1.jpeg';
import HikingImg from '../images/Hiking.webp';
import Maasai from '../images/gallery1.jpeg';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


export default function Hiking(){
    const navigate = useNavigate()
    const book = () => {
        window.open("https://api.whatsapp.com/send?phone=254700148521&text=Hello%20David....", '_blank');
    };
    const toCamping = () => {
        window.scrollTo(0, 0);
      navigate('/Services/Camping');
      };
      const toHiking = () => {
        window.scrollTo(0, 0);
        navigate('/Services/Hiking');
      };
      const toMaasai = () => {
        window.scrollTo(0, 0);
        navigate('/Services/Maasai');
      };

    return (
        <div>
            <Navbar />
            <br /><br />
      <h1 className="text-5xl flex justify-center mt-10 caveh1">| Services  &#10148;  Cave Exploration</h1>
     <br /><br /><br />
     <div className='hike'>
     <img src={CaveImg} alt="cave" className='caveimg'/><br /><br />
     <p className='text-2xl ml-5 hikingP'>Embark on a journey into the heart of the Earth with cave exploration. <br />
        Discover hidden wonders in the depths as you navigate through twisting 
        passages <br />and marvel at ancient formations. Let the darkness unveil its 
        secrets, and immerse <br />yourself in the raw beauty of the underground world. <br />
        Explore, wonder, and unearth the mysteries that lie beneath the surface.</p>
          <br /><br />
          <button onClick={book} type="button" class="hbtn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg class="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg>
Book Now
</button>
</div><br /><br /><br />
<h2 className='text-4xl flex justify-center'>Other Services :</h2>
<div className="lg:grid grid-cols-3 xl:grid-cols-3 p-40 ml-24 othersrvs">
<div class="hover:translate-y-[-15px] transition-transform ease-in-out relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<img src={Camping} alt='camping' className='h-30' />
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Camping
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Escape into the wild embrace of camping, where each moment is
         a new adventure under the open sky. Find solace in nature's symphony and rejuvenate 
        your spirit amidst towering trees and starlit nights. Campf ......
    </p>
  </div>
  <div class="p-6 pt-0">
    <button onClick={toCamping} data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Read More
    </button>
  </div>
</div>
<div class="hover:translate-y-[-15px] transition-transform ease-in-out relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
<img src={HikingImg} alt='hiking' className='h' />
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     Hiking
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
    Embark on a journey of exploration and adventure with our
          premier hiking services.
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
<img src={Maasai} alt='maasai' className='maasaiimg' />
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
</div>
<br /><br /><br />
<Footer />
        </div>
    )
}