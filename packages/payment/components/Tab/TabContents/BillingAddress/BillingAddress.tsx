import React from 'react';
import styles from './billing-address.module.scss';

type Props = {};

const paymentDetails: Record<string, any> = {
    "billingAddress": {
        "firstName": "John",
        "lastName": "Doe",
        "addressLine1": "123 Main St",
        "addressLine2": "",
        "city": "Anytown",
        "state": "CA",
        "postalCode": "12345",
        "country": "USA"
    },
    "shippingAddress": {
        "firstName": "John",
        "lastName": "Doe",
        "addressLine1": "123 Main St",
        "addressLine2": "",
        "city": "Anytown",
        "state": "CA",
        "postalCode": "12345",
        "country": "USA"
    },
};

interface BillingRecordInterfae {
    objectKey: string;
    paymentDetail: any
}

interface EachRow {
    row: any;
    rowKey: string;
    i: number;
}

const EachRow = ({ row, rowKey, i }: EachRow) => {
    return <div className={styles.contents}>
        <div className={`${styles.row}  ${i % 2 !== 0 ? styles.shadow : styles.light}`}>
            <div className={styles.col}>{rowKey}</div>
            <div className={styles.col}>{row[rowKey]}</div>
        </div>
    </div>
}
const BillingRecord = ({ paymentDetail, objectKey }: BillingRecordInterfae) => {
    return <div className={styles.item}>
        <div className={styles.subject}>
            {objectKey}
        </div>
        {Object.keys(paymentDetail).map((rowKey, i) => <EachRow key={`row-${i}`} i={i} rowKey={rowKey} row={paymentDetail} />)}

        {/* <div className={styles.contents}>
        <div className={styles.row + ' ' + styles.light}>
            <div className={styles.col}>Bank Name</div>
            <div className={styles.col}>M and T Bank</div>
        </div>
    </div> */}
    </div>
}

export default function BillingAddress({ }: Props) {
    return (
        <div className={styles.templates}>
            {Object.keys(paymentDetails).map((key, i) => <BillingRecord objectKey={key} paymentDetail={paymentDetails[key]} key={`billingad-${i}`} />)}


            {/* <div className={styles.item}>
                <div className={styles.subject}>
                    REMIT TO:
                </div>
                <div className={styles.contents}>
                    <div className={styles.row + ' ' + styles.shadow}>
                        <div className={styles.col}>Bank Name</div>
                        <div className={styles.col}>M and T Bank</div>
                    </div>
                </div>
                <div className={styles.contents}>
                    <div className={styles.row + ' ' + styles.light}>
                        <div className={styles.col}>Bank Name</div>
                        <div className={styles.col}>M and T Bank</div>
                    </div>
                </div>
            </div> */}
            {/* <div className={styles.item}>
                <div className={styles.subject}>
                    REMIT TO:
                </div>
                <div className={styles.contents}>
                    <div className={styles.row + ' ' + styles.shadow}>
                        <div className={styles.col}>Bank Name</div>
                        <div className={styles.col}>M and T Bank</div>
                    </div>
                </div>
                <div className={styles.contents}>
                    <div className={styles.row + ' ' + styles.light}>
                        <div className={styles.col}>Bank Name</div>
                        <div className={styles.col}>M and T Bank</div>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.subject}>
                    REMIT TO:
                </div>
                <div className={styles.contents}>
                    <div className={styles.row + ' ' + styles.shadow}>
                        <div className={styles.col}>Bank Name</div>
                        <div className={styles.col}>M and T Bank</div>
                    </div>
                </div>
                <div className={styles.contents}>
                    <div className={styles.row + ' ' + styles.light}>
                        <div className={styles.col}>Bank Name</div>
                        <div className={styles.col}>M and T Bank</div>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.subject}>
                    REMIT TO:
                </div>
                <div className={styles.contents}>
                    <div className={styles.row + ' ' + styles.shadow}>
                        <div className={styles.col}>Bank Name</div>
                        <div className={styles.col}>M and T Bank</div>
                    </div>
                </div>
                <div className={styles.contents}>
                    <div className={styles.row + ' ' + styles.light}>
                        <div className={styles.col}>Banksdfsdf Name</div>
                        <div className={styles.col}>M and T Bank</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}