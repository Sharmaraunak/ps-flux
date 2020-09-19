import React, { useState } from "react";
import CourseForm from "./CourseForm";

const ManageCoursesPage = (props) => {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    category: "",
    authorId: null,
    slug: "",
  });

  const handleChange = ({ target }) => {
    setCourse({ ...course, [target.name]: target.value });
  };

  return (
    <>
      <h2>Manage Courses</h2>
      <CourseForm course={course} onChange={handleChange} />
    </>
  );
};

export default ManageCoursesPage;
