import { useNavigate } from 'react-router-dom';
import Img1 from '../assets/Content.png'
const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the shop page
    navigate('/product');
  }
  return (
    <div className='bg-white h-50 flex items-center justify-between overflow-hidden'>
        <div className='flex flex-col gap-6 justify-between p-4 m-6 md:m-8 md:p-8'>
        <h1 className='uppercase text-6xl  md:text-8xl capitalize font-bold'>read and add 
your insight
</h1>
<p className='capitalize font-semibold text-lg md:text-xl '>find your favorite book and read it here for free
</p>
<button className='md:w-fit my-2 text-xl bg-blue-500 font-bold p-4 px-6 hover:bg-blue-300 shadow-md text-white rounded-md'
 onClick={handleClick}>Find Now</button>
</div>
<img className='hidden md:block' src={Img1} alt="" />
    </div>
  )
}

export default Hero