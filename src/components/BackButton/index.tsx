import { Container, BackIcon,BackIconDefaultStyleProps } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap;
  type?: BackIconDefaultStyleProps;
};
export function BackButton({icon = 'arrow-back' , type = 'RED', ...rest}: Props){
    return(
        <Container {...rest}>
        <BackIcon name={icon} type={type} />
      </Container>
    )
}