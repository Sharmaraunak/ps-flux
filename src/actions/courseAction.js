import dispatcher from "../appDispatcher";
import * as CourseApi from "../api/courseApi";
import actionTypes from "./actionTypes";
import { toast } from "react-toastify";


export const saveCourse = (course) => {
  return CourseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: course.id ? actionTypes.UPDATE_COURSE: actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
};

export const loadCourses = () => {
  return CourseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses,
    });
  });
};

export const deleteCourse = (id) => {
  return CourseApi.deleteCourse(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_COURSE,
      id:id,
    });
    toast.success("Course Deleted")
  });
};


