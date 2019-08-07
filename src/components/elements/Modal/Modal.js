import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkBtn from '../LinkBtn/LinkBtn';
import styles from './modal.module.css';

const Modal = ({ children, title, OpenBtn }) => {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);
  const onOverlayClick = e =>
    e.target.className === overlayClass ? closeModal() : null;
  const onEscPress = e => (e.keyCode === 27 && modalShow ? closeModal() : null);

  useEffect(() => {
    window.addEventListener('keydown', onEscPress);
    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  });

  const overlayClass = modalShow ? styles.open : styles.overlay;

  return (
    <>
      <OpenBtn openModal={openModal} />
      {modalShow && (
        <div className={overlayClass} onClick={onOverlayClick}>
          <section className={styles.content}>
            <div className={styles.header}>
              <h2 className={styles.title}>{title}</h2>
              <LinkBtn onClick={closeModal}>
                <FontAwesomeIcon icon='times' size='1x' />
                <span className='visually-hidden'>close</span>
              </LinkBtn>
            </div>
            {React.Children.map(children, child =>
              React.cloneElement(child, { closeModal })
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default Modal;
