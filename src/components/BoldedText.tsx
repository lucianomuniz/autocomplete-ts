import { FC } from 'react';

import { remarkupText } from '../utils';

interface propsType {
  bolded: string;
  children: string;
}

const BoldedText: FC<propsType> = ({ bolded, children }) => {
  var reg = new RegExp(bolded, 'gi');
  var boldedText = children.replace(reg, (str) => {
    return `<strong>${str}</strong>`;
  });
  return <div>{remarkupText(boldedText)}</div>;
};

export default BoldedText;
