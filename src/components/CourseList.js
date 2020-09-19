import React from "react";
import { Link } from "react-router-dom";

const CourseList = ({ courses }) => {
  return (
    <table className=" table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Title</th>
          <th>Author ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => {
          return (
            <tr key={course.id}>
              <td>
                <Link to={"/manage/" + course.slug}>{course.title}</Link>
              </td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CourseList;
