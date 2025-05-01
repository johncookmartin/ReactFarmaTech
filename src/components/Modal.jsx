import React from 'react';
import './styles/modal.css';

const Modal = ({ isOpen, setIsOpen, closeModal: externalClose, children }) => {
  const close = externalClose || (() => setIsOpen(false));

  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={close}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
            <button className="modal-close" onClick={close}>
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
