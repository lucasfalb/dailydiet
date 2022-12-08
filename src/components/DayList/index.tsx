import { DayListMeal } from "@components/DayListMeal";
import { Container, Title } from "./styles";

export function DayList(){
    return (
        <Container>
            <Title>06.12.2022</Title>
            <DayListMeal time="02:19" title="Pipocas Betti 6x"/>
            <DayListMeal time="19:10" title="Pão pizza 3x"/>
            <DayListMeal time="16:24" title="Cerveja"/>
            <DayListMeal time="15:50" title="Uma maçã"/>
            <DayListMeal time="13:14" title="Almoço padrão"/>
            <DayListMeal time="10:28" title="Miojo de carne"/>
        </Container>
    )
}