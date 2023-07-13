import React from 'react';
import '@styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '@components/Welcome';
import ListAgents from '@components/Agents';
type Props = {}

export default function App({ }: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/agents" element={<ListAgents />}></Route>
      </Routes>
    </BrowserRouter>
  )
}