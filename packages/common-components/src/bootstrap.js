import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("customize-id-common-components"));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
