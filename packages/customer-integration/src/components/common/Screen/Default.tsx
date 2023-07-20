import BackIcon from '@assets/icons/back.svg';
import BatteriesSVG from '@assets/icons/batteries.svg';
import NetWorkSVG from '@assets/icons/network.svg';
import WifiSVG from '@assets/icons/wifi.svg';
import React, { ReactNode, useState } from 'react';
import { getPrevousComponent } from '../../functions/getPreviousComponent';
import { commonTypes, componentEnum } from '../../type';
import styles from './default.module.scss';
type Props =commonTypes &  {
    children: ReactNode;
    rightIcon: ReactNode;
}
export default function DefaultTemplate({selectedComponent,setSeletedComponent, children, rightIcon }: Props) {
    const count = new Array(5).fill(0);
    const data: any = [];
    const [userData, setUserData] = useState([{ hello: 'world' }]);
    const getPreviousComponentName = () => {
        return getPrevousComponent(componentEnum, selectedComponent)
    }
    return (
        <div className={styles.list__agents}>
            <div className={styles.row}>
                <div className={styles.time}>9:41</div>
                <div className={styles.indicators}>
                    <NetWorkSVG />
                    <WifiSVG />
                    <BatteriesSVG />
                </div>
            </div>
            <div className={styles.navigation}>
                <BackIcon onClick={() => setSeletedComponent(getPreviousComponentName)}/>
                <div className={styles.title}>
                    Select an agent
                </div>
                {rightIcon}
            </div>
            {}
            {children}
        </div>
    )
}