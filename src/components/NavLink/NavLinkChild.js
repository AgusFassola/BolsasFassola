import React from 'react'

function NavLinkChild({handleClick,children}) {

  return (
    <li onClick={ handleClick}>{children}</li>
    )
}

export default NavLinkChild