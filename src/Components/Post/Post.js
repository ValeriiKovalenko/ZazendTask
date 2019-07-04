import React from 'react';
import styles from './Post.module.css';

const Post = ({ posts, zoomArticle }) => {
  const img = id => `https://picsum.photos/id/${id}/300/300`;

  return (
    <article
      className={styles.article}
      onClick={() => zoomArticle(posts.id, img(posts.id))}
      data-id={posts.id}
    >
      <img src={img(posts.id)} alt="articleImage" />
      <h3 className={styles.title} data-id={posts.id}>
        {posts.title}{' '}
      </h3>
      <p className={styles.text} data-id={posts.id}>
        {posts.body}
      </p>
    </article>
  );
};

export default Post;
