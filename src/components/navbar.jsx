import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'> Chat Application</span>
      <div className="user">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._NU_KmI6HoOFDkbqJ3P6vAHaF1%26pid%3DApi&f=1&ipt=cb5d447a7331ebf4074f84dad10822b9af9c873a5a912ddf38e9e6a2b47147a4&ipo=images" alt="" />
        <span>Dude</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar