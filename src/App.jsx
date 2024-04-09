import "./App.css";
import { useState } from "react";
import { Form } from "./components/form";
import { User } from "./data/user";

function App() {
  return <Form user={User} />;
}

export default App;
