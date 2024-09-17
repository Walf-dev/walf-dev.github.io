import React from "react";
import Allmentors from "pages/Allmentors";
import EduviCourses from "pages/EduviCourses";
import EduviJoinAsTeacher from "pages/EduviJoinAsTeacher";
import EduviShop from "pages/EduviShop";
import Singlementordetails from "pages/Singlementordetails";
import EduviCoursesPricing from "pages/EduviCoursesPricing";
import EduviCoursesDetails from "pages/EduviCoursesDetails";
import Portfolio from "pages/Portfolio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/eduvicoursesdetails" element={<EduviCoursesDetails />} />
        <Route path="/eduvicoursespricing" element={<EduviCoursesPricing />} />
        <Route path="/singlementordetails" element={<Singlementordetails />} />
        <Route path="/eduvishop" element={<EduviShop />} />
        <Route path="/eduvijoinasteacher" element={<EduviJoinAsTeacher />} />
        <Route path="/eduvicourses" element={<EduviCourses />} />
        <Route path="/allmentors" element={<Allmentors />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
