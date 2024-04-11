import "./App.css";
import { useState } from "react";
import { Form } from "./components/form";
import { User } from "./data/user";

function App() {
  const [user, setUser] = useState(User);
  return <Form user={user} setUser={setUser} />;
}

export default App;
