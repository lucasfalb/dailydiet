import { HeaderPorcent } from "@components/HeaderPorcent";
import { Container, Content, TitleSection, Wrapper } from "./styles";
import { Highlight } from "@components/Highlight";
import { HighlightSmall } from "@components/HighlightSmall";
import { useNavigation } from "@react-navigation/native";
export function Statistics() {
  const navigation = useNavigation()

  function handleBackScreen(){
    navigation.goBack()
  }

  return (
    <Container>
      <HeaderPorcent type="GREEN" title="90,86%" goBack={handleBackScreen} />
      <Content>
        <TitleSection>Estatísticas gerais</TitleSection>
        <Highlight
          style={{ marginBottom: 12 }}
          type="GRAY"
          title="22"
          subTitle="melhor sequência de pratos dentro da dieta"
        />
        <Highlight
          style={{ marginBottom: 12 }}
          type="GRAY"
          title="109"
          subTitle="refeições registradas"
        />
        <Wrapper>
          <HighlightSmall
            style={{ marginRight: 6 }}
            type="GREEN"
            title="99"
            subTitle="refeições dentro da dieta"
          />
          <HighlightSmall
            style={{ marginLeft: 6 }}
            type="RED"
            title="10"
            subTitle="refeições fora da dieta"
          />
        </Wrapper>
      </Content>
    </Container>
  );
}
