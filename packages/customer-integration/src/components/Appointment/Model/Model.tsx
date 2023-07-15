import React, {ReactNode} from 'react';
import styles from './model.module.scss';

type Props = {
    children: ReactNode
}

export default function Model({children}: Props) {
  return (
    <div className={styles.model}>
        <div className={styles.items}>
            {children}
        </div>
    </div>
  )
}