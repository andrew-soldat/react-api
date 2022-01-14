import React from 'react'

const Modal = ({children, openModal, setOpenModal}) => {
	

	return (
      <div className={openModal ? "modal open" : "modal"} onClick={() => setOpenModal(false)}>
			<div className="modal__wrapper">
				<div className="modal__content" onClick={(e) => e.stopPropagation(e)}>
					<div className="modal__close" onClick={() => setOpenModal(false)}>✖</div>
					{children}
				</div>
			</div>
      </div>
   );
}

export default Modal;