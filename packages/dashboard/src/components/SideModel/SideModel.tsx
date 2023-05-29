
import React from 'react';
import styles from "./model.module.scss";
// import "./model.scss";


type Props = {}



export default function SideModel({}: Props) {
  return (
    <div className={styles.model}>
      
      <div className='model--side'>
        Hello World
      </div>
    </div>
  )
}