import {LoaderText, LoaderWrapper, Loading} from "./Loader.styled.js";

const Loader = () => {
    return (
        <LoaderWrapper>
            <Loading/>
            <LoaderText>Подождите, загружаю...</LoaderText>
        </LoaderWrapper>
    )
}

export default Loader
