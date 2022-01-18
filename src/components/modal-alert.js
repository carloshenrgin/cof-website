import React, { useEffect } from "react"
import * as generalStyles from "../styles/general.module.scss"
import * as modalStyles from "../styles/modal.module.scss"

const ModalAlert = () => {
  useEffect(() => {
    var modal = document.getElementsByClassName(`${modalStyles.alertModal}`)
    var close = document.getElementsByClassName(`${modalStyles.closeBtn}`)
    var gotIt = document.getElementsByClassName(`${modalStyles.gotItBtn}`)
    document.body.style.overflow = "hidden"

    close[0].onclick = function () {
      modal[0].style.display = "none"
      document.body.style.overflow = "visible"
    }
    gotIt[0].onclick = function () {
      modal[0].style.display = "none"
      document.body.style.overflow = "visible"
    }
  })

  return (
    <div className={`${modalStyles.alertModal}`}>
      <div className={`${modalStyles.modalContent}`}>
        <button className={`${modalStyles.closeBtn}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${modalStyles.closeIcon}`}
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

        <div className={`${modalStyles.modalBody}`}>
          <h2
            className={`${generalStyles.sectionHeading} ${modalStyles.modalHeading}`}
          >
            COVID-19
          </h2>
          <p className={`${modalStyles.modalText}`}>
            Devido à pandemia, temos atendido apenas via delivery. Quando a
            situação se normalizar voltaremos a atender presencialmente.
          </p>
          {/* <button className={`${modalStyles.gotItBtn}`}>
            <span className={`${modalStyles.btnText}`}>Entendido</span>
          </button> */}
          <a className={`${modalStyles.gotItBtn}`} href="/#">
            Entendido
          </a>
        </div>
      </div>
    </div>
  )
}

export default ModalAlert
