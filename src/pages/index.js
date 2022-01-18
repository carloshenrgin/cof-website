import React from "react"
import { StaticImage } from "gatsby-plugin-image"

// import "../styles/general.scss"
import * as generalStyles from "../styles/general.module.scss"
import * as heroStyles from "../styles/hero-section.module.scss"
import * as menuStyles from "../styles/menu-section.module.scss"
import * as aboutUsStyles from "../styles/about-us.module.scss"
import * as contactStyles from "../styles/contact.module.scss"
import * as galleryStyles from "../styles/gallery.module.scss"

import ModalAlert from "../components/modal-alert"
import Navbar from "../components/nav-bar"

const landingPage = () => {
  return (
    <div>
      <ModalAlert />
      <header className={heroStyles.heroSection}>
        <Navbar />

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
                  Arroz com Tofu e Legumes
                </h4>
                <p className={menuStyles.optionDescription}>
                  Arroz integral, gérmen de trigo, tofu, batata, brócolis,
                  abobrinha, cenoura, tomate cereja, pápríca
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$12,00</p>
                <p className={menuStyles.price}>(G) R$16,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Risoto de alho-poró
                </h4>
                <p className={menuStyles.optionDescription}>
                  Arroz integral, cebola, creme de castanha
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$13,00</p>
                <p className={menuStyles.price}>(G) R$18,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Strogonoff de palmito
                </h4>
                <p className={menuStyles.optionDescription}>
                  Leite de aveia, alho, cebola, palmito, champignon, molho de
                  tomate, mostarda, salsinha
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$13,00</p>
                <p className={menuStyles.price}>(G) R$18,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Strogonoff de berinjela
                </h4>
                <p className={menuStyles.optionDescription}>
                  Leite de aveia, alho, cebola, berinjela, molho de tomate,
                  mostarda, cheiro verde
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$13,00</p>
                <p className={menuStyles.price}>(G) R$18,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Lasanha à bolonhesa
                </h4>
                <p className={menuStyles.optionDescription}>
                  Massa de lasanha da casa, alho, cebola roxa, pimentão
                  vermelho, pimentão amarelo, molho de tomate, carne de soja
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$12,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Macarrão com espinafre
                </h4>
                <p className={menuStyles.optionDescription}>
                  Massa de macarrão da casa, molho de aveia, espinafre, cebola,
                  cebolinha, manjericão, tomate cereja
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$14,00</p>
                <p className={menuStyles.price}>(G) R$19,00</p>
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
                  COF 01
                </h4>
                <p className={menuStyles.optionDescription}>
                  Pão integral, hambúrguer de berinjela, cheddar vegano de
                  castanha de caju, alface e tomate
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$ 19,90</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  COF 02
                </h4>
                <p className={menuStyles.optionDescription}>
                  Pão integral, hambúrguer de berinjela, hambúrguer de soja,
                  cheddar vegano de castanha de caju, cebola refogada, pimentão,
                  alface e tomate
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$ 24,90</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  COF 03
                </h4>
                <p className={menuStyles.optionDescription}>
                  Pão integral, hambúrguer de soja, molho da casa, alface e
                  tomate
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$ 17,90</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  COF 04
                </h4>
                <p className={menuStyles.optionDescription}>
                  Pão integral, hambúrguer de soja, camada dupla de cheddar
                  vegano de castanha de caju, cebola refogada
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$ 21,90</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  COF 05
                </h4>
                <p className={menuStyles.optionDescription}>
                  Pão integral, hambúrguer de grão de bico, molho da casa,
                  cebola refogada, pimentão, alface e tomate
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$ 23,90</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  COF 06
                </h4>
                <p className={menuStyles.optionDescription}>
                  Pão integral, hambúrguer de feijão, molho da casa, alface e
                  tomate
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$ 23,90</p>
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
                  Torradas com tomates fritos e champignon
                </h4>
                <p className={menuStyles.optionDescription}>
                  Tomate grelhado com azeite, cogumelos refogados e torradas
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$8,00</p>
                <p className={menuStyles.price}>(G) R$12,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Muffin com mirtilos
                </h4>
                <p className={menuStyles.optionDescription}>
                  Muffins veganos com mirtilos
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$7,50</p>
                <p className={menuStyles.price}>(G) R$10,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Biscoito de banana e aveia
                </h4>
                <p className={menuStyles.optionDescription}>
                  Porção de biscoitos feitos com banana, aveia, castanha do pará
                  e uvas passas
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$8,00</p>
                <p className={menuStyles.price}>(G) R$14,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Queijo de castanha-de-caju
                </h4>
                <p className={menuStyles.optionDescription}>
                  Queijo feito a base de castanha-de-caju, óleo de coco e
                  rejuvelac
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$25,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Batatas fritas
                </h4>
                <p className={menuStyles.optionDescription}>
                  Batatas fritas acompanhadas de ketchup.
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$10,00</p>
                <p className={menuStyles.price}>(G) R$14,00</p>
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
                  Smoothie de morango com banana
                </h4>
                <p className={menuStyles.optionDescription}>
                  Banana, morango, aveia, castanha-do-pará, açúcar demerara,
                  gelo e água
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$16,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Smoothie de frutas vermelhas e beterraba
                </h4>
                <p className={menuStyles.optionDescription}>
                  Leite de coco, morango, amora, mirtilo, romã, beterraba e chia
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$16,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Smoothie roxo
                </h4>
                <p className={menuStyles.optionDescription}>
                  Leite vegetal de castanha, gengibre, polpa de maracujá, polpa
                  de açaí, banana, beterraba, mirtilo, amora, pistache
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$18,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Smoothie de banana
                </h4>
                <p className={menuStyles.optionDescription}>
                  Banana nanica, canela em pó, castanha do pará, linhaça
                  dourada, proteína isolada de soja, cacau em pó, essência de
                  baunilha, melado de cana
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$20,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Smoothie de abacaxi e espinafre
                </h4>
                <p className={menuStyles.optionDescription}>
                  Água de coco, abacaxi, espinafre, pepino, hortelã, gengibre,
                  açúcar demerara
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$16,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Smoothie de laranja e manga
                </h4>
                <p className={menuStyles.optionDescription}>
                  Suco de laranja, manga, cenoura, gengibre, açúcar demerara
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(U) R$16,00</p>
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
                  Suco de abacaxi e couve
                </h4>
                <p className={menuStyles.optionDescription}>
                  Pepino, maçã verde, abacaxi, gengibre, chia, couve
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$14,00</p>
                <p className={menuStyles.price}>(G) R$17,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Suco verde de couve, limão e pepino
                </h4>
                <p className={menuStyles.optionDescription}>
                  Couve, suco de limão, pepino, maçã, água de coco
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$14,00</p>
                <p className={menuStyles.price}>(G) R$17,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Suco de couve, beterraba e gengibre
                </h4>
                <p className={menuStyles.optionDescription}>
                  Couve, hortelã, beterraba, pepino, gengibre
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$13,00</p>
                <p className={menuStyles.price}>((G) R$15,00</p>
              </div>
            </div>

            <div className={menuStyles.orderOption}>
              <div>
                <h4
                  className={`${generalStyles.contentHeading} ${menuStyles.optionHeading}`}
                >
                  Suco de melancia e gengibre
                </h4>
                <p className={menuStyles.optionDescription}>
                  Melancia, linhaça, gengibre fresco
                </p>
              </div>
              <div className={menuStyles.priceRow}>
                <p className={menuStyles.price}>(P) R$13,00</p>
                <p className={menuStyles.price}>(G) R$15,00</p>
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
