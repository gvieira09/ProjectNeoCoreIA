import React from 'react';
import { Routes, Route } from 'react-router-dom';
import VortexCadastro from '../components/vortexCadastro/VortexCadastro';
import './App.css';

export default function App() {
  return (
    <div className="neocore-app-root">
      <Routes>
        <Route path="/" element={<VortexCadastro />} />
        <Route path="/contatos" element={<VortexCadastro />} />
        <Route path="*" element={<VortexCadastro />} />
      </Routes>
    </div>
  );
}
