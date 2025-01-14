import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import routes from "./Routes/Routes";

const Root = createRoot(document.getElementById("root"));

Root.render(
    <StrictMode>
        <HelmetProvider>
            <RouterProvider router={routes} />
        </HelmetProvider>
    </StrictMode>
);
