import React from 'react'

const Offer = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#e8f0ff] min-h-screen w-full p-5'>
        <div className='bg-white rounded-lg w-full max-w-6xl px-8 sm:px-12 py-14 text-center flex flex-col items-center justify-center'>
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Choose our exclusive offer to jump start you business</h1>
                <p className='text-base sm:text-lg px-2 sm:px-4'>Call our expert to get signed up for the offer and expand your business on the go</p>
            </div>
            <br />

            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <div className='border-2 border-blue-400  p-5 rounded-md text-center flex flex-col items-center justify-center '>
                    <p className='bg-[#e8f0ff] rounded-full w-20'>Offer A</p>
                    <h2 className='text-xl font-bold text-[#1a73e8]'>₹ 10,000</h2>
                    <p>Get your business listed on Google and appear in the mapall our expert to get signed up for the offer and expand your business on the go</p>

                </div>

                <div className='border-2 border-blue-400  p-5 rounded-md text-center flex flex-col items-center justify-center '>
                    <p className='bg-[#e8f0ff] rounded-full w-20'>Offer A</p>
                    <h2 className='text-xl font-bold text-[#1a73e8]'>₹ 10,000</h2>
                    <p>Get your business listed on Google and appear in the mapall our expert to get signed up for the offer and expand your business on the go</p>

                </div>

                <div className='border-2 border-blue-400  p-5 rounded-md text-center flex flex-col items-center justify-center '>
                    <p className='bg-[#e8f0ff] rounded-full w-20'>Offer A</p>
                    <h2 className='text-xl font-bold text-[#1a73e8]'>₹ 10,000</h2>
                    <p>Get your business listed on Google and appear in the mapall our expert to get signed up for the offer and expand your business on the go</p>

                </div>

                

            </div>

           
        </div>

    </div>
  )
}

export default Offer