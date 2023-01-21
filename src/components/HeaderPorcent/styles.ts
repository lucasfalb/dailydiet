import styled, { css } from "styled-components/native";

export type StatisticsSylesTypeProps = "GREEN" | "RED" | "GRAY";

type Props = {
  type: StatisticsSylesTypeProps;
};
export const Container = styled.View<Props>`
  width: 100%;
  height: 200px;
  padding: 45px 24px;
  background-color: ${({ theme, type }) =>
    type === "GRAY" ? theme.COLORS.GRAY_6: type === 'GREEN' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    text-align: center;
  `};
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    text-align: center;
  `};
`;