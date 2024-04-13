import "./styles/main.css";
import { useState } from "react";
import Form from "./components/form";
import MainPage from "./components/main-page";
import { User } from "./data/user";

function App() {
  const [user, setUser] = useState(User);
  return (
    <div className="app container">
      <Form user={user} setUser={setUser} />
      <MainPage user={user} setUser={setUser} />
    </div>
  );
}

export default App;
