import React, { ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    ref: any;
};
declare const Model: React.ForwardRefExoticComponent<Pick<Props, "children"> & React.RefAttributes<HTMLDivElement>>;
export default Model;
