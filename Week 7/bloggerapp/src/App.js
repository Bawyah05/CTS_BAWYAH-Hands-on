import React from "react";
import CourseDetails from "./CourseDetails";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "300px" }}>
      <CourseDetails />
      <BookDetails />
      <BlogDetails />
    </div>
  );
}

export default App;
