import { useNavigate } from 'react-router-dom';
import Img1 from '../assets/Content.png'
const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the shop page
    navigate('/product');
  }
  return (
    <div className='bg-white h-50 flex items-center justify-between'>
        <div className='flex flex-col gap-6 justify-between m-8 p-8'>
        <h1 className='uppercase text-8xl capitalize font-bold'>read and add 
your insight
</h1>
<p className='capitalize font-semibold text-xl '>find your favorite book and read it here for free
</p>
<button className='w-fit my-2 text-xl bg-blue-500 font-bold p-4 px-6 hover:bg-blue-300 shadow-md text-white rounded-md'
 onClick={handleClick}>Find Now</button>
</div>
<img className='hidden md:block' src={Img1} alt="" />
    </div>
  )
}

export default Hero