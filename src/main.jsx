import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import routes from "./Routes/Routes";
import { Slide, ToastContainer } from "react-toastify";

const Root = createRoot(document.getElementById("root"));

Root.render(
    <StrictMode>
        <HelmetProvider>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                limit={5}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Slide}
            />
            <RouterProvider router={routes} />
        </HelmetProvider>
    </StrictMode>
);
