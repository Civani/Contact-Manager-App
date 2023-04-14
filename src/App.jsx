import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import ViewContact from "./components/ViewContact";
import EditContact from "./components/EditContact";
//import Spinner from "./components/Spinner";


const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={"/contacts/list"} element={<ContactList/>}/>
        <Route path={"/contacts/add"} element={<AddContact/>}/>
        <Route path={"/contacts/view/:contactId"} element={<ViewContact/>}/>
        <Route path={"/contacts/edit/:contactId"} element={<EditContact/>}/>
      </Routes>
    </React.Fragment>
  );
};

export default App;