import React, { useEffect } from "react"
import * as generalStyles from "../styles/general.module.scss"
import * as modalStyles from "../styles/modal.module.scss"

const ModalAlert = () => {
  const [closed, setClosed] = React.useState(false)

  const hideScroll = () => {
    if (!closed) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "visible"
    }
  }

  useEffect(() => {
    window.addEventListener("load", hideScroll())
  })

  const closeModal = () => {
    setClosed(true)
  }

  return (
    <div
      className={`${modalStyles.alertModal} ${
        closed ? modalStyles.hidden : modalStyles.visible
      }`}
    >
      <div className={`${modalStyles.modalContent}`}>
        <button
          className={`${modalStyles.closeBtn}`}
          onClick={closeModal}
          onKeyDown={closeModal}
        >
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

          <div
            role="button"
            tabIndex="0"
            className={`${modalStyles.gotItBtn}`}
            onClick={closeModal}
            onKeyDown={closeModal}
          >
            Entendido
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalAlert
