import React from 'react'

function NavLinkChild({handleClick,children}) {

  return (
    <a>
      <li onClick={ handleClick}>{children}</li>
    </a>
    
    )
}

export default NavLinkChild