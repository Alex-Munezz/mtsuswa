import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import HomeImg from '../images/Camping3.jpeg';
import Camping1 from '../images/Camping1.jpeg';
import Camping2 from '../images/Camping2.jpeg';
import Camping3 from '../images/Camping3.jpeg';
import Hiking from '../images/Hiking.webp';
import Cave from '../images/Cave.webp';
import Maasai from '../images/gallery3.jpeg';
import Footer from './Footer';
import { Helmet } from 'react-helmet';

 function Home(){
    const navigate = useNavigate();
    const handleClick = () => {
        window.scrollTo(0, 0);
        navigate('/About');
      };

    return(
    <div className="home">
       <Helmet>
      <title>Home | Mt Suswa</title>
      <meta name="description" content="Welcome to Mt Suswa hikeNcamp. We offer the best services and products in the hiking and camping industry. Learn more about what we can do for you." />
      <meta name="keywords" content="Mt Suswa, hiking, caves, camping, maasai, maasai culture, suswa, baboon parliament, steam vents" />
    </Helmet>
        <Navbar />
        <img src={HomeImg} alt="home" className='homeImg' />
        <div className="text">
        <h1 className='WelcomeText'>Welcome to Mount Suswa hikeNcamp &#129095; </h1>
        </div>  <br /><br /><br />
        <h1 className="text-5xl flex items-center justify-center">| About Us</h1><br /><br /><br />  
        <br />

    <div className='lg:grid grid-cols-2 xl:grid-cols-3'>
    <img src={Camping1} alt="camping1" className='aboutImg hover:translate-y-[-15px] transition-transform ease-in-out'/>
    <img src={Camping2} alt="camping1" className='aboutImg hover:translate-y-[-15px] transition-transform ease-in-out'/>
    <img src={Camping3} alt="camping1" className='aboutImg hover:translate-y-[-15px] transition-transform ease-in-out'/>
    </div>
    <br/><br/>
    <p className="aboutp float-center ml-24 text-2xl ">
        Mt. Suswa Camping, where adventure meets serenity!
        Here we believe that the best memories are made outdoors.
        We are dedicated to providing you with the ultimate camping experience.
        Whether you're a seasoned adventurer or a first-time camper,
        we've got you covered.
    </p>
    <div className="w-full h-40 flex items-center justify-center cursor-pointer">
  <div
    className="aboutbtn relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group"
  >
    <span
      className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"
    ></span>
    <span
      className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        class="w-5 h-5 text-green-400"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeWidth="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke="currentColor"
        fill="none"
        class="w-5 h-5 text-green-400"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
    </span>
    <span
      onClick={handleClick} className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200"
      >More About Us</span
    >
  </div>
  </div>
  <div className="services-container">
   <h2 className="services-title text-4xl flex items-center justify-center">&#8212;&#8212; Discover our Services</h2>
    <br /><br />
               <div className="lg:grid grid-cols-2 xl:grid-cols-4 services">
   <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:translate-y-[-15px] transition-transform ease-in-out">
    <a href="/Services/Hiking">
        <img class="rounded-t-lg" src={Hiking} alt="" />
    </a>
    <div class="p-5">
        <a href="/Services/Hiking">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Hiking</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Embark on a journey of exploration 
          and adventure with our premier hiking services. At Mt Suswa Camping, we're dedicated to providing 
        you with unforgettable hiking .......</p>
        <br /><br />
    </div>
</div>
<div class="hover:translate-y-[-15px] transition-transform ease-in-out max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="Services/Camping">
        <img className="rounded-t-lg" src={Camping2} alt="" />
    </a>
    <div class="p-5">
        <a href="Services/Camping">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Camping</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Escape into the wild embrace of camping, where each moment is
         a new adventure under the open sky. Find solace in nature's symphony and rejuvenate 
        your spirit amidst towering trees and starlit nights. Campfires, stories, and boundless horizons
         await – embrace the    ......</p>
         <br /><br />
    </div>
</div>
<div class="hover:translate-y-[-15px] transition-transform ease-in-out max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="Services/Caves">
        <img class="rounded-t-lg" src={Cave} alt="" />
    </a>
    <div class="p-5">
        <a href="Services/Cave">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Cave Exploration</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Embark on a journey into the 
        heart of the Earth with cave exploration. Discover hidden wonders in the depths as you 
        navigate through twisting passages and marvel at ancient formations. Let the darkness 
        unveil its secrets, and immerse yourself in the raw beauty of  .....</p><br /><br />
    </div>
</div>
<div class="hover:translate-y-[-15px] transition-transform ease-in-out max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="Services/Maasai">
        <img class="rounded-t-lg" src={Maasai} alt="" />
    </a>
    <div class="p-5">
        <a href="Services/Maasai">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Vibrant Maasai Culture</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Discover the Maasai Culture: Tradition and Harmony.
        Enter the world of the Maasai, where tradition dances 
        with nature. Nomads of the savannah, they honor their legacy 
        through vibrant rituals and colorful beadwork. In ....</p>
        <br /><br />
    </div>
</div>

          </div>
  </div><br /><br /><br />
  <Footer />
</div> 
    );
}
export default Home;