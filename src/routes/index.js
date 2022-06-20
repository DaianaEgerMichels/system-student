import React from "react";
import { Routes as Switch, Route } from "react-router-dom";

import Appbar from "../components/Appbar";
import ListStudents from "../components/ListStudents";
import Student from "../components/Student";

function Routes() {
  return (
    <>
      <Appbar />
      <Switch>
        <Route exact path="/" element={<Student />} />
        <Route exact path="/students" element={<ListStudents />} />
      </Switch>
    </>
  );
}

export default Routes;