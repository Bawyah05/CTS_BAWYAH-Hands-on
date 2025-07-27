import React from 'react';
import Post from './Post'; // Optional if you use Post class

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  // Step 6: loadPosts() method
  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const postObjects = data.map(p => new Post(p.id, p.title, p.body));
        this.setState({ posts: postObjects });
      })
      .catch((err) => {
        this.setState({ error: err });
      });
  };

  // Step 7: componentDidMount()
  componentDidMount() {
    this.loadPosts();
  }

  // Step 9: componentDidCatch()
  componentDidCatch(error, info) {
    alert("Something went wrong: " + error);
  }

  // Step 8: render()
  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h2>Error loading posts.</h2>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
