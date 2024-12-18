import React from 'react'
 

const Goal = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#f7f9fa] min-h-screen w-full p-5   '>
    <div className=' rounded-lg w-full max-w-6xl px-5 py-14 text-center flex flex-col items-center justify-center'>
        <div className='pt-5'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">All things in one place.</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Acheive all your <span className='text-[#1a73e8]'>Goal at BiZONANCE.</span> </h1>
        </div>
        <br /><br /><br />

        <div className='flex flex-col items-center justify-center gap-5 md:gap-10'>
            <div className='flex flex-col items-center justify-center gap-5 md:justify-between md:gap-20 md:flex-row'>

                <div className='flex items-center justify-center md:flex-col gap-2 '>
                    <img src="https://www.gstatic.com/marketing-cms/assets/images/ads/68/44/f503ed4249f9b1c12fae52ceed3f/unnamed-27.png" width={80} height={80} alt="" />
                    <div>
                        <h1 className='text-xl font-medium text-start md:text-center'>Maximise insights and better data</h1>
                        <p className='text-start md:text-center '>Get better quality insights and conversation</p>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-2 md:flex-col '>
                    <img src="https://www.gstatic.com/marketing-cms/assets/images/ads/71/0a/a3a0a7144220868408bd7d3f8734/unnamed-28.png" width={80} height={80} alt="" />
                    <div>
                        <h1 className='text-xl font-medium text-start md:text-center'>Maximise insights and better data</h1>
                        <p className='text-start md:text-center'>Get better quality insights and conversation</p>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-2 md:flex-col '>
                    <img src="https://www.gstatic.com/marketing-cms/assets/images/ads/66/1c/69a5adfe4397aaf93d6aa21f1b3a/unnamed-29.png" width={80} height={80} alt="" />
                    <div>
                        <h1 className='text-xl font-medium text-start md:text-center'>Maximise insights and better data</h1>
                        <p className='text-start md:text-center'>Get better quality insights and conversation</p>
                    </div>
                </div>

            </div>

            <div className='flex flex-col items-center justify-center md:gap-40 md:flex-row gap-5 '>

                <div className='flex items-center justify-center gap-2 md:flex-col '>
                    <img src="https://www.gstatic.com/marketing-cms/assets/images/ads/08/9e/a48abfa94ad78a9164a013f2818c/unnamed-30.png" width={80} height={80} alt="" />
                    <div>
                        <h1 className='text-xl font-medium text-start md:text-center'>Maximise insights and better data</h1>
                        <p className='text-start md:text-center'>Get better quality insights and conversation</p>
                    </div>
                </div>

                <div className='flex items-center justify-center gap-2 md:flex-col  '>
                    <img src="https://www.gstatic.com/marketing-cms/assets/images/ads/ce/cf/fd1947264dc589eafea626f0d16a/unnamed-31.png" width={80} height={80} alt="" />
                    <div>
                        <h1 className='text-xl font-medium text-start md:text-center'>Maximise insights and better data</h1>
                        <p className='text-start md:text-center'>Get better quality insights and conversation</p>
                    </div>
                </div>

                

            </div>
            

        </div>

        
         
    </div>
</div>

  )
}

export default Goal