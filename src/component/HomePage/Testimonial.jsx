import {ChevronRight, ChevronLeft} from 'lucide-react'
import React, { useState } from 'react'

const Testimonial = () => {
    const[currentTestimonial, setCurrentTestimonial] = useState(0)

    const handlePlusClick = () => {
        setCurrentTestimonial((prev) => {
          // Prevent overshooting the total length
          if (prev < testimonialData.length) {
            return prev + 1;
          }
          return prev;
        });
      };

      const handleMinusClick = () => {
        setCurrentTestimonial((prev) => {
          // Prevent going below 1
          if (prev > 0) {
            return prev - 1;
          }
          return prev;
        });
      };
  return (
    <div className='flex flex-col items-center justify-center bg-[#e8f0ff] min-h-screen w-full p-5 '>
    <div className=' rounded-lg w-full max-w-6xl px-8 sm:px-12 py-14 text-center flex flex-col items-center justify-center'>
        <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Don't take our word for it. Take their</h1>
            
        </div>
        <br />

        <div className='bg-white rounded-2xl'>
            <div className='flex justify-between items-center flex-col lg:flex-row rounded-2xl'>

                
                <img src={testimonialData[currentTestimonial].image} alt="testimonial image" width={538} height={538} className='rounded-2xl '  />
                <div className='flex flex-col items-center justify-center p-5 gap-2' >
                <img src={testimonialData[currentTestimonial].logo} alt="brand logo" width={50} height={50}  />
                <p className='text-lg font-semibold  ]' >{`"${testimonialData[currentTestimonial].testimonial}"`}</p>
                <p className=''>{`-${testimonialData[currentTestimonial].name}`}</p>
                </div>

                
            </div>
        </div>
        <br />

        <div className='flex items-center justify-center gap-2'>
            {currentTestimonial > 0 && <button className='  border-2 p-2 border-blue-600 rounded-full' onClick={handleMinusClick}><ChevronLeft size={50}/></button>}
            <button className='bg-white rounded-full p-2 px-10 text-lg'>{`${(currentTestimonial + 1)}/${testimonialData.length}`}</button>
            {currentTestimonial < testimonialData.length -1 && <button className='  border-2 p-2 border-blue-600 rounded-full' onClick={handlePlusClick}><ChevronRight size={50} /></button>}
        </div>
         
    </div>
</div>
  )
}

export default Testimonial


const testimonialData = [
    {
        id:0,
        logo:"https://www.gstatic.com/marketing-cms/assets/images/ads/05/93/52f4a8f6476a910d6129bff4f8c6/cs1-logo-1-en-in.jpg",
        image:"https://www.gstatic.com/marketing-cms/assets/images/ads/b0/98/b402a00d4a1bbdd536627ddf817b/cs1-img-en-in.jpg",
        name:"Alberto Goenza",
        testimonial:"Mario build a project website for our fundraising campaign. It's modern, clean & beautiful design got a lot of praise from colleagues and visitors. The Webflow CMS makes it very easy to add new input. Working with Mario has been great. He handles things efficiently and was available for any questions. Sooo, that makes him a 10 as a designer & developer."
    },{
        id:1,
        logo:"https://www.gstatic.com/marketing-cms/assets/images/ads/05/93/52f4a8f6476a910d6129bff4f8c6/cs1-logo-1-en-in.jpg",
        image:"https://www.gstatic.com/marketing-cms/assets/images/ads/b0/98/b402a00d4a1bbdd536627ddf817b/cs1-img-en-in.jpg",
        name:"Alberto Goenza",
        testimonial:"Mario build a project website for our fundraising campaign. It's modern, clean & beautiful design got a lot of praise from colleagues and visitors. The Webflow CMS makes it very easy to add new input. Working with Mario has been great. He handles things efficiently and was available for any questions. Sooo, that makes him a 10 as a designer & developer."
    },{
        id:2,
        logo:"https://www.gstatic.com/marketing-cms/assets/images/ads/05/93/52f4a8f6476a910d6129bff4f8c6/cs1-logo-1-en-in.jpg",
        image:"https://www.gstatic.com/marketing-cms/assets/images/ads/b0/98/b402a00d4a1bbdd536627ddf817b/cs1-img-en-in.jpg",
        name:"Alberto Goenza",
        testimonial:"Mario build a project website for our fundraising campaign. It's modern, clean & beautiful design got a lot of praise from colleagues and visitors. The Webflow CMS makes it very easy to add new input. Working with Mario has been great. He handles things efficiently and was available for any questions. Sooo, that makes him a 10 as a designer & developer."
    },{
        id:3,
        logo:"https://www.gstatic.com/marketing-cms/assets/images/ads/05/93/52f4a8f6476a910d6129bff4f8c6/cs1-logo-1-en-in.jpg",
        image:"https://www.gstatic.com/marketing-cms/assets/images/ads/b0/98/b402a00d4a1bbdd536627ddf817b/cs1-img-en-in.jpg",
        name:"Alberto Goenza",
        testimonial:"Mario build a project website for our fundraising campaign. It's modern, clean & beautiful design got a lot of praise from colleagues and visitors. The Webflow CMS makes it very easy to add new input. Working with Mario has been great. He handles things efficiently and was available for any questions. Sooo, that makes him a 10 as a designer & developer."
    },{
        id:4,
        logo:"https://www.gstatic.com/marketing-cms/assets/images/ads/05/93/52f4a8f6476a910d6129bff4f8c6/cs1-logo-1-en-in.jpg",
        image:"https://www.gstatic.com/marketing-cms/assets/images/ads/b0/98/b402a00d4a1bbdd536627ddf817b/cs1-img-en-in.jpg",
        name:"Alberto Goenza",
        testimonial:"Mario build a project website for our fundraising campaign. It's modern, clean & beautiful design got a lot of praise from colleagues and visitors. The Webflow CMS makes it very easy to add new input. Working with Mario has been great. He handles things efficiently and was available for any questions. Sooo, that makes him a 10 as a designer & developer."
    },
]