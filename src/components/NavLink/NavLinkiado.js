import React from 'react'

function NavLinkiado({title,handleClick}) {

  return (
    <li onClick={ handleClick}>{title}</li>
    )
}

export default NavLinkiado