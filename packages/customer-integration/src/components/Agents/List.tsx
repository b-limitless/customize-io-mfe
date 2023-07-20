import React, { useState } from 'react';
import NetWorkSVG from '@assets/icons/network.svg';
import WifiSVG from '@assets/icons/wifi.svg';
import BatteriesSVG from '@assets/icons/batteries.svg';
import BackIcon from '@assets/icons/back.svg';
import QuestionSVG from '@assets/icons/question.svg';
import SquireAvtar from '@assets/icons/squire-avatar.svg'
import Search from '@assets/icons/search.svg'
import Button from '@components/common/Button/Button';
import Template from '@components/Welcome/Template';
import DefaultTemplate from '@components/common/Screen/Default';

import styles from './list.module.scss';


type Props = {
  [x:string]: any;
}
// 

export default function ListAgents({selectedComponent, setSeletedComponent }: Props) {
  const count = new Array(5).fill(0);
  const data: any = [];
  const [userData, setUserData] = useState([{ hello: 'world' }]);
  return (
    <DefaultTemplate rightIcon={<QuestionSVG />} selectedComponent={selectedComponent} setSeletedComponent={setSeletedComponent}>
      <div className={styles.search}>
        <div className={styles.form}><input className={styles.search__input} type='text' placeholder='Searh...' /></div>
        <button className={styles.search__btn}>
          <Search />
        </button>
      </div>
      {/* If no data is found show this ui */}
     
      {/* <div className={styles.empty__result}>
        <span className={styles.title}>No results found</span>
      </div> */}
      {/* If agents is avialabe then show this  */}
      <div className={styles.agents}>
        {count.map((item, i) => <Template key={`template-${i}`} selectedComponent={selectedComponent} setSeletedComponent={setSeletedComponent} data={userData} addStyles={{ position: 'relative' }} loading={false} />)}
      </div>
    </DefaultTemplate>
    
  )
}