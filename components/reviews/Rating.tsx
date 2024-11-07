import { FaStar, FaRegStar } from 'react-icons/fa';

function Rating({rating}: {rating:number}) {
  const start = Array.from({length:5}, (_,i) => i + 1 <= rating);

  return (
    <div className='flex items-center gap-x-1'>
      {start.map((isFilled,i) => {
        const className = `w-3 h-3 ${isFilled?'text-primary' : 'text-grey-400'}`
        return isFilled? (
          <FaStar className={className} key={i} />  
        ) : (
          <FaRegStar className={className} key={1} />
        );
      })}
    </div>
  )
}

export default Rating
