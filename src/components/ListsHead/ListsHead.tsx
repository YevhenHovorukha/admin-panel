import {
  StyledBox,
  TextContainer,
  MainText,
  StyledLink,
  InfoText,
  InfoTextSpan,
} from "./styled";

interface IListHeadProps {
  text: string;
  linkText: string;
  info: string;
  infoSpan?: string;
}

const ListsHead = ({ text, linkText, info, infoSpan }: IListHeadProps) => {
  const spanText = <InfoTextSpan>{infoSpan}</InfoTextSpan>;
  return (
    <StyledBox>
      <TextContainer>
        <MainText>{text}</MainText>
        <StyledLink href="#">{linkText}</StyledLink>
      </TextContainer>
      <InfoText>
        {info} {spanText}
      </InfoText>
    </StyledBox>
  );
};

export default ListsHead;
