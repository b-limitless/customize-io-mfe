import ListAgents from '@components/Agents';
import BookAnAppointment from '@components/Appointment/Book';
import Welcome from '@components/Welcome';
import '@styles/index.scss';
import React, { useState } from 'react';
import { componentType } from './components/type';
type Props = {}

export default function App({ }: Props) {
  const [selectedComponent, setSeletedComponent] = useState<componentType>('welcome');
  if(selectedComponent === 'welcome') {
    return <Welcome selectedComponent={selectedComponent} setSeletedComponent={setSeletedComponent}/>
  }
  if(selectedComponent === 'agents') {
    return <ListAgents selectedComponent={selectedComponent} setSeletedComponent={setSeletedComponent}/>
  }
  if(selectedComponent === 'bookAnAppointment' || selectedComponent === 'makeACall' ) {
    return <BookAnAppointment selectedComponent={selectedComponent} setSeletedComponent={setSeletedComponent}/>
  }
  return null;
}