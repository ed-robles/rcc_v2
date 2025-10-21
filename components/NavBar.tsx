import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
         <nav className="site-nav" aria-label="Primary navigation">
          <Link className="site-nav__link" href="/" data-label="HOME">
            HOME
          </Link>
          <Link
            className="site-nav__link"
            href="/services"
            data-label="OUR WORK"
          >
            SERVICES
          </Link>
          <Link
            className="site-nav__link"
            href="/gallery"
            data-label="OUR WORK"
          >
            GALLERY
          </Link>
          <Link className="site-nav__link" href="/contact" data-label="CONTACT">
            CONTACT
          </Link>
        </nav>
  )
}

export default NavBar