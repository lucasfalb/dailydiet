import { Container, Time, Hr,MealTitle,MealTypeStyleProps, IndicatorColor } from "./styles";
type Props = {
    type?: MealTypeStyleProps;
    time: string;
    title: string;
}
export function DayListMeal({type = 'GREEN',time,title}: Props){
    return (
        <Container>
            <Time>
                {time}
            </Time>
            <Hr />
            <MealTitle numberOfLines={1} ellipsizeMode="tail">
               {title}
            </MealTitle>
            <IndicatorColor type={type} />
        </Container>
    )
}
