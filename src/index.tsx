import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/Main';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Main/>
        </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
);