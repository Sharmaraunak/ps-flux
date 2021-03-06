const courses = [
  {
    id: 1,
    title: "React-js Fundamentals",
    slug: "framework-design",
    authorId: 1,
    category: "Javascript",
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    slug: "language ",
    authorId: 2,
    category: "Javascript",
  },
  {
    id: 3,
    title: "HTML Fundamentals",
    slug: "Web Components",
    authorId: 3,
    category: "Javascript",
  },
  {
    id: 4,
    title: "React-js",
    slug: "framework-design",
    authorId: 1,
    category: "JSX",
  },
  {
    id: 5,
    title: "Fundamentals",
    slug: "design",
    authorId: 2,
    category: "CSS",
  },
];

const authors = [
  {
    id: 1,
    name: "Raunak Sharma",
  },
  {
    id: 2,
    name: "Om Prakash",
  },
  {
    id: 3,
    name: "Tripti Singh",
  },
];

const newCourse = {
    id: null,
    title: "",
    authorId: null,
    category: ""
};

module.exports = {
    newCourse,
    authors,
    courses
}