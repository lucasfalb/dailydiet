import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonDefaultStyleProps = "WHITE" | "BLACK";

type Props = {
  type: ButtonDefaultStyleProps;
}
export const Container = styled(TouchableOpacity)<Props>`
  background-color: ${({ theme, type }) =>  type === 'WHITE' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2};
  width: 100%;
  border: 1px solid ${({ theme, type }) =>  type === 'WHITE' ? theme.COLORS.GRAY_2 : theme.COLORS.GRAY_1};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  padding: 16px 24px;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    color: ${type === 'WHITE' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;
export const Icon = styled(MaterialIcons).attrs<Props>(
  ({ theme, type }) => ({
    size: 24,
    color: type === 'WHITE' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE,
  })
)``;
