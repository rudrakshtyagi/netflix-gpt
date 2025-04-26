import React from 'react';
import myImage from './Netflix-logo-design-illustration-on-transparent-background-PNG-removebg-preview.png'; 


const Header = () => {
  return (
    <div className='absolute w-44 px-6 py-2 '>

<img src={myImage} alt="Netflix Logo" />

    </div>
  )
}

export default Header;