import React, { useState } from 'react';
import NetWorkSVG from '@assets/icons/network.svg';
import WifiSVG from '@assets/icons/wifi.svg';
import BatteriesSVG from '@assets/icons/batteries.svg';
import BackIcon from '@assets/icons/back.svg';
import QuestionSVG from '@assets/icons/question.svg';
import SquireAvtar from '@assets/icons/squire-avatar.svg'
import Search from '@assets/icons/search.svg'
import { Input } from '@pasal/cio-component-library';
import Button from '@components/common/Button/Button';
import Template from '@components/Welcome/Template';
import DefaultTemplate from '@components/common/Screen/Default';

import styles from './list.module.scss';


type Props = {}

export default function ListAgents({ }: Props) {
  const count = new Array(5).fill(0);
  const data: any = [];
  const [userData, setUserData] = useState([{ hello: 'world' }]);
  return (
    <DefaultTemplate rightIcon={<QuestionSVG />}>
      <div className={styles.search}>
        <div className={styles.form}><input className={styles.search__input} type='text' placeholder='Searh...' /></div>
        <button className={styles.search__btn}>
          <Search />
        </button>
      </div>

      <div className={styles.empty__result}>
        <span className={styles.title}>No results found</span>
      </div>
      {/* <div className={styles.agents}>
        {count.map((item) => <Template data={userData} addStyles={{ position: 'relative' }} loading={false} />)}
      </div> */}
    </DefaultTemplate>
    // <div className={styles.list__agents}>
    //   <div className={styles.row}>
    //     <div className={styles.time}>9:41</div>
    //     <div className={styles.indicators}>
    //       <NetWorkSVG />
    //       <WifiSVG />
    //       <BatteriesSVG />
    //     </div>
    //   </div>

    //   <div className={styles.navigation}>
    //     <BackIcon />
    //     <div className={styles.title}>
    //       Select an agent
    //     </div>
    //     <QuestionSVG />
    //   </div>


    // </div>
  )
}