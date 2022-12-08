import { Container, NewMealTitle } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";
import { FlatList } from "react-native";
import { DayList } from "@components/DayList";
export function Home() {
  const data = ['']
  return (
    <Container>
      <Header />
      <Highlight showRouterIcon type="GREEN" title="90,86%" icon="call-made" />
      <NewMealTitle>Refeições</NewMealTitle>
      <Button showIconButton />
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <DayList />
        )}
        contentContainerStyle={data.length === 0 && { flex: 1 }}
        ListEmptyComponent={
          <ListEmpty message="Que tal cadastrar uma refeição?" />
        }
      />
    </Container>
  );
}
