import { Container,Title,ButtonDefaultStyleProps,Icon } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
type Props = {
    showIconButton?: boolean;
    iconName?: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonDefaultStyleProps
}
export function Button({showIconButton = false,iconName = 'add',type = 'BLACK'}: Props){
    return(
        <Container type={type}>
            {showIconButton && <Icon name={iconName} type={type}/>}
            <Title type={type}>
                Nova refeição
            </Title>
        </Container>
    )
}