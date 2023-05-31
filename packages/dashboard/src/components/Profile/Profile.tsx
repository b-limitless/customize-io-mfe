import { Button } from 'components/ComponentsApp';
import React from 'react';
import AvatarPNG from '../../assets/img/avatar-1.png';
import SideModel from '../SideModel';
import styles from './profile.module.scss';


type Props = {}


export default function Profile({ }: Props) {
  return (
    <SideModel>
      {/* Content for the side model profile */}
      <div className={styles.profile__container}>
        <div className={styles.avatar__actions}>
          <div className={styles.avatar}>
            <img src={AvatarPNG} alt='' />
          </div>
          <div className={styles.actions}>
            <Button variant='primary' text='Upload Image' />
            <Button variant='light' text='Delete' />
          </div>
        </div>
        <div className={styles.personal__security}>
          <div className={styles.tab__container}>

           <input data-name='personal-info' type='radio' name='active-tab' id='personal-info' hidden className={styles.tab__option__input}/>
            <label htmlFor='personal-info'>
              <span className={styles.item}>PERSONAL INFO</span>
            </label>
            

            <input data-name='security' type='radio' name='active-tab' id='security' hidden className={styles.tab__option__input}/>
            <label htmlFor='security'>
              <span className={styles.item}>SECURITY</span>
            </label>
            

            <div className={styles.tab__contents}>
              <div className={styles.item} id='content-personal-info' data-name='personal-info'>
                Personal Info Content
              </div>
              <div className={styles.item} id='content-security' data-name='security'>
                Security content
              </div>
            </div>
          </div>
        </div>

        <div className={styles.actions__bottom}>
              <Button variant='primary' text='Update' />
        </div>
      </div>
    </SideModel>
  )
}