import React from "react";
import {createRoot} from "react-dom/client";
import { store} from "src/store/store";
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from "react-router-dom";
import App from "src/components/app/App";
import {ContextProvider} from "src/utils/ContextWrapper";

const container = document.getElementById( "root" ) as HTMLDivElement;
const root = createRoot( container );

root.render(
    <React.StrictMode>
        <Provider store={ store }>
            <ContextProvider>
                <Router>
                    <App/>
                </Router>
            </ContextProvider>
        </Provider>
    </React.StrictMode>
);