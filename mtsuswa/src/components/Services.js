import Footer from "./Footer";
import Navbar from "./Navbar";
import Hiking from '../images/Hiking.webp';
import Cave from '../images/Cave.webp';
import Maasai from '../images/gallery3.jpeg';
import Camping from '../images/Camping3.jpeg';
import { useNavigate } from 'react-router-dom';

export default function Services(){
    const navigate = useNavigate()

    const handleClickHiking = () => {
        window.scrollTo(0, 0);
        navigate('/Services/Hiking');
      };
      const handleClickCamping = () => {
        window.scrollTo(0, 0);
          navigate('/Services/Camping');
        };
      const handleClickCave = () => {
        window.scrollTo(0, 0);
          navigate('/Services/Cave');
        };
      const handleClickMaasai = () => {
        window.scrollTo(0, 0);
          navigate('/Services/Maasai');
        };

    return(
        <div>
            <Navbar /><br /><br /><br />
            <h1 className="text-5xl flex items-center justify-center">| Discover our Services</h1>
            <br /><br />
            <div className="lg:grid grid-cols-2 xl:grid-cols-2  fservices">
            <div class="m-12 h-100 bg-gray-700 max-w-[800px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
<img src={Hiking} alt="hiking"/>
  <h4 class="py-4 text-white text-2xl font-bold">Hiking</h4>
  <p class="text-sm leading-7 text-slate-300 space-y-4">
  Embark on a journey of exploration 
and adventure with our premier hiking services.
 At Mt Suswa Camping, we're dedicated to providing 
        you with unforgettable hiking .......</p>
  <div class="pt-5 pb-2 flex justify-center">
    <button onClick={handleClickHiking} class="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">Learn More</button>
  </div>
</div>
<div class="m-12 h-100 bg-gray-700 max-w-[800px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
<img src={Camping} alt="hiking"/>
  <h4 class="py-4 text-white text-2xl font-bold">Camping</h4>
  <p class="text-sm leading-7 text-slate-300 space-y-4">Escape into the wild embrace of camping, where each moment is
         a new adventure under the open sky. Find solace in nature's symphony and rejuvenate 
        your spirit amidst towering trees and starlit nights. Campfires, stories, and boundless horizons
         await – embrace the    ......</p>
  <div class="pt-5 pb-2 flex justify-center">
    <button onClick={handleClickCamping} class="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">Learn More</button>
  </div>
</div>

<div class="m-12 h-100 bg-gray-700 max-w-[800px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
<img src={Cave} alt="hiking" className="h-40"/>
  <h4 class="py-4 text-white text-2xl font-bold">Cave Exploration</h4>
  <p class="text-sm leading-7 text-slate-300 space-y-4">Embark on a journey into the 
        heart of the Earth with cave exploration. Discover hidden wonders in the depths as you 
        navigate through twisting passages and marvel at ancient formations. Let the darkness 
        unveil its secrets, and immerse yourself in the raw beauty of  .....</p>
  <div class="pt-5 pb-2 flex justify-center">
    <button onClick={handleClickCave} class="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">Learn More</button>
  </div>
</div>

<div class="m-12 h-100 bg-gray-700 max-w-[800px] rounded-xl hover:bg-gray-900 hover:scale-110 duration-700 p-5">
<img src={Maasai} alt="hiking"/>
  <h4 class="py-4 text-white text-2xl font-bold">Vibrant Maasai Culture</h4>
  <p class="text-sm leading-7 text-slate-300 space-y-4">Discover the Maasai Culture: Tradition and Harmony.
        Enter the world of the Maasai, where tradition dances 
        with nature. Nomads of the savannah, they honor their legacy 
        through vibrant rituals and colorful beadwork. In ....</p>
  <div class="pt-5 pb-2 flex justify-center">
    <button onClick={handleClickMaasai} class="w-36 h-10 font-semibold rounded-md bg-indigo-100 hover:scale-90 duration-500">Learn More</button>
  </div>
</div>

</div>
   <Footer />
        </div>
    )
}