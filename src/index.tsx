import React from "react";
import {createRoot} from "react-dom/client";
import { store} from "src/store/store";
import { Provider } from 'react-redux'
import {BrowserRouter} from "react-router-dom";
import App from "src/components/app/App";

const container = document.getElementById( "root" ) as HTMLDivElement;
const root = createRoot( container );

root.render(
    <React.StrictMode>
        <Provider store={ store }>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);