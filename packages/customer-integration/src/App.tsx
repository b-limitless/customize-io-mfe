import React, {useState} from 'react';
import '@styles/index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '@components/Welcome';
import ListAgents from '@components/Agents';
import BookAnAppointment from '@components/Appointment/Book';
import { Link } from 'react-router-dom';
import { componentEnum, componentType } from './components/type';

type Props = {}



export default function App({ }: Props) {
  const [selectedComponent, setSeletedComponent] = useState<componentType>('welcome');

  if(selectedComponent === 'welcome') {
    return <Welcome selectedComponent={selectedComponent} setSeletedComponent={setSeletedComponent}/>
  }

  if(selectedComponent === 'agents') {
    return <ListAgents selectedComponent={selectedComponent} setSeletedComponent={setSeletedComponent}/>
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