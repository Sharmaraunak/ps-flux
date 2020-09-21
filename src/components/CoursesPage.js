import React, { useState, useEffect } from "react";
import CourseStore from "../stores/courseStore";
import CourseList from "./CourseList";
import { loadCourses,deleteCourse } from "../actions/courseAction";

import { Link } from "react-router-dom";

const CoursesPage = () => {
  const [courses, setCourses] = useState(CourseStore.getCourses());

  useEffect(() => {
    CourseStore.addChangeListener(onChange);
    if (CourseStore.getCourses().length === 0) loadCourses();

    return () => CourseStore.removeChangeListener(onChange);
  }, []);

  const onChange = () => {
    setCourses(CourseStore.getCourses());
  };

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="manage">
        Add Course
      </Link>
      <CourseList courses={courses} deleteCourse={deleteCourse} />
    </>
  );
};

export default CoursesPage;
