import React from "react";

function CourseDetails() {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/20201" },
  ];

  return (
    
    <div style={{ borderLeft: "4px solid green", paddingLeft: "60px" }}>
      <h2 style={{ fontWeight: "bold" }}>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <h3 style={{ fontWeight: "bold" }}>{course.name}</h3>
          <h4>{course.date}</h4>
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;
