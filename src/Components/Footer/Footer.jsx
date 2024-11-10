import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <p className="footer-text">© 2024 Roost. All rights reserved.</p>
        <ul className="mobi-footer_list">
            <li className="mobi-footer_item">
                <a href='' className="mobi-footer_link" class="btn btn-brand btn-block">Get a table</a>
                
                </li>
                <li className="mobi-footer_item">
                <a href='' className="mobi-footer_link" class="btn btn-brand btn-block">Order Online</a>
                
                </li>
        </ul>

    </div>
  )
}

export default Footer