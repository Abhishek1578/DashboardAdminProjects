import { Input } from 'antd'
import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <h2>Hello Abhishek</h2>
        </div>
        <div className='header-right'>
            <Input.Search placeholder='Search' ></Input.Search>
        </div>
    </header>
  )
}

export default Header