import ListAgents from '@components/Agents';
import BookAnAppointment from '@components/Appointment/Book';
import Welcome from '@components/Welcome';
import '@styles/index.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

type Props = {
  tenant:string;
}

export default function App({tenant }: Props) {
  console.log('tenent', tenant)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/agents" element={<ListAgents />}></Route>
        <Route path="/book-an-appointment" element={<BookAnAppointment />}></Route>
      </Routes>
    </BrowserRouter>
  )
}