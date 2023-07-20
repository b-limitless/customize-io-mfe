import React from 'react';
declare type confirmation = 'confirmation' | 'navigation';
declare type Props = {
    title: string;
    description: string;
    confirmation: confirmation;
};
export default function ConfirmationTemplate({ title, description, confirmation }: Props): React.JSX.Element;
export {};
