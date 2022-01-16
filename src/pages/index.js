import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const landingPage = () => {
  return (
    <div>
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

      <section class="section-menu">
        <h2>Cardápio</h2>
        <nav class="menu-nav">
          <ul>
            <li>Marmitas</li>
            <li>Burgueres</li>
            <li>Porções</li>
            <li>Smoothies</li>
            <li>Bebidas</li>
          </ul>
        </nav>
        <div class="packed-lunch-section">
          <h3>Marmitas</h3>
          <div>
            <h4>Sample Option</h4>
            <p>Description</p>
            <div class="price-row">
              <p class="price">(P) R$ XX,XX</p>
              <p class="price">(G) R$ XX,XX</p>
            </div>
          </div>
        </div>
        <div class="burger-section">
          <h3>Burgueres</h3>
          <div>
            <h4>Sample Option</h4>
            <p>Description</p>
            <div class="price-row">
              <p class="price">(U) R$ XX,XX</p>
            </div>
          </div>
        </div>
        <div class="appetizer-section">
          <h3>Porções</h3>
          <div>
            <h4>Sample Option</h4>
            <p>Description</p>
            <div class="price-row">
              <p class="price">(P) R$ XX,XX</p>
              <p class="price">(M) R$ XX,XX</p>
              <p class="price">(G) R$ XX,XX</p>
            </div>
          </div>
        </div>
        <div class="smoothies-section">
          <h3>Smoothies</h3>
          <div>
            <h4>Sample Option</h4>
            <p>Description</p>
            <div class="price-row">
              <p class="price">(P) R$ XX,XX</p>
              <p class="price">(M) R$ XX,XX</p>
              <p class="price">(G) R$ XX,XX</p>
            </div>
          </div>
        </div>
        <div class="drinks-section">
          <h3>Bebidas</h3>
          <div>
            <h4>Sample Option</h4>
            <p>Description</p>
            <div class="price-row">
              <p class="price">(U) R$ XX,XX</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-gallery"></section>
      <section class="section-about-us"></section>
      <footer class="section-contact"></footer>
    </div>
  )
}

export default landingPage
