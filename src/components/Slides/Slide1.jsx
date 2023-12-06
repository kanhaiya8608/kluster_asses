function Slide1({ name, position,description }) {

    return (
      <div className='p-8 rounded-md '>
              <div className='text-lg'>
            <p className="font-bold text-3xl">{name}</p>
          </div>
        
        <p className='py-4 text-base'>{description}</p>
     </div>
    );
  }
  
  export default Slide1;