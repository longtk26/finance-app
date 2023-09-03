import { PopUpProps } from "./PopUp.types";

const PopUp = ({ isOpen, close, children }: PopUpProps) => {
    if (isOpen) {
        return (
            <div
                onClick={close}
                className="fixed top-0 bottom-0 right-0 left-0 bg-black/20"
            >
                {children}
            </div>
        );
    }
};

export default PopUp;
