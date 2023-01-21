import styled,{css} from 'styled-components/native'
export const Container = styled.View`
  flex: 1;
`
export const Content = styled.View`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  flex: 1;
  border-radius: 30px 30px 0 0;
  margin-top: -15px;
  padding: 24px;
`
export const TitleSection = styled.Text`
   ${({ theme}) => css`
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
  text-align: center;
  margin-bottom: 23px;
  `

export const Wrapper = styled.View`
  flex-direction: row;
`