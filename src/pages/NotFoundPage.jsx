import React from 'react'
import { Link, Links } from 'react-router'
import RedButton from '../components/RedButton'

const NotFoundPage = () => {
  return (
    <section className='pt-20 pb-35 bg-white'>
      <div className="container">
        <div className='flex items-center gap-2 justify-start'>
          <Link to="/" className='text-slate-300'>Home</Link>
          <span className='text-slate-300'>/</span>
          <span className='text-800'>404 Error</span>
        </div>
        <div className='text-center pt-35'>
          <h1 className='text-[110px] font-medium pb-2 text-black'>
            404 Not Found
          </h1>
          <p className='text-base font-normal pb-24 text-black'>
            Your visited page not found. You may go home page.
          </p>
          <RedButton title="Go To Home" link="/" />
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage