import React from "react";

function BlogDetails() {
  const blogs = [
    {
      title: "React Learning",
      author: "Stephen Biz",
      content: "Welcome to learning React!",
    },
    {
      title: "Installation",
      author: "Schewzdenier",
      content: "You can install React from npm.",
    },
  ];

  return (
    <div style={{ borderLeft: "4px solid green", paddingLeft: "60px" }}>
      <h2 style={{ fontWeight: "bold" }}>Blog Details</h2>
      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <div key={index}>
            <h3>{blog.title}</h3>
            <h4 style={{ fontWeight: "bold" }}>{blog.author}</h4>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No blog entries available.</p>
      )}
    </div>
  );
}

export default BlogDetails;
