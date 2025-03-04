import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const [token,setToken] = useState(true)


    
  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')}  className='w-44 cursor-pointer' src={assets.logo} alt=""/>
        <ul className="hidden  md:flex items-start gap-5 font-medium">
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <li className='py-1'>All Doctors</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='py-1'>About</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='py-1'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        
        <div className='flex items-center gap-4 relative group'>
    {token ? (
        <div className='flex items-center gap-4'>
            <img className='w-8 rounded-full' src={assets.profile_pic} alt='' />
            <img className='w-2.5 cursor-pointer' src={assets.dropdown_icon} alt='' />
            <div className='absolute top-full right-0 pt-2 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-white rounded shadow-lg flex flex-col gap-4 p-4'>
                    <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                    <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                    <p onClick={() => { setToken(false); localStorage.removeItem('token'); }} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
            </div>
            </div>
            ):(
            <button onClick={()=>navigate('/login')}
             className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
       ) }
       <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />  
        </div>
    </div>
  )
}

export default Navbar; 