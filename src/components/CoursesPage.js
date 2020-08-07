import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./common/CourseList";
import { Link } from "react-router-dom";
import * as authorApi from "../api/authorApi";

function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getCourses().then((_courses) => {
      authorApi.getAuthors(_courses.authorId).then((_authorNames) => {
        setAuthors(_authorNames);
        setCourses(_courses);
      });
    });
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to="/course">
        Add Course
      </Link>
      <CourseList courses={courses} authors={authors}></CourseList>
    </>
  );
}

export default CoursesPage;
