import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// import "../styles/general.scss"
import * as generalStyles from "../styles/general.module.scss"
import * as heroStyles from "../styles/hero-section.module.scss"
import * as menuStyles from "../styles/menu-section.module.scss"
import * as aboutUsStyles from "../styles/about-us.module.scss"
import * as contactStyles from "../styles/contact.module.scss"
import * as galleryStyles from "../styles/gallery.module.scss"

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
              <a
                href="#menu"
                className={`${heroStyles.btn} ${heroStyles.navBtn}`}
              >
                Cardápio
              </a>
            </li>
            <li>
              <a
                href="#gallery"
                className={`${heroStyles.btn} ${heroStyles.navBtn}`}
              >
                Galeria
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className={`${heroStyles.btn} ${heroStyles.navBtn}`}
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`${heroStyles.btn} ${heroStyles.navBtn}`}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <div className={heroStyles.heroTextContainer}>
          <div className={heroStyles.heroText}>
            <h1
              className={`${generalStyles.pageHeading} ${heroStyles.heroHeading}`}
            >
              Saudável. Delicioso.
              <span className={heroStyles.headingAccent}> Vegano.</span>
            </h1>
            <p className={heroStyles.heroCopy}>
              Uma opção saudável e acessível para todos.
            </p>
            <a
              className={`${heroStyles.btn} ${heroStyles.ctaBtn}`}
              href="#menu"
            >
              Tô com fome
            </a>
          </div>
        </div>
      </header>

      <section id="menu" className={menuStyles.container}>
        <h2
          className={`${generalStyles.sectionHeading} ${menuStyles.menuHeading}`}
        >
          Cardápio
        </h2>
        <nav>
          <ul className={menuStyles.menuNav}>
            <li>
              <a href="#packed-lunches" className={menuStyles.menuBtn}>
                Marmitas
              </a>
            </li>
            <li>
              <a href="#burgers" className={menuStyles.menuBtn}>
                Burgueres
              </a>
            </li>
            <li>
              <a href="#snacks" className={menuStyles.menuBtn}>
                Lanches
              </a>
            </li>
            <li>
              <a href="#smoothies" className={menuStyles.menuBtn}>
                Smoothies
              </a>
            </li>
            <li>
              <a href="#drinks" className={menuStyles.menuBtn}>
                Bebidas
              </a>
            </li>
          </ul>
        </nav>

        <div id="packed-lunches" className={menuStyles.menuSubsection}>
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
                <p className={menuStyles.optionDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
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

        <div id="burgers" className={menuStyles.menuSubsection}>
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

        <div id="snacks" className={menuStyles.menuSubsection}>
          <h3
            className={`${generalStyles.sectionSubheading} ${menuStyles.subsectionHeading}`}
          >
            Lanches
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

        <div id="smoothies" className={menuStyles.menuSubsection}>
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

        <div id="drinks" className={menuStyles.menuSubsection}>
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

      <section id="gallery" className={galleryStyles.container}>
        <ul className={galleryStyles.dishesShowcase}>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-001.jpg"
                alt="Tigela de brócolis com ervilhas e legumes"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-002.jpg"
                alt="Arroz integral com legumes"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-003.jpg"
                alt="Salada de grãos, legumes e frutas secas"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-004.jpg"
                alt="Salada com abacate e manga"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-005.jpg"
                alt="Salada de verduras com rabanete e tomate cereja"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-006.jpg"
                alt="Salada de verduras com brócolis"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-007.jpg"
                alt="Salada com watermelon radishes"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-008.jpg"
                alt="Salada com tofu e azeitona"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-009.jpg"
                alt="Suco de laranja com cenoura"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-010.jpg"
                alt="Smoothie de maçã com mirtilo"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-011.jpg"
                alt="Hamburguer vegano"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
          <li>
            <figure className={galleryStyles.dishContainer}>
              <StaticImage
                src="../images/gallery-012.jpg"
                alt="Porção de fritas"
                layout="constrained"
                className={galleryStyles.dishPhoto}
              />
            </figure>
          </li>
        </ul>
      </section>

      <section id="about-us" className={aboutUsStyles.container}>
        <h2
          className={`${generalStyles.sectionHeading} ${aboutUsStyles.aboutHeading}`}
        >
          Sobre Nós
        </h2>
        <div className={aboutUsStyles.introContainer}>
          <p>
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

      <footer id="contact" className={contactStyles.contactSection}>
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
