import { CellTextBox, CellTextMain, CellTextAdd } from "./styled";

interface ICellTextItemProps {
  main: string;
  additional: string;
}

const CellTextItem = ({ main, additional }: ICellTextItemProps) => {
  return (
    <CellTextBox>
      <CellTextMain>{main}</CellTextMain>
      <CellTextAdd>{additional}</CellTextAdd>
    </CellTextBox>
  );
};

export default CellTextItem;
