import React from 'react'

export default function Footer() {
  return (
    <div className='flex-column px-5 md:flex justify-between md:m-10 lg:m-20 lg:px-20 sm:px-5' id='3'>
        
          <div>
            <h2 className='font-bold py-2 md:py-5 md:px-5'>Address</h2>
            <p className='font-light md:px-5'>7B Oba Olagbegi Avenue Off Oshuntokun Old Bodija Ibadan</p>
          </div>
          <div>
            <h2 className='font-bold py-5'>Let's connect</h2>
            <div>
              <p><a href='https://www.facebook.com/sendmeerrandng/' target="_blank" className='font-light'>Facebook</a></p>
              <p><a href='https://www.instagram.com/sendmeerrandng/' target="_blank" className='font-light'>Instagram</a></p>
              <p><a href='https://twitter.com/sendmeerrandng/' target="_blank" className='font-light'>Twitter</a></p>
            </div>
          </div>
          <div>
            <h2 className='font-bold py-5 md:px-5'>Contact</h2>
            <div>
              <p className='font-light md:px-5'>sendmeerrands@gmail.com</p>
              <p className='font-light  md:px-5'>+2348141271879</p>
            </div>
          </div>
          </div>
  )
}
