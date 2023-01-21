import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 60px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;
export const NewMealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
  margin-top: 40px;
`;

export const TitleMeal = styled.Text`
${({ theme }) => css`
  color: ${theme.COLORS.GRAY_1};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.LG}px;
  background-color: ${theme.COLORS.GRAY_7};
`};
margin-bottom: 8px;
`;