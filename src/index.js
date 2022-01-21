import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Router from './router';
import { stopReportingRuntimeErrors } from "react-error-overlay";

if (process.env.NODE_ENV === "development") {
  stopReportingRuntimeErrors(); // disables error overlays
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);
