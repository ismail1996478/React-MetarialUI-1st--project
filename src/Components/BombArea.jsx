import React from 'react'

function BombArea() {
  return (
    <section className='bg-indigo-500 w-full h-auto mb-5'>
        <div className="flex flex-col lg:flex-row items-center justify-between mt-24 max-w-[1400px] mx-auto">
            <div className="flex flex-1 flex-col gap-8 px-20">
                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white text-center md:text-start'>The quickewt way to create awesome presentation</h1>

                <div className="flex flex-wrap gap-3 mb-10">
                    <button className='bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 transition duration-300 rounded-lg'>Get Started</button>
                    <button className='bg-indigo-600 hover:bg-green-700 text-white font-semibold py-2 px-5 sm:py-3 sm:px-6 transition duration-300 rounded-lg'>Learn More</button>
                
                </div>
            </div>

            <div className="">
                <img className='w-full h-auto md:h-[300px] md:ms-[-200px]' src="Images/bomb 1.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default BombArea