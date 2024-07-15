import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft ,FiChevronRight } from "react-icons/fi";

const Testomonials = (props) => {
	let reviews =props.reviews;


	const [index, setIndex]=useState(0);

	
	function leftShiftHandler(){

		if(index-1<0){
			setIndex(reviews.length-1);
		}
		else{
			setIndex(index-1);
		}

	}
	function rightShiftHandler(){
		if(index+1>=reviews.length){
			setIndex(0);
		}
		else{
			setIndex(index+1)
		}
	}

	function surpriseHandler(){

	  let randomIndex=	Math.floor(Math.random()*reviews.length)
	  setIndex(randomIndex);

	}


  return (

	<div className='w-[85vw] md:w-[750px] bg-white rounded-lg  flex flex-col justify-center 
	items-center mt-5 pt-10 transition-all duration-700 hover:shadow-xl'>
		
		<div className=' '>
			{/* {
				reviews.map((review)=>(
					<Card review={review}/>
				))
			} */}
			<Card review={reviews[index]}/>
			
		</div>

		<div className='flex flex-row mt-5 gap-5 justify-center items-center text-violet-400 font-bold text-3xl'>
			<button 
			onClick={leftShiftHandler}
			className=' cursor-pointer hover:text-violet-600'>
				<FiChevronLeft/>
			</button>

			<button 
			onClick={rightShiftHandler}
			className=' cursor-pointer hover:text-violet-600'>
				<FiChevronRight/>
			</button>
		</div>

		<div className=' mb-4'>
			<button
				onClick={surpriseHandler} 
			className='  bg-violet-400 hover:bg-violet-500 px-10 py-2 font-bold
			 text-white text-2xl mt-3 rounded-md transition-all duration-400'
			
			>
				Surprise Me!
			</button>
	
		</div>


	</div>

  )
}

export default Testomonials
