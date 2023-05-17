import React from 'react'
import "./footer.css"
const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className='footer'>
        <p>
            Copyright © {year}
        </p>
    </div>
  )
}

export default Footer