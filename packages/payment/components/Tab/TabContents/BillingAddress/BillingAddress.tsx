import { RectangelData } from '@pasal/cio-component-library';
import React from 'react';
import { PaymentDetailsInterface } from '../../../Payment/payment.interface';

type Props = {};

const paymentDetails: PaymentDetailsInterface = {
    billingAddress: {
        "firstName": "John",
        "lastName": "Doe",
        "addressLine1": "123 Main St",
        "addressLine2": "",
        "city": "Anytown",
        "state": "CA",
        "postalCode": "12345",
        "country": "USA"
    },
    shippingAddress: {
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

export default function BillingAddress({ }: Props) {
    return (
        <RectangelData data={paymentDetails}/>
    )
}