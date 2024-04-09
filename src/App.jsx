import "./App.css";
import { useState } from "react";
import { Form } from "./components/form";
import { User } from "./data/user";

function App() {
  const [userData, setUserData] = useState(User);

  return <Form userData={userData} setUserData={setUserData} />;
}

export default App;
