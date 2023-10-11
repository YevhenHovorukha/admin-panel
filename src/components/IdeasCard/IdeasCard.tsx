import {
  CardBox,
  IdeaText,
  UserBox,
  UserName,
  UserPhoto,
  IdeaInfo,
} from "./styled";

interface IIdeasCardProps {
  image: string;
  name: string;
  idea: string;
}

const IdeasCard = ({ image, name, idea }: IIdeasCardProps) => {
  return (
    <CardBox>
      <UserBox>
        <UserPhoto src={image} />
        <UserName>{name}</UserName>
      </UserBox>
      <IdeaInfo>IDEA:</IdeaInfo>
      <IdeaText>{idea}</IdeaText>
    </CardBox>
  );
};

export default IdeasCard;
