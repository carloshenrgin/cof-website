import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const landingPage = () => {
  return (
    <header class="hero-section">
      <nav>
        <StaticImage
          src="../images/cof-logo-cropped-compressed.png"
          alt="Contra o Filé Logo"
          class="nav-logo"
        />

        <ul class="main-nav">
          <li>
            <a href="#">Cardápio</a>
          </li>
          <li>
            <a href="#">Galeria</a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
        </ul>
      </nav>

      <div class="hero-textbox">
        <h1>Saudável. Delicioso. Vegano,</h1>
        <p>Uma opção saudável e acessível para todos.</p>
        <a class="btn" href="#">
          Tô com fome
        </a>
      </div>
    </header>
  )
}

export default landingPage
