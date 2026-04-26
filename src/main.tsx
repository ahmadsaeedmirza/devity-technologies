import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Import this
import App from "./App.tsx";
import "./index.css";
import ReactGA from "react-ga4";

// Initialize GA4
ReactGA.initialize("G-01TG7PFKVG");

createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);