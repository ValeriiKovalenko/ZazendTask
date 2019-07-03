import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ postCommentsArr, currentPost, img }) => {
    console.log(postCommentsArr);

    //   fetch('https://jsonplaceholder.typicode.com/photos')
    //     .then(response => response.json())
    //     .then(image => console.log(image[0]));
    const singleComment = postCommentsArr.map(el => <li>{el.body}</li>);
    return (
        <output className={styles.modalWindow}>
            <img src={img} alt="modalImg" />
            <h2>{currentPost.title}</h2>
            <p>{currentPost.body}</p>
            <p>Coments:</p>
            <ul>{singleComment}</ul>
        </output>
    );
};

export default Modal;
