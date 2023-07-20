import React from 'react';
declare type Props = {
    label: string;
    id: string;
    defaultValue?: string;
    [x: string]: any;
};
export default function TextField({ error, label, id, defaultValue, ...rest }: Props): React.JSX.Element;
export {};
