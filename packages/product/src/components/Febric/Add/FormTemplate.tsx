import React, { ReactNode } from "react";
import { Button, Input, Select, MultipleSelectChip, TextArea, InputAdornments } from 'components/ComponentsApp';
import styles from "./add-febric.module.scss";


type Props = {
    children: ReactNode
}

export default function FormTemplate({ children }: Props) {
    return (
        <div className={styles.addfebric__container}>
            <div className={styles.form__container}>
                <div className={styles.row}>
                    <div className={styles.title}>Proudct - Febric - Add</div>
                </div>
                <div className={styles.form__section}>
                    {children}

                    <div className={`${styles.row} ${styles.button__row}`}>
                        <div className={styles.actions}>
                            <Button variant="primary" text="Next" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}