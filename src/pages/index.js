import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/general.scss"
import * as heroStyles from "../styles/hero-section.module.scss"

const landingPage = () => {
  return (
    <div>
      <header className={heroStyles.heroSection}>
        <nav className={`${heroStyles.container} ${heroStyles.navBar}`}>
          <StaticImage
            src="../images/cof-logo-cropped-compressed.png"
            alt="Contra o Filé Logo"
            layout="constrained"
            className={heroStyles.logoImg}
          />

          <ul className={heroStyles.mainNav}>
            <li>
              <a href="#" className={`${heroStyles.btn} ${heroStyles.navBtn}`}>
                Cardápio
              </a>
            </li>
            <li>
              <a href="#" className={`${heroStyles.btn} ${heroStyles.navBtn}`}>
                Galeria
              </a>
            </li>
            <li>
              <a href="#" className={`${heroStyles.btn} ${heroStyles.navBtn}`}>
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="#" className={`${heroStyles.btn} ${heroStyles.navBtn}`}>
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className={heroStyles.heroTextContainer}>
          <div className={heroStyles.heroText}>
            <h1>
              Saudável. Delicioso.
              <span className={heroStyles.headingAccent}> Vegano.</span>
            </h1>
            <p>Uma opção saudável e acessível para todos.</p>
            <a className={`${heroStyles.btn} ${heroStyles.ctaBtn}`} href="#">
              Tô com fome
            </a>
          </div>
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

      <section class="section-gallery">
        <h2>Galeria</h2>
        <ul class="dishes-showcase">
          <li>Imagem #1</li>
          <li>Imagem #2</li>
          <li>etc</li>
        </ul>
      </section>

      <section class="section-about-us">
        <div class="intro-section">
          <h2>Sobre Nós</h2>
          <p class="intro-copy">
            O Contra o Filé é um restaurante de comida vegana que surgiu com a
            proposta de tornar comida saudável e sem produtos de origem animal
            acessível para todos.
          </p>
        </div>
        <div class="values-section">
          <h3>Nossos Valores</h3>
          <div class="values-row">
            <div class="business-value">
              <h4>COMIDA VEGANA SAUDÁVEL E FRESCA</h4>
              <p>
                Não importa se você começou ontem no veganismo ou já está no
                caminho a tempos, temos algo que vai agradar o seu paladar.
              </p>
            </div>
            <div class="business-value">
              <h4>PRODUTOS LOCAIS E ORGÂNICOS</h4>
              <p>
                Trabalhamos com produtos de agricultura familiar e incentivamos
                a produção de comida local.
              </p>
            </div>
            <div class="business-value">
              <h4>ACESSÍVEL À TODOS</h4>
              <p>
                Comida vegana não precisa ser cara e inacessível, o Contra o
                Filé tenta democratizar o acesso a esse tipo de produto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class="section-contact">
        <div class="contact-column">
          <h2>CONTATO</h2>
          <div class="contact-info">
            <p>Rua Alfredo Lopes 1717 - Jardim Macarengo</p>
            <p>São Carlos - SP, 13560460</p>
            <p>(16) 98765-1234 - Whatsapp</p>
          </div>
          <p>Atendemos presencialmente, via Whatsapp e aplicativo de entrega</p>
        </div>
        <div class="hours-column">
          <h2>HORÁRIOS</h2>
          <p>
            <i>Segunda - Sábado</i> | 11:00 - 15:00
          </p>
          <p>
            <i>Domingo</i> | Fechado
          </p>
        </div>
      </footer>
    </div>
  )
}

export default landingPage
