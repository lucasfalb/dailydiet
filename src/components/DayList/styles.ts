import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
  margin-bottom: 8px;
  margin-top:12px;
`;
