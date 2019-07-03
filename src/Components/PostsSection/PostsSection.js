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
    console.log('idPost.id: ', idPost);
    const postCommentsArr = this.state.comments.filter(
      el => el.postId === Number(idPost),
    );

    console.log('postCommetstsArr: ', postCommentsArr);

    const currentPost = this.state.posts.find(el => el.id === Number(idPost));
    const currentPhotos = this.state.photos.filter(
      el => el.id === Number(idPost),
    );

    // console.log('currentPost :', currentPost);
    this.setState({
      postCommentsArr,
      img,
      currentPost,
      currentPhotos,

      isOpenModal: true,
    });
  };

  render() {
    const {
      posts,
      photos,
      img,
      // coments,
      postCommentsArr,
      currentPost,
      isOpenModal,
      currentPhotos,
    } = this.state;

    // console.log('viiiisible ', this.state.visiblePosts);
    // function addMorePosts() {
    //   let x = x + 10;
    //   setState(visiblePosts: cuttedPosts)
    // }
    posts.length = this.state.length;

    console.log('LENGTH: ', this.state.length);
    // console.log('11111:  ', currentPhotos);

    const cuttedPosts = this.state.posts.slice(0, 5);
    console.log('AAAAAA: ', cuttedPosts);
    return (
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
        <button
          onClick={() => {
            alert('YEE');
          }}
        >
          Add more
        </button>
        {isOpenModal && (
          <Modal
            currentPost={currentPost}
            postCommentsArr={postCommentsArr}
            img={img}
          />
        )}
      </section>
    );
  }
}
