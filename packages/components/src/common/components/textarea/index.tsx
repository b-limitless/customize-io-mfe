import { styled } from '@mui/system';
import * as React from 'react';

import { colors } from '../../config/colors';
interface TextAreaInterface {
    setter: any;
    getter: string;
    [x:string]:any;
}
const StyledTextarea = styled('textarea')(() => `
    font-family: Figtree, sans-serif !important;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 6px;
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    width:100%
    &:hover {
      border-color: ${colors.primary};
    }
    &:focus {
      border-color: ${colors.primary};
    }
    &:focus-visible {
      outline: 0;
    }
  `,
);
const TextArea: React.FC<TextAreaInterface> = ({ setter, getter, ...rest }: TextAreaInterface) => {
    return (
        <StyledTextarea
            value={getter}
            onChange={setter}
            {...rest}
            
        />
    );
}
export default TextArea;
