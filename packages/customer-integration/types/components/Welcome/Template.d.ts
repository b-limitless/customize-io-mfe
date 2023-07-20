import React from 'react';
interface style {
    [x: string]: string;
}
interface TemplateInterface {
    loading: boolean;
    welcome?: boolean;
    data: any[];
    addStyles: style;
}
export default function Template({ welcome, loading, data, addStyles }: TemplateInterface): React.JSX.Element;
export {};
