import { Container, NewMealTitle, TitleMeal } from "./styles";
import { HeaderAvatar } from "@components/HeaderAvatar";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { SectionList } from "react-native";
import { DayListMeal } from "@components/DayListMeal";
import { useNavigation } from "@react-navigation/native";
export function Home() {
  const navigation = useNavigation()
  function handleStatistics(){
    navigation.navigate("statistics")
  }
  function handleNewMeal(){
    navigation.navigate("newMeal")
  }
  const data = [
    {
      title: "08/12/2022",
      data: [
        { meal: "French Fries", time: "12:48", id: 1 },
        { meal: "Onion Rings", time: "10:48", id: 2 },
        { meal: "Fried Shrimps", time: "08:48", id: 3 },
      ],
    },
    {
      title: "07/12/2022",
      data: [
        { meal: "French Fries", time: "18:48", id: 2 },
        { meal: "Onion Rings", time: "15:48", id: 3 },
        { meal: "Fried Shrimps", time: "13:48", id: 4 },
      ],
    },
    {
      title: "06/12/2022",
      data: [
        { meal: "French Fries", time: "18:48", id: 5 },
        { meal: "Onion Rings", time: "15:48", id: 6 },
        { meal: "Fried Shrimps", time: "13:48", id: 7 },
      ],
    },
    {
      title: "08/12/2022",
      data: [
        { meal: "French Fries", time: "12:48", id: 1 },
        { meal: "Onion Rings", time: "10:48", id: 2 },
        { meal: "Fried Shrimps", time: "08:48", id: 3 },
      ],
    },
    {
      title: "07/12/2022",
      data: [
        { meal: "French Fries", time: "18:48", id: 2 },
        { meal: "Onion Rings", time: "15:48", id: 3 },
        { meal: "Fried Shrimps", time: "13:48", id: 4 },
      ],
    },
    {
      title: "06/12/2022",
      data: [
        { meal: "French Fries", time: "18:48", id: 5 },
        { meal: "Onion Rings", time: "15:48", id: 6 },
        { meal: "Fried Shrimps", time: "13:48", id: 7 },
      ],
    },
  ];
  return (
    <Container>
      <HeaderAvatar />
      <Highlight showRouterIcon onPress={handleStatistics} type="GREEN" title="90,86%"/>
      <NewMealTitle>Refeições</NewMealTitle>
      <Button showIconButton onPress={handleNewMeal}/>
      <SectionList
        sections={data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id + ""}
        renderSectionHeader={({ section: { title } }) => (
          <TitleMeal>{title}</TitleMeal>
        )}
        renderItem={({ item }) => (
          <DayListMeal time={item.time} title={item.meal} />
        )}
      />
    </Container>
  );
}
