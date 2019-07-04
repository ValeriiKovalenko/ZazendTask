import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ postCommentsArr, currentPost, img, exitModal }) => {
  const singleComment = postCommentsArr.map(el => <li>{el.body}</li>);
  return (
    <output className={styles.modalWindow} onClick={exitModal}>
      <div className={styles.mainInfo}>
        <img className={styles.image} src={img} alt="modalImg" />
        <div className={styles.sideText}>
          <h2 className={styles.title}>{currentPost.title}</h2>

          <p className={styles.text}>{currentPost.body}</p>

          <ul className={styles.coments}>Coments:{singleComment}</ul>
        </div>
      </div>
    </output>
  );
};

export default Modal;
