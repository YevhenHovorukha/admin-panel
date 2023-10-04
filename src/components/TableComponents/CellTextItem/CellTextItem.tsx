import { CellTextBox, CellTextTitle, CellTextInfo } from "./styled";

interface ICellTextItemProps {
  title: string;
  info: string;
}

const CellTextItem = ({ title, info }: ICellTextItemProps) => {
  return (
    <CellTextBox>
      <CellTextTitle>{title}</CellTextTitle>
      <CellTextInfo>{info}</CellTextInfo>
    </CellTextBox>
  );
};

export default CellTextItem;
