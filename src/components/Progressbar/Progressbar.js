import { BarContainer, Bar } from "./Progressbar.styled";
const Progressbar = ( {progress} ) => {
    return (
        <BarContainer>
            <Bar $progress={progress} /> 
        </BarContainer>
    )
}

export default Progressbar;