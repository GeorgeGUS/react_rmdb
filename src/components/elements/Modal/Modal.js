import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkBtn from '../LinkBtn/LinkBtn';
import styles from './modal.module.css';

const Modal = ({ children, title, show, onClose }) => {
  const overlayClass = show ? styles.open : styles.overlay;
  const onOverlayClick = e => {
    if (e.target.className === overlayClass) {
      onClose(e);
    }
  };
  useEffect(() => {
    const onEscPress = e => (e.keyCode === 27 && show ? onClose() : null);
    window.addEventListener('keydown', onEscPress);
    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  });
  return (
    <div className={overlayClass} onClick={onOverlayClick}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span>{title}</span>
          <LinkBtn onClick={onClose}>
            <FontAwesomeIcon icon='times' size='1x' />
            <span className='visually-hidden'>close</span>
          </LinkBtn>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
