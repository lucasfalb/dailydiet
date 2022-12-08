import { Container, Logo, Avatar,AvatarImage } from "./styles";
import logoImg from "@assets/logo.png";
import avatar from "@assets/avatar.png";
export function Header(){
    return (
        <Container>
            <Logo source={logoImg} />

            <Avatar>
                <AvatarImage source={avatar} />
            </Avatar>
        </Container>
    )
}