import React from 'react'

import { FaQuoteLeft,FaQuoteRight  } from "react-icons/fa6";


const Card = (props) => {

	let review = props.review;
  return (
	<div className=' flex flex-col md:relative'>
		<div className=' absolute top-[-6rem] z-[10] left-7'>
			<img src={review.image} alt="" className=' aspect-square rounded-full w-[140px] h-[140px] z-20' />

			<div className=' absolute h-[140px] w-[140px] bg-violet-500 rounded-full top-[-8px] left-[8px] z-[-20]'></div>
		</div>

		<div className=' text-center mt-1'>
			<p className=' font-bold text-3xl capitalize'>{review.name}</p>
			<p className='text-violet-300 uppercase text-xl '>{review.job}</p>
		</div>

		<div className=' text-center text-violet-400 mx-auto mt-3 '>
			<FaQuoteLeft/>
		</div>

		<div className='text-xl font-bold text-center mt-4 text-slate-500 px-10'>
			{review.text}
		</div>

		<div  className=' text-center text-violet-400 mx-auto mt-4'>
			<FaQuoteRight/>
		</div>

		

	</div>
  )
}

export default Card
