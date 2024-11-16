import React from "react";
import { createRoot } from "react-dom/client";
import NoteApp from "./components/NoteApp";
import 'materialize-css/dist/css/materialize.min.css';
import './styles/style.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';




const root = createRoot(document.getElementById('root'));
root.render(<NoteApp />);