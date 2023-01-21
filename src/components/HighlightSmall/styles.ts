import styled, { css } from "styled-components/native";
export type ContainerDefaultStyleProps = "GREEN" | "RED" | "GRAY";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
type Props = {
  type: ContainerDefaultStyleProps;
};
export const Container = styled(TouchableOpacity)<Props>`
  padding: 16px 20px;
  width:49%;
  min-height: 102px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === "GRAY"
      ? theme.COLORS.GRAY_6
      : type === "GREEN"
      ? theme.COLORS.GREEN_MID
      : theme.COLORS.RED_LIGHT};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `};
  text-align: center;
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
  text-align: center;
  max-width: 135px;
  margin: auto;
`;
export const IconRouter = styled(MaterialIcons).attrs<Props>(
  ({ theme, type }) => ({
    size: 32,
    color:
      type === "GRAY"
        ? theme.COLORS.GRAY_6
        : type === "GREEN"
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK,
  })
)`
  margin-left: auto;
  margin-bottom: -20px;
  margin-top: -5px;
  margin-right: -5px;
`;
