import { NavLink } from "react-router-dom"
import './style.css'
import Image from '../../assets/image.jpg'

export const Nav = () => {
  return (
    
    <div className="vv">
      {/* <div className="container">   */}
    <div className="contents">
    
      <img className='about_photo'
        src={Image} 
        alt=""
      />
      <h3 className="name">Suusara Mataeva</h3>
      <p className="speciality">Frontend developer</p>

        <ul className="nav">
      <li> 
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/">Resume</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
    <div>
    </div>
   </div>
   
   </div>

   

   // </div>
  
  )
}