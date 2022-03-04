import React from 'react'

export default function Page4() {
  let google="google"
  let apple=""
  let items =[{id:1,name:"What is ‘send me errand’?", desc:"Send me errand is an online need example foodstuff, grocery etc. platform accessible via our mobile app, where you can order and have them delivered to your doorstep."},
  {id:2,name:"How much does it cost to buy food?", desc:"he more you buy the lesser. Send me errand charges only a percent for your total purchase."},
  {id:3,name:"How can I pay for food purchased?",desc:" You can make payments online via your debit card. The process is fast and simple."},
  {id:4,name:"Can I make orders over the telephone?", desc:`No! Send me errand only entertains orders via her mobile application available on <a href=${google}>Google playstore</a> and  <a href=${apple}>Apple app store</a>`},
  {id:5,name:"Can I use the platform to make orders anytime of the day?",desc:"Yes! Send me errand entertains orders 24/7"}]
  return (
    <div className='bg-black px-5 text-center text-white' id='4'>
        <h1 className='font-bold text-xl md:text-3xl pt-5'>Frequently asked questions</h1>
        <p className='font-light'>Here are the few Frequently asked questions people asks</p>
        <div  className='flex-column items-start px-5 py-5 md:px-40 md:py-20 content-start divide-y'>
          {
            items.map(item =>{
              return(
                <div className='flex-column items-start content-start '>
                <h3 className='text-left font-bold md:pt-10'>{item.name}</h3>
                {item.id !== 4 ?(<p className='text-left font-light md:pb-8 '>{item.desc}</p>) :
                ( <p className='text-left font-light md:pb-8 '>No! Send me errand only entertains orders via her mobile application available on <a href="">Google playstore</a> and  <a href="">Apple app store</a></p>)}
               

              </div>
              )
            })
          }
        
         
          
        </div>
    </div>
  )
}
