import dispatcher from "../appDispatcher";
import * as CourseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export const saveCourse = (course) => {
  return CourseApi.saveCourse(course).then((savedCourse) => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_COURSE,
      course: savedCourse,
    });
  });
};

export const loadCourses = () => {
  return CourseApi.getCourses().then((_courses) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: _courses,
    });
  });
};
