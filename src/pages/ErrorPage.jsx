import Error1 from '../assets/404.png';

function ErrorPage() {
  return (
    <div className='bg-white  flex flex-col items-center justify-center py-20'>
      <img src={Error1} alt="Error 404" className='mb-4' />

      <p className='text-lg font-semibold text-gray-700 mb-2'>
        Something went wrong.
      </p>

      <p className='text-sm text-gray-600 mb-8'>
        Sorry, We can’t find the page you’re looking for.
      </p>

      <button className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
        Go Back
      </button>
    </div>
  );
}

export default ErrorPage;
