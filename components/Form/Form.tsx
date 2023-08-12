import { ForgotPass, Login, Oauth, Register } from "..";
import { FormProps } from "./Form.type";

const Form = ({ type, title }: FormProps) => {
    const formLogin = type === "login";
    const formRegister = type === "register";
    const formForgot = type === "forgot";

    return (
        <section
            className="m-auto bg-white max-w-[670px] min-w-[350px] 
        px-10 pb-10 pt-[34px] md:rounded-[20px]"
        >
            <h3 className="capitalize text-center text-[32px] font-bold mb-[34px]">
                {title}
            </h3>
            <div className="flex flex-col md:flex-row items-center md:items-start">
                {!formForgot && <Oauth />}
                {formLogin && <Login />}
                {formRegister && <Register />}
                {formForgot && <ForgotPass />}
            </div>
        </section>
    );
};

export default Form;
