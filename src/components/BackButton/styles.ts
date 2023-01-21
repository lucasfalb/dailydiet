import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export type BackIconDefaultStyleProps = "GREEN" | "RED" | "GRAY";
type Props = {
  type: BackIconDefaultStyleProps;
};
export const Container = styled(TouchableOpacity)`
  width: 56px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

export const BackIcon = styled(MaterialIcons).attrs<Props>(
  ({ theme, type }) => ({
    size: 32,
    color:
      type === "GRAY"
        ? theme.COLORS.GRAY_2
        : type === "GREEN"
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK,
  })
)``;
