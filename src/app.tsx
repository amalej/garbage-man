import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <div id="main">
    <Home />
  </div>
  // </React.StrictMode>
);
