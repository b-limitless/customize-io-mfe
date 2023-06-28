import React from 'react';
import styles from './shipping.module.scss';
import { camelCaseToNormal } from '@pasal/cio-component-library';

type Props = {}

const shippingMockData:any = {
  "shippingAddress": {
    "street": "123 Main St",
    "city": "Example City",
    "state": "Example State",
    "postalCode": "12345",
    "country": "Example Country"
  },
  "recipientName": "John Doe",
  "contactInformation": {
    "phone": "123-456-7890",
    "email": "johndoe@example.com"
  },
  "shippingMethod": "Standard Shipping",
  "trackingNumber": "ABC123XYZ",
  "shippingCost": 10.99,
  "shippingInstructions": "Leave package at the front porch"
};

export default function Shipping({}: Props) {
  return (
    <div className={styles.container}>
      {Object.keys(shippingMockData).map((key, i) => <div className={typeof shippingMockData[key] !== 'object' ? styles.string : styles.object}>
        <div className={styles.title}>{camelCaseToNormal(key).toUpperCase()}</div>
        {/* Values can be Object or string */}

        
        <div className={styles.value}>
        {typeof shippingMockData[key] === 'object' && <ul>{Object.keys(shippingMockData[key]).map((cKey, i) => <li><span>{ camelCaseToNormal(cKey).toUpperCase()}</span>:<span>{shippingMockData[key][cKey]}</span></li>)}</ul>}
        {typeof shippingMockData[key] !== 'object' && <>{shippingMockData[key]}</>}
      
        </div>
      </div>)}
    </div>
  )
}