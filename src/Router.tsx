import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coins from './routes/Coins';
import Coin from './routes/Coin';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId" element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}