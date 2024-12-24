import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserContext from "./Context/UserContext.jsx";
// import Context from './Contexts/Context.jsx'

createRoot(document.getElementById("root")).render(
  <UserContext>
    <App />
  </UserContext>
);