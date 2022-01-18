import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"

import * as navStyles from "../styles/navbar.module.scss"

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const handleScroll = () => {
    const offset = window.scrollY
    const viewportHeight = 0.9 * window.innerHeight

    if (offset > viewportHeight) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
  })

  let rowClasses = [``]
  if (scrolled) {
    rowClasses.push(`${navStyles.scrolled}`)
  }

  return (
    <div className={rowClasses.join("")}>
      <nav className={`${navStyles.container} ${navStyles.navBar}`}>
        <a href="/#">
          <StaticImage
            src="../images/cof-logo-cropped-compressed.png"
            alt="Contra o Filé Logo"
            layout="constrained"
            className={navStyles.logoImgHero}
          />
          <StaticImage
            src="../images/cof-logo-sticky-cropped-compressed.png"
            alt="Contra o Filé Logo"
            layout="constrained"
            className={navStyles.logoImgSticky}
          />
        </a>

        <ul className={navStyles.mainNav}>
          <li>
            <a href="#menu" className={`${navStyles.navBtn}`}>
              Cardápio
            </a>
          </li>
          <li>
            <a href="#gallery" className={`${navStyles.navBtn}`}>
              Galeria
            </a>
          </li>
          <li>
            <a href="#about-us" className={`${navStyles.navBtn}`}>
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="#contact" className={`${navStyles.navBtn}`}>
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
