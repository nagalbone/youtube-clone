import React from 'react'

const Header = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className='col-span-1'>Logo</div>
        <div className='col-span-10 text-center'>Search</div>
        <div className='col-span-1'>user</div>
    </div>
  )
}

export default Header;