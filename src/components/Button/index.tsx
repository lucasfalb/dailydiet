import { Container,Title,ButtonDefaultStyleProps,Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacityProps } from "react-native";
type Props = TouchableOpacityProps &{
    showIconButton?: boolean;
    iconName?: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonDefaultStyleProps
}
export function Button({showIconButton = false,iconName = 'add',type = 'BLACK', ...rest}: Props){
    return(
        <Container type={type} {...rest}>
            {showIconButton && <Icon name={iconName} type={type}/>}
            <Title type={type}>
                Nova refeição
            </Title>
        </Container>
    )
}