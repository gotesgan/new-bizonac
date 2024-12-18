import React from 'react'
import sideImage from '../../assets/images/career.png'

const Top = () => {
   return (
      <div className='flex flex-col items-center justify-center  '>
          <div className='flex flex-col md:flex-row gap-5 px-5 lg:px-40 mt-5'>
  
          
  
          {/* this will contain the text */}
          <div className='flex flex-col items-center justify-center   border rounded-3xl shadow-md p-5 '>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:text-start font-bold px-5 ">A partnership program to accelerate your growth.</h1>
              <br />
              <p className='text-base sm:text-lg px-5  md:text-start'>Join BiZONANCE, the fastest growing Information technology and business consulting company which helps to grow small businesses.</p>
             <br />
             
              <button className='rounded-full bg-blue-500 text-white p-2 px-5 hover:bg-blue-700'>Join Now</button>
              
             
          </div>
          
          {/* this will contain the image */}
          <div >
              <img src={sideImage} alt="partner image"  width={1500} height={1500} />
  
          </div>
  
          </div>
      </div>
    )
}

export default Top