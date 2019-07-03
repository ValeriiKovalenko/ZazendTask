import React from 'react';
import styles from './Post.module.css';

const Post = ({ posts, zoomArticle, currentPhotos }) => {
  // const randomNumbers = Math.floor(Math.random() * 100);
  // console.log('CURRENT PHOTOS: ', currentPhotos);
  // const img = `https://picsum.photos/id/${randomNumbers}/200/300`;
  const img = id => `https://picsum.photos/id/${id}/300/300`;

  return (
    <article
      className={styles.article}
      onClick={() => zoomArticle(posts.id, img(posts.id))}
      data-id={posts.id}
    >
      <img src={img(posts.id)} alt="articleImage" />
      <h3 data-id={posts.id}>{posts.title} </h3>
      <p data-id={posts.id}>{posts.body}</p>
    </article>
  );
};

export default Post;
