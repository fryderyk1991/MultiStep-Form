import { MdDone } from "react-icons/md";
import { ModalContainer, ModalContent, ModalCircle} from "./Modal.styled";
const Modal = () => {
    return (
        <ModalContainer>
            <ModalContent>
                <ModalCircle>
                <MdDone />
                </ModalCircle>
                <h4>Your data is submitted successfully !</h4>
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal;