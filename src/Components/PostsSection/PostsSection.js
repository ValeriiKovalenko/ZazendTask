import React, { Component } from 'react';
import Post from '../Post/Post';
import Modal from '../Modal/Modal';
import styles from './PostSection.module.css';

export default class PostsSection extends Component {
  state = {
    posts: [],
    img: '',
    visiblePosts: [],
    currentPhotos: [],
    comments: [],
    postCommentsArr: [],
    currentPost: {},
    isOpenModal: false,
    length: 12,
  };

  componentDidMount() {
    this.getData();
    this.getComments();
    this.getPhotos();
  }

  getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(err => console.log(err));
  };

  getComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => this.setState({ comments: data }))
      .catch(err => console.log(err));
  };

  getPhotos = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => this.setState({ photos: data }))
      .catch(err => console.log(err));
  };

  zoomArticle = (idPost, img) => {
    const postCommentsArr = this.state.comments.filter(
      el => el.postId === Number(idPost),
    );

    const currentPost = this.state.posts.find(el => el.id === Number(idPost));
    const currentPhotos = this.state.photos.filter(
      el => el.id === Number(idPost),
    );

    this.setState({
      postCommentsArr,
      img,
      currentPost,
      currentPhotos,

      isOpenModal: true,
    });
  };

  exitModal = () => {
    this.setState({ isOpenModal: false });
  };

  render() {
    const {
      posts,
      img,
      postCommentsArr,
      currentPost,
      isOpenModal,
    } = this.state;

    posts.length = this.state.length;

    return (
      <>
        <section className={styles.section}>
          {posts.map(item => (
            <Post
              key={item.id}
              posts={item}
              zoomArticle={this.zoomArticle}
              postCommentsArr={this.postCommentsArr}
              currentPhotos={this.currentPhotos}
            />
          ))}

          {isOpenModal && (
            <Modal
              exitModal={this.exitModal}
              currentPost={currentPost}
              postCommentsArr={postCommentsArr}
              img={img}
            />
          )}
        </section>
        <button
          className={styles.button}
          onClick={() => {
            alert('Here you will fing pagination, soon:)');
          }}
        >
          Add more posts
        </button>
      </>
    );
  }
}
