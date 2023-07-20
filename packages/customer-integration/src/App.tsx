import React, {useState} from 'react';
import '@styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '@components/Welcome';
import ListAgents from '@components/Agents';
import BookAnAppointment from '@components/Appointment/Book';
import { Link } from 'react-router-dom';

type Props = {}

enum componentEnum  {
  welcome='welcome',
  agents='agents', 
  bookAnAppointment='bookAnAppointment'
}

type componentType = `${componentEnum}`; 

export default function App({ }: Props) {
  const [selectedComponent, setSeletedComponent] = useState<componentType>('welcome');

  if(selectedComponent === 'welcome') {
    return <Welcome/>
  }

  return null;

  // return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Welcome />}></Route>
    //     <Route path="/agents" element={<ListAgents />}></Route>
    //     <Route path="/book-an-appointment" element={<BookAnAppointment />}></Route>
    //   </Routes>
    // </BrowserRouter>


  // )
}