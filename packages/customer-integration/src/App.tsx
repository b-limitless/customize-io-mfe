import React from 'react';
import '@styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '@components/Welcome';
import ListAgents from '@components/Agents';
import BookAnAppointment from '@components/Appointment/Book';
import { Link } from 'react-router-dom';

type Props = {}

export default function App({ }: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/welcome" element={<Welcome />}></Route>
        <Route path="/agents" element={<ListAgents />}></Route>
        <Route path="/book-an-appointment" element={<BookAnAppointment />}></Route>
      </Routes>
    </BrowserRouter>
  )
}