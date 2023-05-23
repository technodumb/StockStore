import React from 'react'
import './TopNav.scss'

import { useNavigate } from 'react-router'

import Logo from '/Logo.svg'
import {MdPerson} from 'react-icons/md'

export default function TopNav() {
  
  const nav=useNavigate()
  const userName='User1'
  const Logout =()=>{
    nav('/')
  }
    return (
    <div className='TopNav'>
        <div className="Logo">
            <img src={Logo} alt="" />
            <span>Stock</span>Store
        </div>
        
        <div>
            <span>Market</span>Place
        </div>

        <div className='Profile flex'>
            <div className='flex col'>
                <span>Welcome, {userName}</span>
                <span> <b style={{cursor:'pointer'}} onClick={Logout}>Logout</b> </span>
            </div>
            <MdPerson  size='3.5rem'/>
        </div>
    </div>
  )
}
