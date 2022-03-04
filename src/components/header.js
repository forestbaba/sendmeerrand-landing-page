import React,{useState} from 'react'
import Icon from './icon.png'
import { Link } from 'react-scroll';

export default function Header() {
    const [active, setActive] = useState("5") 
    const features =[{id:"1",name:"Home"}, 
    {id:"2",name:"Feature"},
    {id:"4",name:"FAQ"},
    {id:"3",name:"Contact us"},
    {id:"5",name:"Get the App"}]
  return (
    <div className='flex-column mx-10 my-5 justify-center flex-wrap justify-between
     md:flex sm:flex-column'>
        <img src={Icon} alt="icon" width={100} height={30} className="justify-center"/>
        <ul  className='flex-column items-center md:flex md:justify-center sm:flex-column'>
            {features.map(item => <li className='py-5 md:py-0'>
            <Link activeClass={"3"} 
            to={item.id} 
            spy={true} 
            smooth={true} 
            duration={500} 
            className='px-5 font-bold text-center'
            onClick={()=> setActive(item.id)}
             style={{ backgroundColor:active === item.id ? "#F77F00" : null,color:active===item.id && 'white', padding:20, borderRadius:"15px" }}>{item.name}</Link></li>)}
        </ul>
    </div>
  )
}
