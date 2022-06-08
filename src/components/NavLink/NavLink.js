import React from 'react'

function NavLink({title,handleClick}) {

  return (
    <li onClick={ handleClick}>{title}</li>
    )
}

export default NavLink