import { FC } from 'react';
interface propsType {
  bolded: string;
  children: string;
}

const BoldedText: FC<propsType> = ({ bolded, children }) => {
  var reg = new RegExp(bolded, 'gi');
  var boldedText = children.replace(reg, (str) => {
    return `<strong>${str}</strong>`;
  });
  return <div dangerouslySetInnerHTML={{ __html: `${boldedText}` }} />;
};

export default BoldedText;
