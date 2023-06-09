import { Button } from 'components/ComponentsApp';
import React, { ReactNode } from "react";
import { addFebricType } from "../../../types&Enums/febric";
import styles from "./add-febric.module.scss";

type Props = {
    children: ReactNode
    setStep: Function;
    step: addFebricType;
    nextStepHandler: Function;

}

export default function FormTemplate({ children, step, nextStepHandler }: Props) {

    return (
        <div className={styles.addfebric__container}>
            <div className={styles.form__container}>
                <div className={styles.row}>
                    <div className={styles.title}>Proudct - Febric - Add {step}</div>
                </div>
                <div className={styles.form__section}>
                    {children}
                    <div className={`${styles.row} ${styles.button__row}`}>
                        <div className={styles.actions}>
                            <Button variant="primary" text="Nexddt" onClick={() => nextStepHandler(step)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}