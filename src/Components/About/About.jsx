import React from 'react'
import './About.css'
import img1 from '../../assets/about_1.avif'
import img2 from '../../assets/about_2.avif'
import img3 from '../../assets/about_3.avif'
import img4 from '../../assets/about_4.avif'

const About = () => {
  return (
    <div className='about'>
      <ul class="list">
        <li class="item"><div class="content"><img src={img1} alt="" /></div></li>
        <li class="item"><div class="content"><img src={img2} alt="" /></div></li>
        <li class="item"><div class="content"><img src={img3} alt="" /></div></li>
        <li class="item"><div class="content"><img src={img4} alt="" /></div></li>
      </ul>
    </div>
  )
}

export default About