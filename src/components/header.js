import React,{useState} from 'react'
import Icon from './icon.png'
import { Link } from 'react-scroll';

export default function Header() {
    const [active, setActive] = useState("5") 
    const [open, setOpen] = useState(false) 
    const features =[{id:"1",name:"Home"}, 
    {id:"2",name:"Feature"},
    {id:"4",name:"FAQ"},
    {id:"3",name:"Contact us"},
    {id:"5",name:"Get the App"}]
  return (
    <div className='flex-column mx-10 my-5 justify-center flex-wrap justify-between
     md:flex sm:flex-column'> 
         <div>
         <img src={Icon} alt="icon" width={100} height={30} className="justify-center"/>
         <button onClick={()=> setOpen(!open)}><i  className= {!open ? "fa fa-bars fa-2x absolute top-0 right-0 px-5 py-8 md:hidden ease-in duration-300 " :"fa fa-times fa-2x absolute top-0 right-0 px-5 py-8 md:hidden ease-in duration-300 "} aria-hidden="true" style={{ color:'#F77E00' }}></i></button>

         </div>
        <ul  className={!open ? 'flex-column items-center md:flex md:justify-center sm:flex-column hidden ease-out duration-300' :'flex-column items-center md:flex md:justify-center sm:flex-column ease-in duration-300 '}>
            {features.map(item => <li className='py-5 md:py-0'>
            <Link activeClass={"3"} 
            to={item.id} 
            spy={true} 
            smooth={true} 
            duration={500} 
            className='px-5 font-bold text-center'
            onClick={()=> setActive(item.id)}
             style={{ backgroundColor:active === item.id ? "#F77F00" : null,color:active===item.id && 'white', padding:20, borderRadius:"15px", borderBottom: item.id === "5" ? "1px solid #F77F00" : null }}>{item.name}</Link></li>)}
        </ul>
    </div>
  )
}
