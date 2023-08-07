import { ForgotPass, Login, Oauth, Register } from "..";
import { FormProps } from "./Form.type";

const Form = ({ type, title }: FormProps) => {
    const formLogin = type === "login";
    const formRegister = type === "register";
    const formForgot = type === "forgot";

    return (
        <section
            className="m-auto bg-white max-w-[670px] min-w-[400px] 
        px-10 pb-10 pt-[34px] rounded-[20px]"
        >
            <h3 className="capitalize text-center text-[32px] font-bold mb-[34px]">
                {title}
            </h3>
            <div className="flex">
                {!formForgot && <Oauth />}
                {formLogin && <Login />}
                {formRegister && <Register />}
                {formForgot && <ForgotPass />}
            </div>
        </section>
    );
};

export default Form;
