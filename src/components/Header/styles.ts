import styled from "styled-components/native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  margin-bottom: 33px;
`;
export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Avatar = styled(TouchableOpacity)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
export const AvatarImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;