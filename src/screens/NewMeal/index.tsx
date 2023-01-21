import { HeaderPorcent } from "@components/HeaderPorcent"
import { Container } from "./styles"
import { useNavigation } from "@react-navigation/native";

export function NewMeal(){
    const navigation = useNavigation()
    function handleGoBack(){
        navigation.goBack();
    }
    return (<Container>
        <HeaderPorcent type="GRAY" title="..." goBack={handleGoBack}/>
    </Container>)
    
}