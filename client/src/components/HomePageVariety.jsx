import React from 'react'

const HomePageVariety = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-12'>
            <div className='relative flex flex-row items-center gap-3'>
                <p className="font-black text-[150px] bg-gradient-to-t from-[#000000] to-[#666666] text-transparent bg-clip-text">
                    15
                </p>
                <p className='absolute left-32 font-semibold rotate-270 bg-gradient-to-t from-[#000000] to-[#666666] text-transparent bg-clip-text'>VARIETIES</p>
                <p className='absolute left-40 top-[25px] rotate-90 font-black text-[40px] bg-gradient-to-t from-[#000000] to-[#666666] text-transparent bg-clip-text'>+</p>
            </div>
            <div className='flex ml-6 mt-[-35px] flex-col items-center justify-center'>
                <p>The Feel you love</p>
                <p>We have</p>
                <p>...</p>
            </div>
        </div>
    )
}

export default HomePageVariety