import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// import "../styles/general.scss"
import * as generalStyles from "../styles/general.module.scss"
import * as heroStyles from "../styles/hero-section.module.scss"
import * as menuStyles from "../styles/menu-section.module.scss"
import * as aboutUsStyles from "../styles/about-us.module.scss"
import * as contactStyles from "../styles/contact.module.scss"

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
            <h1 className={generalStyles.pageHeading}>
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

      <section class="section-menu" className={menuStyles.container}>
        <h2
          className={`${generalStyles.sectionHeading} ${menuStyles.menuHeading}`}
        >
          Cardápio
        </h2>
        <nav>
          <ul className={menuStyles.menuNav}>
            <li>
              <a href="#" className={menuStyles.menuBtn}>
                Marmitas
              </a>
            </li>
            <li>
              <a href="#" className={menuStyles.menuBtn}>
                Burgueres
              </a>
            </li>
            <li>
              <a href="#" className={menuStyles.menuBtn}>
                Porções
              </a>
            </li>
            <li>
              <a href="#" className={menuStyles.menuBtn}>
                Smoothies
              </a>
            </li>
            <li>
              <a href="#" className={menuStyles.menuBtn}>
                Bebidas
              </a>
            </li>
          </ul>
        </nav>

        <div class="packed-lunch-section" className={menuStyles.menuSubsection}>
          <h3
            className={`${generalStyles.sectionSubheading} ${menuStyles.subsectionHeading}`}
          >
            Marmitas
          </h3>

          <div className={menuStyles.optionsGrid}>
            {/* Menu Option */}
            {/* <div className={menuStyles.orderOption}>
                  <div >
                    <h4
                      className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                    >
                      Sample Option
                    </h4>
                    <p className={menuStyles.optionDescription}>Description</p>
                  </div>
                  <div className={menuStyles.priceRow}>
                    <p className={menuStyles.price}>(P) R$ XX,XX</p>
                    <p className={menuStyles.price}>(G) R$ XX,XX</p>
                  </div>
                </div> */}

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Sample Option
                </h4>
                <p className={menuStyles.optionDescription}>Description</p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$ XX,XX</p>
                <p className={menuStyles.price}>(G) R$ XXX,XX</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Sample Option
                </h4>
                <p className={menuStyles.optionDescription}>Description</p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$ XX,XX</p>
                <p className={menuStyles.price}>(G) R$ XX,XX</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Sample Option
                </h4>
                <p className={menuStyles.optionDescription}>Description</p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$ XX,XX</p>
                <p className={menuStyles.price}>(G) R$ XX,XX</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Sample Option
                </h4>
                <p className={menuStyles.optionDescription}>Description</p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$ XX,XX</p>
                <p className={menuStyles.price}>(G) R$ XX,XX</p>
              </div>
            </div>
          </div>
        </div>

        <div class="burger-section" className={menuStyles.menuSubsection}>
          <h3
            className={`${generalStyles.sectionSubheading} ${menuStyles.subsectionHeading}`}
          >
            Burgueres
          </h3>

          <div className={menuStyles.optionsGrid}>
            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Sample Option
                </h4>
                <p className={menuStyles.optionDescription}>Description</p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$ XX,XX</p>
                <p className={menuStyles.price}>(G) R$ XX,XX</p>
              </div>
            </div>
          </div>
        </div>

        <div class="appetizer-section" className={menuStyles.menuSubsection}>
          <h3
            className={`${generalStyles.sectionSubheading} ${menuStyles.subsectionHeading}`}
          >
            Porções
          </h3>

          <div className={menuStyles.optionsGrid}>
            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Sample Option
                </h4>
                <p className={menuStyles.optionDescription}>Description</p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$ XX,XX</p>
                <p className={menuStyles.price}>(G) R$ XX,XX</p>
              </div>
            </div>
          </div>
        </div>

        <div class="smoothies-section" className={menuStyles.menuSubsection}>
          <h3
            className={`${generalStyles.sectionSubheading} ${menuStyles.subsectionHeading}`}
          >
            Smoothies
          </h3>

          <div className={menuStyles.optionsGrid}>
            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Sample Option
                </h4>
                <p className={menuStyles.optionDescription}>Description</p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$ XX,XX</p>
                <p className={menuStyles.price}>(G) R$ XX,XX</p>
              </div>
            </div>
          </div>
        </div>

        <div class="drinks-section" className={menuStyles.menuSubsection}>
          <h3
            className={`${generalStyles.sectionSubheading} ${menuStyles.subsectionHeading}`}
          >
            Bebidas
          </h3>

          <div className={menuStyles.optionsGrid}>
            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Sample Option
                </h4>
                <p className={menuStyles.optionDescription}>Description</p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$ XX,XX</p>
                <p className={menuStyles.price}>(G) R$ XX,XX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-gallery">
        <h2 className={generalStyles.sectionHeading}>Galeria</h2>
        <ul class="dishes-showcase">
          <li>Imagem #1</li>
          <li>Imagem #2</li>
          <li>etc</li>
        </ul>
      </section>

      <section class="section-about-us" className={aboutUsStyles.container}>
        <h2
          className={`${generalStyles.sectionHeading} ${aboutUsStyles.aboutHeading}`}
        >
          Sobre Nós
        </h2>
        <div className={aboutUsStyles.introContainer}>
          <p className={aboutUsStyles.introCopy}>
            O Contra o Filé é um restaurante de comida vegana que surgiu com a
            proposta de tornar comida saudável e sem produtos de origem animal
            acessível para todos.
          </p>
        </div>

        <div class="values-section">
          <h3
            className={`${generalStyles.sectionSubheading} ${aboutUsStyles.ourValues}`}
          >
            Nossos Valores
          </h3>
          <div className={aboutUsStyles.valuesRow}>
            <div>
              <h4
                className={`${generalStyles.contentHeading} ${aboutUsStyles.valueHeading}`}
              >
                COMIDA VEGANA SAUDÁVEL E FRESCA
              </h4>
              <p className={aboutUsStyles.valueText}>
                Não importa se você começou ontem no veganismo ou já está no
                caminho a tempos, temos algo que vai agradar o seu paladar.
              </p>
            </div>
            <div>
              <h4
                className={`${generalStyles.contentHeading} ${aboutUsStyles.valueHeading}`}
              >
                PRODUTOS LOCAIS E ORGÂNICOS
              </h4>
              <p className={aboutUsStyles.valueText}>
                Trabalhamos com produtos de agricultura familiar e incentivamos
                a produção de comida local.
              </p>
            </div>
            <div>
              <h4
                className={`${generalStyles.contentHeading} ${aboutUsStyles.valueHeading}`}
              >
                ACESSÍVEL À TODOS
              </h4>
              <p className={aboutUsStyles.valueText}>
                Comida vegana não precisa ser cara e inacessível, o Contra o
                Filé tenta democratizar o acesso a esse tipo de produto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer class="section-contact" className={contactStyles.contactSection}>
        <div className={contactStyles.container}>
          <div className={contactStyles.column}>
            <h2
              className={`${generalStyles.sectionHeading} ${contactStyles.columnHeading}`}
            >
              CONTATO
            </h2>
            <div className={contactStyles.contactInfo}>
              <p className={contactStyles.contactCopy}>
                Rua Alfredo Lopes 1717 - Jardim Macarengo
              </p>
              <p className={contactStyles.contactCopy}>
                São Carlos - SP, 13560460
              </p>
              <p className={contactStyles.contactCopy}>
                (16) 98765-1234 - Whatsapp
              </p>
            </div>
            <p className={contactStyles.contactCopy}>
              Atendemos presencialmente, via Whatsapp e aplicativo de entrega
            </p>
          </div>
          <div className={contactStyles.column}>
            <h2
              className={`${generalStyles.sectionHeading} ${contactStyles.columnHeading}`}
            >
              HORÁRIOS
            </h2>
            <p className={contactStyles.contactCopy}>
              <i>Segunda - Sábado</i> | 11:00 - 15:00
            </p>
            <p className={contactStyles.contactCopy}>
              <i>Domingo</i> | Fechado
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default landingPage
