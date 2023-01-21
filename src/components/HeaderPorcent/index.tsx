import { BackButton } from "@components/BackButton";
import { Container,Title,SubTitle, StatisticsSylesTypeProps } from "./styles";

type Props = {
  type?: StatisticsSylesTypeProps;
  title: string;
  subTitle?: string;
  goBack?: () => void;
};
export function HeaderPorcent({ type = `GRAY`,goBack, title, subTitle = 'das refeições dentro da dieta' }: Props) {
  return (
    <Container type={type}>
      <BackButton type={type} onPress={goBack}/>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
