import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default function Footer() {
  return (
    <div className="Footer">
      <div className='nav'>
        <span className="Link"><AnchorLink href='#frente' offset='20px'>TOPO</AnchorLink></span>
      </div>
      <div className='nav'>
        <span className="Link"><a href="https://tulio-portfolio.netlify.app/">Tulio Colares</a></span>
      </div>
      <div className='nav'>
        <span className="Link">@2021</span>
      </div>
    </div>
  )
}
