import React, { useState, useEffect } from "react";
import CourseForm from "./CourseForm";
import { toast } from "react-toastify";
//wildCard Import
import  CourseStore from '../stores/courseStore';
import * as  courseAction from "../actions/courseAction";

const ManageCoursesPage = (props) => {
  const [errors, setErrors] = useState({});

  const [ courses, setCourses] = useState(CourseStore.getCourses());

  const [course, setCourse] = useState({
    id: null,
    title: "",
    category: "",
    authorId: null,
    slug: "",
  });

  useEffect(() => {
    CourseStore.addChangeListener(onChange)
    const slug = props.match.params.slug;
    if(courses.length === 0){
      courseAction.loadCourses();
    }
    else if (slug) {
     setCourse(CourseStore.getCourseBySlug(slug));
    }
    return () => CourseStore.removeChangeListener(onChange);
  }, [courses.length,props.match.params.slug]);


  const onChange = () =>{
    setCourses(CourseStore.getCourses());
  }



  const handleChange = ({ target }) => {
    setCourse({ ...course, [target.name]: target.value });
  };

  const formIsValid = () => {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);

    return Object.keys(_errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault(); //keeps away from posting to server
    if (!formIsValid()) return;
    courseAction.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  };

  return (
    <>
      <h2>Manage Courses</h2>
      <CourseForm
        errors={errors}
        course={course}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default ManageCoursesPage;
