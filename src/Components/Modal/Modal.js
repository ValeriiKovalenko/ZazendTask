import React from 'react';

const Modal = ({ postCommentsArr, currentPost, img }) => {
  console.log(postCommentsArr);

  //   fetch('https://jsonplaceholder.typicode.com/photos')
  //     .then(response => response.json())
  //     .then(image => console.log(image[0]));
  const singleComment = postCommentsArr.map(el => <li>{el.body}</li>);
  return (
    <div>
      <img src={img} alt="modalImg" />
      <h2>{currentPost.title}</h2>
      <p>{currentPost.body}</p>
      <p>Coments:</p>
      <ul>{singleComment}</ul>
    </div>
  );
};

export default Modal;
