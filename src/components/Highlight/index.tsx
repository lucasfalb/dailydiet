import {
  Container,
  Title,
  SubTitle,
  IconRouter,
  ContainerDefaultStyleProps,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  showRouterIcon?: boolean;
  subTitle?: string;
  type?: ContainerDefaultStyleProps;
};
export function Highlight({
  title,
  subTitle = "das refeições dentro da dieta",
  type = "GREEN",
  icon,
  showRouterIcon = false,
  ...rest
}: Props) {
  return (
    <Container {...rest} type={type}>
      {showRouterIcon && <IconRouter name={icon} type={type}/>}
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
}
