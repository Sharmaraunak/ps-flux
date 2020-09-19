import React from "react";
import TextInput from "./common/TextInput";

const CourseForm = (props) => {
  return (
    <form>
      <TextInput
        id="title"
        label="Title"
        name="title"
        onChange={props.onChange}
        value={props.course.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            type="text"
            name="authorId"
            className="form-control"
            onChange={props.onChange}
            value={props.course.authorId || ""}
          >
            <option value="1">Raunak Sharma</option>
            <option value="2">Om Prakash</option>
            <option value="3">Tripti Singh</option>
          </select>
        </div>
      </div>

      <TextInput
        id="category"
        label="Category"
        name="category"
        onChange={props.onChange}
        value={props.course.category}
      />

      <input
        type="submit"
        name="submit"
        id="submit"
        value="save"
        className="btn btn-success"
      />
    </form>
  );
};

export default CourseForm;
