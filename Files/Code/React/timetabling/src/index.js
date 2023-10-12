import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import MainCRUD from "./code/CRUD_main";
// import CRUDdisciplinas from "./code/CRUD_disciplinas";
// import CRUDprofessors from "./code/CRUD_professors";
// import CRUDrooms from "./code/CRUD_rooms";
// import CRUDstudents from "./code/CRUD_students";
import CRUDclass from "./code/CRUD_class";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <MainCRUD /> */}
    {/* <CRUDdisciplinas /> */}
    {/* <CRUDprofessors /> */}
    {/* <CRUDrooms /> */}
    {/* <CRUDstudents /> */}
    <CRUDclass />
  </React.StrictMode>
);
