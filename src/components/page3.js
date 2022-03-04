import React from 'react'
import Bag from '../asset/ricebag.svg'
import What from '../asset/what.svg'
export default function Page3() {
  return (
    <div className='flex-column  justify-left md:flex-column lg:flex xl:flex md:px-20 md:m-20' id='3'>
      <img src={Bag} className="" width={500}/>

      <div>
        <img src={What} style={{ height: "10px" }} className='px-20'/>
        <h1 className='font-bold text-xl md:text-5xl md:px-20 text-center md:pt-10 md:w-65'>What our customers</h1>
        <h1 className='font-bold text-xl md:text-5xl px-20 text-left  w-65'>says about us</h1>
      </div>
    </div>
  )
}
