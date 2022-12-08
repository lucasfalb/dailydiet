import styled,{css} from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type MealTypeStyleProps = "GREEN" | "RED";

type Props = {
  type: MealTypeStyleProps
}
export const Container = styled(TouchableOpacity)`
  padding: 14px 16px 14px 12px;
  border: 1px solid ${({theme})=> theme.COLORS.GRAY_5};
  border-radius: 6px;
  align-items: center;
  flex-direction: row;
  margin-bottom: 8px;
`
export const Time = styled.Text`
 ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SSM}px;
  `};
  margin-right: 12px;
`
export const Hr = styled.View`
  width: 2px;
  height: 100%;
  max-height: 14px;
  background-color: ${({ theme}) => theme.COLORS.GRAY_4};
  margin-right: 12px;
`
export const MealTitle = styled.Text`
 ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  max-width: 75%;
`

export const IndicatorColor = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-left: auto;
  background-color: ${({theme, type}) => type === 'GREEN' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`