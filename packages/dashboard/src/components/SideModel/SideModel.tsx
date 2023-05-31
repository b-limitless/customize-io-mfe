
import React from 'react';
import styles from "./model.module.scss";
import CloseSVG from '../../assets/svg/close.svg';


interface SideModeInterface {
  children: React.ReactNode;
}



export default function SideModel({ children }: SideModeInterface) {
  return (
    <div className={styles.model}>
      <div className={styles.model__side}>
        <div className={styles.close}>
          <CloseSVG />
        </div>
        {children}
      </div>
    </div>
  )
}