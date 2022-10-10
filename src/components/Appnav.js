import React from 'react'

function Appnav() {
  return (
    <div className='w-[52px] h-[230px] ml-[20px] top-[96px]'>
      <section id="frame_3" className='flex flex-col w-[22px] h-[178px] items-start ml-[15px] mt-[25px] gap-[30px]'>
        <img src="images/Home.png" alt="" className='w-[22px] h-[22px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]' />
        <img src="images/playlist.png" alt="" className='w-[22px] h-[22px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]' />
        <img src="images/radio.png" alt="" className='w-[22px] h-[22px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]' />
        <img src="images/videos.png" alt="" className='w-[22px] h-[22px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]' />
      </section>
      <div className='bg-[#1A1E1F] rounded-[32px] w-[52px] h-[230px] mt-[-200px]' />
    </div>
  )
}

export default Appnav