import { ButtonProps } from "./Button.type";

const buttonTypes: { [key: string]: any } = {
    login: {
        style: "button-common",
        type: "submit",
    },
    register: {
        style: "button-common",
        type: "submit",
    },
    confirm: {
        style: "button-common",
        type: "submit",
    },
    addTransaction: {
        style: "button-common button-add-transaction",
        type: "button",
    },
    signOut: {
        style: "button-common",
        type: "button",
    },
};

const Button = ({ type, content, onClickFn }: ButtonProps) => {
    return (
        <button
            type={buttonTypes[type].type}
            className={buttonTypes[type].style}
            onClick={onClickFn}
        >
            <span className="uppercase">{content}</span>
        </button>
    );
};

export default Button;
