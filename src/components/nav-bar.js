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

  const [navigation, openNavigation] = React.useState(false)
  const openMenu = () => {
    openNavigation(true)
    document.body.style.overflow = "hidden"
  }

  const closeMenu = () => {
    openNavigation(false)
    document.body.style.overflow = "visible"
    document.getElementsByClassName(
      `${navStyles.mainNav}`
    )[0].style.transition = "all 0.5s"
  }

  let displayController = [``]
  if (navigation) {
    displayController.push(`${navStyles.navDisplay}`)
  }

  return (
    <div className={rowClasses.join("")}>
      <nav className={` ${navStyles.navBar}`}>
        <a href="#home">
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

        <div className={displayController.join("")}>
          <ul className={navStyles.mainNav}>
            <li>
              <a
                href="#menu"
                className={`${navStyles.navBtn}`}
                onClick={closeMenu}
              >
                Cardápio
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className={`${navStyles.navBtn}`}
                onClick={closeMenu}
              >
                Galeria
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className={`${navStyles.navBtn}`}
                onClick={closeMenu}
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`${navStyles.navBtn}`}
                onClick={closeMenu}
              >
                Contato
              </a>
            </li>
          </ul>

          <div className={`${navStyles.mobileNav}`}>
            <button className={`${navStyles.navOpen}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${navStyles.openBtn}`}
                onClick={openMenu}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <button className={`${navStyles.navClose}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`${navStyles.closeBtn}`}
                onClick={closeMenu}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
