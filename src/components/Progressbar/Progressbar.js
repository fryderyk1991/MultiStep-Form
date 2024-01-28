import { BarContainer, Bar } from "./Progressbar.styled";
const Progressbar = ( {progress, showModal} ) => {
    return (
        <BarContainer $showModal={showModal}>
            <Bar $progress={progress} /> 
        </BarContainer>
    )
}

export default Progressbar;