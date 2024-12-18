import React from 'react'
import {HandCoins,PartyPopper, Goal, Glasses} from 'lucide-react'



const WhyPartner = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#e8f0ff] min-h-screen w-full p-5'>
      <div className="bg-white rounded-lg w-full max-w-6xl px-8 sm:px-12 py-14 text-center flex flex-col items-center justify-center">
        

        {/* Headings */}
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold p-2">
            Why partner with <span className='text-[#1a73e8]'>BiZONANCE</span>
          </h1>
          
        </div>
        <br />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            {reasons.map((each)=>(
                <div className='flex flex-col justify-center items-center border-2 border-blue-500 rounded-xl h-40 p-5'>
                    <div className='flex items-center justify-center gap-2'>{each.logo} <h1 className='text-2xl font-bold'>{each.title}</h1></div>
                    
                    <p>{each.explainaion}</p>

                </div>
            ))}

        </div>

        <div className='mt-5'><button className='rounded-full bg-blue-500 text-white p-2 px-5 hover:bg-blue-700'>Join Now</button></div>

        
        

        
      </div>
    </div>
  )
}

export default WhyPartner

const reasons = [
    {
        id:1,
        title:'Increase Revenue',
        explainaion:'Increase your income upto 50% and more with our wide customer range and people.',
        logo:<HandCoins size={50} color={'#1a73e8'}/>
        
    },
    {
        id:2,
        title:'Generate new lead',
        explainaion:'Grow your leads with number 1 market leader at Amravati',
        logo:<PartyPopper size={50} color={'#1a73e8'}/>,
    },{
        id:3,
        title:'Retain more customer',
        explainaion:'Work with us to learn how the market works and gain experience',
        logo:<Goal size={50} color={'#1a73e8'}/>
    },{
        id:4,
        title:'Get insider details',
        explainaion:'Get industry insights with out experts and hone your skills',
        logo:<Glasses size={50} color={'#1a73e8'}/>
    }
]