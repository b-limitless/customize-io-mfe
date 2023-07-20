import React, { useState } from 'react';
import Template from './Template';
type Props = {
  [x:string]:any
}

export default function Welcome({selectedComponent, setSeletedComponent }: Props) {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([{ hello: 'world' }]);

  const styles = {
    position:'fixed', 
    right: '1rem'
  }

  const count = new Array(3).fill(0); 

  return (
    <Template selectedComponent={selectedComponent} setSeletedComponent={setSeletedComponent} loading={loading} data={userData} addStyles={styles} welcome/>
  )
}