import PostScreen from '../screens/PostScreen';
import React from 'react';
import HomeScreen from "../screens/HomeScreen";
import {
  Routes,
  Route
} from "react-router-dom";

export default function Navigator() {
    return (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path=":name" element={<PostScreen />} />
        </Routes>
    );
  }
