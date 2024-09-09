import React from 'react'
import { PropagateLoader } from 'react-spinners'

const LoadinPage = () => {
  return (
    <section className='h-screen w-full bg-backBlue flex flex-col justify-center items-center'>
        <span className='pacifico-regular text-7xl mb-16 '>Doodle</span>
        <span><PropagateLoader color={'white'}/></span>
        <span className='mt-16 text-white text-xs w-5/6 text-center'>*The backend is hosted on render.com's free instance. So the initial loading might take around a minute. Thanks for being patient.</span>
        <div className='text-center py-3 w-screen fixed bottom-0 text-white bg-[#fefefe24] brak-all text-sm'>A project developed by <strong>Naveen Adhikari</strong>.</div>
    </section>
  )
}

export default LoadinPage