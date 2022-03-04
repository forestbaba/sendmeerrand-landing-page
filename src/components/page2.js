import React from 'react'
import EasyI from '../asset/easy_icon.svg';
import BikeI from '../asset/bike.svg';
import VisaI from '../asset/visa.svg';
export default function Page2() {
  const item =[
  {name:"Easy to order",icon:EasyI,epital:"Place orders for your needs anytime on the go"},
  {name:"Fast delivery",icon:BikeI,epital:"You plan today we deliver tomorrow "},
  {name:"Schedule purchase",icon:VisaI,epital:"Get a purchasing pattern, we automate your delivery"},
  {name:"Best prices",icon:VisaI,epital:"Best price using the bulk purchase power"}
]
  return (
    <div id='2'>
        <h2 className='font-bold text-3xl text-center pt-10'>Features you'll love</h2>
        <p className='font-normal text-center pt-2'>Here are some of the cutting edge services we provide</p>
        <div className='flex-column justify-between p-10 lg:flex xl:flex md:flex-column md:p-20 md:ml-20 md:mr-20 '>
          {
            item.map((it, index) =>{
              return(
                <div className={ index === 1 ? 'rounded  shadow-lg p-20' : 'p-20'}>
                {/* <div className={index === 1 ? 'flex-column justify-items-center rounded 	align-content:center shadow-lg p-20' : 'pt-20'}> */}
                <img src={it.icon} alt="easy" width={100} className="self-center h-full py-2 ml-8"/>
                <p className='font-bold text-center text-medium'>{it.name}</p>
                <p className='font-normal text-center text-medium'>{it.epital}</p>
              </div>
              )
            } )
          }
        
        </div>
    </div>
  )
}
