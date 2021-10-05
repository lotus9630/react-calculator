import React from 'react';
import './Modal.css';

const Modal = ({ modalMessage }) => {
  return (
    <div className="modal-background">
      <section className="modal">
        <article className="modal-text" data-cy="modal">
          {modalMessage}
        </article>
      </section>
    </div>
  );
};

export default Modal;
