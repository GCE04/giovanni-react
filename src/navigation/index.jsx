import App from '../App';
import PostScreen from '../screens/PostScreen';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default function Navigator() {
    return (
      <React.StrictMode>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path=":name" element={<PostScreen />} />
        </Routes>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
