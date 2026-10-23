import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VortexGovernanca from '../components/vortexGovernanca/VortexGovernanca';
import VortexCadastro from '../components/vortexCadastro/VortexCadastro';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VortexGovernanca />} />
        <Route path="/governanca" element={<VortexGovernanca />} />
        <Route path="/cadastro" element={<VortexCadastro />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
